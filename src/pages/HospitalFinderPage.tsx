import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { MapPin, Navigation, Phone, ExternalLink } from "lucide-react";

interface Hospital {
  name: string;
  distance: string;
  phone: string;
  type: string;
}

const SAMPLE_HOSPITALS: Hospital[] = [
  { name: "Primary Health Centre (PHC)", distance: "2.3 km", phone: "+91 1234567890", type: "Government" },
  { name: "Community Health Centre", distance: "5.1 km", phone: "+91 9876543210", type: "Government" },
  { name: "District Hospital", distance: "12.7 km", phone: "+91 1122334455", type: "Government" },
  { name: "Ayushman Clinic", distance: "3.8 km", phone: "+91 5566778899", type: "Private" },
  { name: "Rural Medical Centre", distance: "7.2 km", phone: "+91 6677889900", type: "Private" },
];

const HospitalFinderPage = () => {
  const { language } = useLanguage();
  const [locationDetected, setLocationDetected] = useState(false);
  const [loading, setLoading] = useState(false);

  const detectLocation = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setLocationDetected(true);
          setLoading(false);
        },
        () => {
          setLocationDetected(true);
          setLoading(false);
        }
      );
    } else {
      setLocationDetected(true);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-3xl space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            {t("nearbyHospitals", language)}
          </h2>
          <p className="text-muted-foreground">{t("searchHospitals", language)}</p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={detectLocation}
            disabled={loading}
            className="hero-gradient text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50"
          >
            <Navigation className="w-5 h-5" />
            {loading ? "..." : t("detectLocation", language)}
          </button>
        </div>

        {locationDetected && (
          <div className="space-y-4">
            {SAMPLE_HOSPITALS.map((hospital, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border card-elevated p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-foreground">{hospital.name}</h3>
                  <div className="flex flex-wrap gap-3 mt-1">
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5" />
                      {hospital.distance}
                    </span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full font-medium">
                      {hospital.type}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={`tel:${hospital.phone}`}
                    className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4" />
                    {language === "hi" ? "कॉल करें" : language === "mr" ? "कॉल करा" : "Call"}
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/${encodeURIComponent(hospital.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-muted text-foreground px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-muted/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {language === "hi" ? "नक्शा" : language === "mr" ? "नकाशा" : "Map"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HospitalFinderPage;
