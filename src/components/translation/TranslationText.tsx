// components/TranslationComponent.tsx
import React from 'react';
import { useTranslation } from '../../hooks/useTranslation'; // adjust the import path to match your file structure

interface TranslationTextProps {
  text: string;
  targetLanguage: string;
}

const TranslationText: React.FC<TranslationTextProps> = ({
  text,
  targetLanguage,
}) => {
  const { data, isLoading, error } = useTranslation({ text, targetLanguage });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return <div>Translation result: {JSON.stringify(data)}</div>;
};

export default TranslationText;
