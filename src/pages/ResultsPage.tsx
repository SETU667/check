import { useSearchParams, Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { predictDisease } from "@/data/diseases";
import { SYMPTOMS } from "@/data/symptoms";
import ResultCard from "@/components/ResultCard";
import EmergencyAlert from "@/components/EmergencyAlert";
import { ArrowLeft, AlertCircle } from "lucide-react";

const ResultsPage = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const symptomIds = (searchParams.get("symptoms") || "").split(",").filter(Boolean);
  const results = predictDisease(symptomIds);
  const hasEmergency = symptomIds.some((id) => SYMPTOMS.find((s) => s.id === id)?.isEmergency);

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl space-y-6">
        <Link
          to="/check"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("backToChecker", language)}
        </Link>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          {t("possibleDiseases", language)}
        </h2>

        {hasEmergency && <EmergencyAlert />}

        {results.length > 0 ? (
          <div className="space-y-5">
            {results.map((r) => (
              <ResultCard key={r.disease.id} disease={r.disease} score={r.score} />
            ))}
          </div>
        ) : (
          <div className="bg-card rounded-2xl border border-border p-8 text-center space-y-3">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground">{t("noResults", language)}</p>
            <Link
              to="/check"
              className="inline-flex items-center gap-2 hero-gradient text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              {t("backToChecker", language)}
            </Link>
          </div>
        )}

        <div className="bg-muted rounded-xl p-4 text-center">
          <p className="text-xs text-muted-foreground">⚠️ {t("disclaimer", language)}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
