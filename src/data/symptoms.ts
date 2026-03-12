export interface Symptom {
  id: string;
  name: { en: string; hi: string; mr: string };
  icon: string;
  isEmergency?: boolean;
}

export const SYMPTOMS: Symptom[] = [
  { id: "fever", name: { en: "Fever", hi: "बुखार", mr: "ताप" }, icon: "🌡️" },
  { id: "cough", name: { en: "Cough", hi: "खांसी", mr: "खोकला" }, icon: "😷" },
  { id: "headache", name: { en: "Headache", hi: "सिरदर्द", mr: "डोकेदुखी" }, icon: "🤕" },
  { id: "fatigue", name: { en: "Fatigue", hi: "थकान", mr: "थकवा" }, icon: "😴" },
  { id: "vomiting", name: { en: "Vomiting", hi: "उल्टी", mr: "उलटी" }, icon: "🤮" },
  { id: "nausea", name: { en: "Nausea", hi: "मतली", mr: "मळमळ" }, icon: "🤢" },
  { id: "chest_pain", name: { en: "Chest Pain", hi: "सीने में दर्द", mr: "छातीत दुखणे" }, icon: "💔", isEmergency: true },
  { id: "breathing_difficulty", name: { en: "Breathing Difficulty", hi: "सांस लेने में कठिनाई", mr: "श्वास घेण्यास त्रास" }, icon: "🫁", isEmergency: true },
  { id: "body_ache", name: { en: "Body Ache", hi: "बदन दर्द", mr: "अंगदुखी" }, icon: "🦴" },
  { id: "sore_throat", name: { en: "Sore Throat", hi: "गले में खराश", mr: "घसा दुखणे" }, icon: "🗣️" },
  { id: "diarrhea", name: { en: "Diarrhea", hi: "दस्त", mr: "जुलाब" }, icon: "💧" },
  { id: "rash", name: { en: "Skin Rash", hi: "त्वचा पर दाने", mr: "पुरळ" }, icon: "🔴" },
  { id: "joint_pain", name: { en: "Joint Pain", hi: "जोड़ों में दर्द", mr: "सांधेदुखी" }, icon: "🦵" },
  { id: "cold", name: { en: "Cold/Runny Nose", hi: "सर्दी/नाक बहना", mr: "सर्दी/नाक वाहणे" }, icon: "🤧" },
  { id: "stomach_pain", name: { en: "Stomach Pain", hi: "पेट दर्द", mr: "पोटदुखी" }, icon: "🤰" },
  { id: "loss_of_appetite", name: { en: "Loss of Appetite", hi: "भूख न लगना", mr: "भूक न लागणे" }, icon: "🍽️" },
  { id: "chills", name: { en: "Chills", hi: "ठंड लगना", mr: "थंडी वाजणे" }, icon: "🥶" },
  { id: "sweating", name: { en: "Excessive Sweating", hi: "अत्यधिक पसीना", mr: "अति घाम" }, icon: "💦" },
  { id: "bleeding", name: { en: "Severe Bleeding", hi: "गंभीर रक्तस्राव", mr: "तीव्र रक्तस्त्राव" }, icon: "🩸", isEmergency: true },
  { id: "dizziness", name: { en: "Dizziness", hi: "चक्कर आना", mr: "चक्कर येणे" }, icon: "😵" },
];
