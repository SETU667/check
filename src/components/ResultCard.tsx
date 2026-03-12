import { useLanguage } from "@/context/LanguageContext";
import { t, Language } from "@/data/translations";
import { Disease } from "@/data/diseases";
import { getMedicineForDisease } from "@/data/medicines";
import { Pill, Leaf, Stethoscope, TrendingUp } from "lucide-react";

interface ResultCardProps {
  disease: Disease;
  score: number;
}

const severityColor = (s: string) => {
  if (s === "high") return "bg-emergency/15 text-emergency";
  if (s === "medium") return "bg-warning/15 text-warning";
  return "bg-success/15 text-success";
};

const ResultCard = ({ disease, score }: ResultCardProps) => {
  const { language } = useLanguage();
  const medicine = getMedicineForDisease(disease.id);
  const lang = language as Language;

  return (
    <div className="bg-card rounded-2xl border border-border card-elevated p-6 space-y-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-heading font-bold text-foreground">
            {disease.name[lang]}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{disease.description[lang]}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-bold">
            <TrendingUp className="w-4 h-4" />
            {score}%
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${severityColor(disease.severity)}`}>
            {t(disease.severity, lang)}
          </span>
        </div>
      </div>

      {medicine && (
        <>
          {/* Medicines */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-heading font-semibold text-foreground">
              <Pill className="w-4 h-4 text-primary" />
              {t("medicines", lang)}
            </div>
            <div className="flex flex-wrap gap-2">
              {medicine.medicines.map((m, i) => (
                <span key={i} className="bg-primary/10 text-primary text-sm px-3 py-1.5 rounded-lg font-medium">
                  {m[lang]}
                </span>
              ))}
            </div>
          </div>

          {/* Home Remedies */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-heading font-semibold text-foreground">
              <Leaf className="w-4 h-4 text-success" />
              {t("homeRemedies", lang)}
            </div>
            <ul className="space-y-1.5">
              {medicine.homeRemedies.map((r, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-success mt-0.5">•</span>
                  {r[lang]}
                </li>
              ))}
            </ul>
          </div>

          {/* Advice */}
          <div className="bg-muted rounded-xl p-4 flex items-start gap-3">
            <Stethoscope className="w-5 h-5 text-accent mt-0.5 shrink-0" />
            <div>
              <p className="text-xs font-heading font-semibold text-foreground mb-1">{t("doctorAdvice", lang)}</p>
              <p className="text-sm text-muted-foreground">{medicine.advice[lang]}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ResultCard;
