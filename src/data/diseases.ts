export interface Disease {
  id: string;
  name: { en: string; hi: string; mr: string };
  symptoms: string[];
  severity: "low" | "medium" | "high";
  description: { en: string; hi: string; mr: string };
}

export const DISEASES: Disease[] = [
  {
    id: "malaria",
    name: { en: "Malaria", hi: "मलेरिया", mr: "मलेरिया" },
    symptoms: ["fever", "chills", "headache", "sweating", "body_ache", "fatigue", "vomiting"],
    severity: "high",
    description: {
      en: "A mosquito-borne disease caused by parasites. Common in tropical areas.",
      hi: "मच्छर से फैलने वाली बीमारी। उष्णकटिबंधीय क्षेत्रों में आम।",
      mr: "डासांमुळे पसरणारा आजार. उष्णकटिबंधीय भागात सामान्य."
    }
  },
  {
    id: "dengue",
    name: { en: "Dengue", hi: "डेंगू", mr: "डेंगू" },
    symptoms: ["fever", "headache", "body_ache", "joint_pain", "rash", "fatigue", "nausea"],
    severity: "high",
    description: {
      en: "A viral infection spread by mosquitoes. Can cause severe joint pain.",
      hi: "मच्छरों से फैलने वाला वायरल संक्रमण।",
      mr: "डासांमुळे पसरणारा विषाणूजन्य संसर्ग."
    }
  },
  {
    id: "typhoid",
    name: { en: "Typhoid", hi: "टाइफॉइड", mr: "टायफॉइड" },
    symptoms: ["fever", "headache", "stomach_pain", "fatigue", "loss_of_appetite", "diarrhea"],
    severity: "high",
    description: {
      en: "A bacterial infection from contaminated food or water.",
      hi: "दूषित भोजन या पानी से होने वाला जीवाणु संक्रमण।",
      mr: "दूषित अन्न किंवा पाण्यामुळे होणारा जिवाणू संसर्ग."
    }
  },
  {
    id: "flu",
    name: { en: "Flu (Influenza)", hi: "फ्लू (इन्फ्लूएंजा)", mr: "फ्लू (इन्फ्लूएंझा)" },
    symptoms: ["fever", "cough", "sore_throat", "body_ache", "fatigue", "cold", "headache"],
    severity: "medium",
    description: {
      en: "A common viral infection affecting the respiratory system.",
      hi: "श्वसन तंत्र को प्रभावित करने वाला सामान्य वायरल संक्रमण।",
      mr: "श्वसन यंत्रणेवर परिणाम करणारा सामान्य विषाणूजन्य संसर्ग."
    }
  },
  {
    id: "covid",
    name: { en: "COVID-19", hi: "कोविड-19", mr: "कोविड-19" },
    symptoms: ["fever", "cough", "breathing_difficulty", "fatigue", "body_ache", "sore_throat", "loss_of_appetite"],
    severity: "high",
    description: {
      en: "A respiratory illness caused by the SARS-CoV-2 virus.",
      hi: "SARS-CoV-2 वायरस से होने वाली श्वसन बीमारी।",
      mr: "SARS-CoV-2 विषाणूमुळे होणारा श्वसन आजार."
    }
  },
  {
    id: "food_poisoning",
    name: { en: "Food Poisoning", hi: "फूड पॉइजनिंग", mr: "अन्न विषबाधा" },
    symptoms: ["vomiting", "nausea", "diarrhea", "stomach_pain", "fever", "fatigue"],
    severity: "medium",
    description: {
      en: "Illness caused by eating contaminated food.",
      hi: "दूषित भोजन खाने से होने वाली बीमारी।",
      mr: "दूषित अन्न खाल्ल्यामुळे होणारा आजार."
    }
  },
  {
    id: "pneumonia",
    name: { en: "Pneumonia", hi: "निमोनिया", mr: "न्यूमोनिया" },
    symptoms: ["fever", "cough", "breathing_difficulty", "chest_pain", "fatigue", "chills"],
    severity: "high",
    description: {
      en: "An infection that inflames air sacs in the lungs.",
      hi: "फेफड़ों में वायु थैलियों में सूजन करने वाला संक्रमण।",
      mr: "फुफ्फुसातील वायू पिशव्यांना सूज आणणारा संसर्ग."
    }
  },
  {
    id: "common_cold",
    name: { en: "Common Cold", hi: "सामान्य सर्दी", mr: "सामान्य सर्दी" },
    symptoms: ["cold", "sore_throat", "cough", "headache", "fatigue"],
    severity: "low",
    description: {
      en: "A mild viral infection of the nose and throat.",
      hi: "नाक और गले का हल्का वायरल संक्रमण।",
      mr: "नाक आणि घशाचा सौम्य विषाणूजन्य संसर्ग."
    }
  },
  {
    id: "gastroenteritis",
    name: { en: "Gastroenteritis", hi: "गैस्ट्रोएंटेराइटिस", mr: "गॅस्ट्रोएन्टेरिटिस" },
    symptoms: ["vomiting", "diarrhea", "stomach_pain", "nausea", "fever", "fatigue"],
    severity: "medium",
    description: {
      en: "Inflammation of the stomach and intestines, often called stomach flu.",
      hi: "पेट और आंतों की सूजन, अक्सर पेट का फ्लू कहा जाता है।",
      mr: "पोट आणि आतड्यांची सूज, अनेकदा पोटाचा फ्लू म्हणतात."
    }
  },
];

export function predictDisease(selectedSymptomIds: string[]): { disease: Disease; score: number }[] {
  if (selectedSymptomIds.length === 0) return [];

  const results = DISEASES.map((disease) => {
    const matchingSymptoms = disease.symptoms.filter((s) => selectedSymptomIds.includes(s));
    const score = matchingSymptoms.length / Math.max(disease.symptoms.length, selectedSymptomIds.length);
    return { disease, score, matchCount: matchingSymptoms.length };
  });

  return results
    .filter((r) => r.matchCount >= 2)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ disease, score }) => ({ disease, score: Math.round(score * 100) }));
}
