import { useMutation } from "react-query";
import { runConversion } from "@/apis/runConversion";

export function useConversion() {
  return useMutation((text: string) => runConversion({ text }));
}
