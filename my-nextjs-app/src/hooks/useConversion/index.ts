import { useQuery } from "react-query";
import { runConversion } from "@/apis/runConversion";

interface Props {
  text: string;
}

export function useConversion({ text }: Props) {
  const { data, isLoading, error } = useQuery(
    ["conversion", { text}],
    ({ queryKey }) => {
      const [, queryProps] = queryKey;
      return runConversion(queryProps as Props);
    }
  );

  return { data, isLoading, error };
}
