"use client";

import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language);

  useEffect(() => {
    setCurrentLang(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "pt-BR" : "en";
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return (
    <header className="w-full py-4 px-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm text-muted-foreground max-w-2xl">
          {t("open-source-notice")}
        </div>

        <Button
          onClick={toggleLanguage}
          variant="outline"
          size="sm"
          className="bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10"
        >
          <Globe className="h-4 w-4 mr-2" />
          {currentLang === "en" ? "PT" : "EN"}
        </Button>
      </div>
    </header>
  );
}
