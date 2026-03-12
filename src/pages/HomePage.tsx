import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { Link } from "react-router-dom";
import { Brain, Pill, MapPin, Languages, ArrowRight, Heart, Shield, Zap } from "lucide-react";

const features = [
  { key: "feature1", icon: Brain, color: "text-primary" },
  { key: "feature2", icon: Pill, color: "text-secondary" },
  { key: "feature3", icon: MapPin, color: "text-accent" },
  { key: "feature4", icon: Languages, color: "text-primary" },
];

const HomePage = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            {language === "hi" ? "मुफ्त स्वास्थ्य मार्गदर्शन" : language === "mr" ? "विनामूल्य आरोग्य मार्गदर्शन" : "Free Health Guidance"}
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-4 leading-tight">
            {t("heroTitle", language)}
          </h1>
          <p className="text-base md:text-lg text-primary-foreground/85 mb-8 max-w-xl mx-auto leading-relaxed">
            {t("heroSubtitle", language)}
          </p>
          <Link
            to="/check"
            className="inline-flex items-center gap-2 bg-card text-primary px-8 py-4 rounded-xl font-heading font-bold text-lg hover:bg-card/90 transition-colors"
          >
            <Heart className="w-5 h-5" />
            {t("startChecking", language)}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.key} className="bg-card rounded-2xl border border-border p-6 card-elevated flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center shrink-0">
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground mb-1">{t(`${feature.key}Title`, language)}</h3>
                    <p className="text-sm text-muted-foreground">{t(`${feature.key}Desc`, language)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-muted/50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
            {language === "hi" ? "यह कैसे काम करता है" : language === "mr" ? "हे कसे काम करते" : "How It Works"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "1", icon: "🩺", title: language === "hi" ? "लक्षण चुनें" : language === "mr" ? "लक्षणे निवडा" : "Select Symptoms" },
              { step: "2", icon: "🤖", title: language === "hi" ? "AI विश्लेषण" : language === "mr" ? "AI विश्लेषण" : "AI Analysis" },
              { step: "3", icon: "💊", title: language === "hi" ? "मार्गदर्शन प्राप्त करें" : language === "mr" ? "मार्गदर्शन मिळवा" : "Get Guidance" },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="w-8 h-8 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {item.step}
                </div>
                <p className="font-heading font-semibold text-foreground">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Created By */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            {language === "hi" ? "निर्माता टीम" : language === "mr" ? "निर्माता संघ" : "Created By"}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-3 text-left font-heading font-bold text-foreground">Sr. No.</th>
                  <th className="px-6 py-3 text-left font-heading font-bold text-foreground">
                    {language === "hi" ? "नाम" : language === "mr" ? "नाव" : "Name"}
                  </th>
                  <th className="px-6 py-3 text-left font-heading font-bold text-foreground">
                    {language === "hi" ? "भूमिका" : language === "mr" ? "भूमिका" : "Role"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Setu Singh", role: "Developer" },
                  { name: "Aditya Takzure", role: "Developer" },
                  { name: "Sahil Lawand", role: "Developer" },
                  { name: "Siddhesh Yadav", role: "Developer" },
                ].map((member, i) => (
                  <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground font-semibold">{i + 1}</td>
                    <td className="px-6 py-4 text-foreground font-semibold">{member.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{member.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <Zap className="w-10 h-10 text-secondary mx-auto mb-4" />
          <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
            {language === "hi" ? "अभी अपना स्वास्थ्य जांचें" : language === "mr" ? "आत्ता तुमचे आरोग्य तपासा" : "Check Your Health Now"}
          </h2>
          <Link
            to="/check"
            className="inline-flex items-center gap-2 hero-gradient text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold text-lg hover:opacity-90 transition-opacity mt-4"
          >
            {t("startChecking", language)}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
