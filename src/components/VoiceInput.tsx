import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/data/translations";
import { Mic, MicOff } from "lucide-react";

interface VoiceInputProps {
  onResult: (text: string) => void;
}

const VoiceInput = ({ onResult }: VoiceInputProps) => {
  const { language } = useLanguage();
  const [isListening, setIsListening] = useState(false);
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported("webkitSpeechRecognition" in window || "SpeechRecognition" in window);
  }, []);

  const startListening = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = language === "hi" ? "hi-IN" : language === "mr" ? "mr-IN" : "en-IN";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setIsListening(false);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.onend = () => setIsListening(false);

    recognition.start();
  };

  if (!supported) return null;

  return (
    <button
      onClick={startListening}
      disabled={isListening}
      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-base transition-all duration-200 ${
        isListening
          ? "bg-emergency text-emergency-foreground animate-pulse"
          : "bg-accent text-accent-foreground hover:opacity-90"
      }`}
    >
      {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
      {isListening ? t("listening", language) : t("voiceInput", language)}
    </button>
  );
};

export default VoiceInput;
