import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/data/translations";

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hi", label: "हिंदी", flag: "🇮🇳" },
  { code: "mr", label: "मराठी", flag: "🇮🇳" },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex gap-1">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
            language === lang.code
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-primary/10"
          }`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
