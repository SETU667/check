import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t, Language } from "@/data/translations";
import { SYMPTOMS } from "@/data/symptoms";
import VoiceInput from "./VoiceInput";
import { Search, X } from "lucide-react";

const SymptomForm = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>([]);
  const lang = language as Language;

  const toggleSymptom = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleVoice = (text: string) => {
    const lower = text.toLowerCase();
    SYMPTOMS.forEach((symptom) => {
      const nameEn = symptom.name.en.toLowerCase();
      const nameHi = symptom.name.hi.toLowerCase();
      const nameMr = symptom.name.mr.toLowerCase();
      if (lower.includes(nameEn) || lower.includes(nameHi) || lower.includes(nameMr)) {
        setSelected((prev) => (prev.includes(symptom.id) ? prev : [...prev, symptom.id]));
      }
    });
  };

  const handleSubmit = () => {
    if (selected.length < 2) return;
    navigate(`/results?symptoms=${selected.join(",")}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
          {t("selectSymptoms", lang)}
        </h2>
        <p className="text-muted-foreground">{t("selectSymptomsDesc", lang)}</p>
      </div>

      {/* Voice + Count */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <VoiceInput onResult={handleVoice} />
        <div className="flex items-center gap-3">
          {selected.length > 0 && (
            <button
              onClick={() => setSelected([])}
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              {t("clearAll", lang)}
            </button>
          )}
          <span className="text-sm font-semibold text-primary">
            {selected.length} {t("selectedCount", lang)}
          </span>
        </div>
      </div>

      {/* Symptom Grid */}
      <div className="flex flex-wrap gap-2.5">
        {SYMPTOMS.map((symptom) => (
          <button
            key={symptom.id}
            onClick={() => toggleSymptom(symptom.id)}
            className={`symptom-chip ${selected.includes(symptom.id) ? "selected" : ""} ${
              symptom.isEmergency ? "border-emergency/30" : ""
            }`}
          >
            <span className="text-lg">{symptom.icon}</span>
            {symptom.name[lang]}
            {symptom.isEmergency && <span className="text-xs">⚠️</span>}
          </button>
        ))}
      </div>

      {/* Submit */}
      <div className="flex justify-center pt-2">
        <button
          onClick={handleSubmit}
          disabled={selected.length < 2}
          className="hero-gradient text-primary-foreground px-10 py-4 rounded-xl font-heading font-bold text-lg disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <Search className="w-5 h-5" />
          {t("predict", lang)}
        </button>
      </div>
    </div>
  );
};

export default SymptomForm;
