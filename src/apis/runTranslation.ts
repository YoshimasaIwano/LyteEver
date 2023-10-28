// runTranslation.ts
import { ChatCompletionMessageParam } from 'openai/resources';
import openai from '../config/openai';

interface Props {
  text: string;
  targetLanguage: string;
}

export async function runTranslation({
  text,
  targetLanguage,
}: Props): Promise<ChatCompletionMessageParam> {
  const messages: ChatCompletionMessageParam[] = [
    { role: 'user', content: `Translate '${text}' to ${targetLanguage}.` },
  ];
  const functions = [
    {
      name: 'translate_text',
      description:
        'Translate a given text to the target language and return the translated text only',
      parameters: {
        type: 'object',
        properties: {
          text: { type: 'string', description: 'The text to be translated' },
          targetLanguage: {
            type: 'string',
            description: 'The target language for translation',
          },
        },
        required: ['text'],
      },
    },
  ];

  const response = await openai.chat.completions.create({
    model: 'gpt-4', // Adjust the model as needed
    messages: messages,
    functions: functions,
    function_call: 'auto',
  });
  const responseMessage = response.choices[0].message;

  if (responseMessage.function_call) {
    const functionName = responseMessage.function_call.name;
    
    messages.push(responseMessage);
    messages.push({
      role: 'function',
      name: functionName,
      content: JSON.stringify({ text: text, targetLanguage: targetLanguage }),
    });

    const secondResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
    });

    return secondResponse.choices[0].message;
  }

  return response.choices[0].message;
}

export default runTranslation;
