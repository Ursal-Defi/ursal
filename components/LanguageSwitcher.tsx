'use client';

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'pt-BR' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-4 right-4 z-50 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
    >
      <Globe className="h-4 w-4 mr-2" />
      {i18n.language === 'en' ? 'PT' : 'EN'}
    </Button>
  );
}