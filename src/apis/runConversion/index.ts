// runConversion.ts
import openai from "@/pages/api/openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

interface Props {
  text: string;
}

export async function runConversion({
  text,
}: Props): Promise<ChatCompletionMessageParam> {
  const response = await openai.chat.completions.create({
    model: "gpt-4", // Adjust the model as needed
    messages: [
      {
        role: "user",
        content: `Convert a given ${text} to the target json format. Return only the converted json. the format is 
{
  "tokenid": "123456",
  "name": "First Last",
  "id": "78910",
  "dateOfbirth": "12/17/2023",
  "countryOfbirth": "U.S.A",
  "medHistory": "Chickenpox 10/23/2024, Flu Vaccine 05/25/2016"
}`,
      },
    ],
    temperature: 0.1,
  });

  return response.choices[0].message;
}

export default runConversion;
