// components/TranslationComponent.tsx
import React from "react";
import { useConversion } from "@/hooks/useConversion"; // adjust the import path to match your file structure

interface ConversionTextProps {
  text: string;
}

const ConversionText: React.FC<ConversionTextProps> = ({
  text,
}) => {
  const { data, isLoading, error } = useConversion({ text });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default ConversionText;
