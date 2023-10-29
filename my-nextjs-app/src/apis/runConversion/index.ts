// runConversion.ts
import openai from "@/config/openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

interface Props {
  text: string;
}

export async function runConversion({
  text,
}: Props): Promise<ChatCompletionMessageParam> {
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "user",
      content: `Conversion '${text}' to specific format in json`,
    },
  ];
  const functions = [
    {
      name: "conversion_text",
      description: `conversion a given text to the target json format and return the converted json only. the format is 
{
  "tokenid": "123456",
  "name": "First Last",
  "id": "78910",
  "dateOfbirth": "12/17/2023",
  "countryOfbirth": "U.S.A",
  "medHistory": "Chickenpox, Flu Vaccine"
}`,
      parameters: {
        type: "object",
        properties: {
          text: { type: "string", description: "The text to be converted" },
        },
        required: ["text"],
      },
    },
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4", // Adjust the model as needed
    messages: messages,
    functions: functions,
    function_call: "auto",
  });
  const responseMessage = response.choices[0].message;

  if (responseMessage.function_call) {
    const functionName = responseMessage.function_call.name;

    messages.push(responseMessage);
    messages.push({
      role: "function",
      name: functionName,
      content: JSON.stringify({ text: text }),
    });

    const secondResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: messages,
    });

    return secondResponse.choices[0].message;
  }

  return response.choices[0].message;
}

export default runConversion;
