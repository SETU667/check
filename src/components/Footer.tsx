import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { Heart } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-primary" />
            <span className="font-heading font-bold text-foreground">{t("appName", language)}</span>
          </div>
          <div className="max-w-xl text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              ⚠️ {t("disclaimer", language)}
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 AI Symptom Checker. {language === "hi" ? "सभी अधिकार सुरक्षित।" : language === "mr" ? "सर्व हक्क राखीव." : "All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
