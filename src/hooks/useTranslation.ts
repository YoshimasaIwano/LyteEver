import { useQuery } from 'react-query';
import { runTranslation } from '../apis/runTranslation';

interface Props {
  text: string;
  targetLanguage: string;
}

export function useTranslation({ text, targetLanguage }: Props) {
  const { data, isLoading, error } = useQuery(
    ['translation', { text, targetLanguage }],
    ({ queryKey }) => {
      const [, queryProps] = queryKey;
      return runTranslation(queryProps as Props);
    }
  );

  return { data, isLoading, error };
}
