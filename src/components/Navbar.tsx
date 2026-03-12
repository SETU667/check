import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import LanguageSelector from "./LanguageSelector";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: "/", label: t("home", language) },
    { to: "/check", label: t("checkSymptoms", language) },
    { to: "/hospitals", label: t("findHospitals", language) },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl hero-gradient flex items-center justify-center">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="hidden sm:block">
            <p className="font-heading font-bold text-foreground leading-tight">{t("appName", language)}</p>
            <p className="text-xs text-muted-foreground">{t("appSubtitle", language)}</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-semibold text-sm transition-colors ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSelector />
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 px-3 rounded-lg font-semibold text-base ${
                location.pathname === link.to ? "bg-primary/10 text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <LanguageSelector />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
