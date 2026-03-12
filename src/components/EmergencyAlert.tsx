import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { AlertTriangle, Phone } from "lucide-react";

const EmergencyAlert = () => {
  const { language } = useLanguage();

  return (
    <div className="bg-emergency/10 border-2 border-emergency rounded-2xl p-6 emergency-pulse">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="w-16 h-16 rounded-full bg-emergency flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-emergency-foreground" />
        </div>
        <h3 className="text-xl font-heading font-bold text-emergency">
          🚨 {t("emergencyAlert", language)}
        </h3>
        <p className="text-sm text-foreground max-w-md">
          {t("emergencyDesc", language)}
        </p>
        <a
          href="tel:112"
          className="inline-flex items-center gap-2 bg-emergency text-emergency-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
        >
          <Phone className="w-6 h-6" />
          {t("callEmergency", language)}
        </a>
      </div>
    </div>
  );
};

export default EmergencyAlert;
