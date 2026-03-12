export interface MedicineInfo {
  diseaseId: string;
  medicines: { en: string; hi: string; mr: string }[];
  homeRemedies: { en: string; hi: string; mr: string }[];
  advice: { en: string; hi: string; mr: string };
}

export const MEDICINES: MedicineInfo[] = [
  {
    diseaseId: "malaria",
    medicines: [
      { en: "Chloroquine", hi: "क्लोरोक्वीन", mr: "क्लोरोक्विन" },
      { en: "Artemisinin-based combination", hi: "आर्टेमिसिनिन आधारित संयोजन", mr: "आर्टेमिसिनिन आधारित संयोजन" },
    ],
    homeRemedies: [
      { en: "Stay hydrated, drink ORS", hi: "हाइड्रेटेड रहें, ORS पिएं", mr: "हायड्रेटेड रहा, ORS प्या" },
      { en: "Use mosquito net", hi: "मच्छरदानी का उपयोग करें", mr: "मच्छरदाणी वापरा" },
    ],
    advice: { en: "Consult a doctor immediately. Malaria requires proper medical treatment.", hi: "तुरंत डॉक्टर से मिलें। मलेरिया के लिए उचित चिकित्सा उपचार आवश्यक है।", mr: "तात्काळ डॉक्टरांना भेटा. मलेरियासाठी योग्य वैद्यकीय उपचार आवश्यक आहे." }
  },
  {
    diseaseId: "dengue",
    medicines: [
      { en: "Paracetamol (for fever)", hi: "पैरासिटामोल (बुखार के लिए)", mr: "पॅरासिटामॉल (तापासाठी)" },
      { en: "ORS (for hydration)", hi: "ORS (हाइड्रेशन के लिए)", mr: "ORS (हायड्रेशनसाठी)" },
    ],
    homeRemedies: [
      { en: "Drink papaya leaf juice", hi: "पपीते के पत्ते का रस पिएं", mr: "पपईच्या पानाचा रस प्या" },
      { en: "Rest and drink plenty of fluids", hi: "आराम करें और खूब पानी पिएं", mr: "विश्रांती घ्या आणि भरपूर पाणी प्या" },
    ],
    advice: { en: "Visit hospital for platelet count monitoring. Avoid aspirin.", hi: "प्लेटलेट काउंट की निगरानी के लिए अस्पताल जाएं। एस्पिरिन से बचें।", mr: "प्लेटलेट काउंट तपासणीसाठी रुग्णालयात जा. अॅस्पिरिन टाळा." }
  },
  {
    diseaseId: "typhoid",
    medicines: [
      { en: "Ciprofloxacin", hi: "सिप्रोफ्लोक्सासिन", mr: "सिप्रोफ्लोक्सासिन" },
      { en: "Azithromycin", hi: "अज़िथ्रोमाइसिन", mr: "अॅझिथ्रोमायसिन" },
    ],
    homeRemedies: [
      { en: "Drink boiled water only", hi: "केवल उबला पानी पिएं", mr: "फक्त उकळलेले पाणी प्या" },
      { en: "Eat light, easily digestible food", hi: "हल्का, आसानी से पचने वाला भोजन खाएं", mr: "हलके, सहज पचणारे अन्न खा" },
    ],
    advice: { en: "Complete the full course of antibiotics as prescribed by doctor.", hi: "डॉक्टर द्वारा निर्धारित एंटीबायोटिक्स का पूरा कोर्स पूरा करें।", mr: "डॉक्टरांनी सांगितलेल्या अँटिबायोटिक्सचा पूर्ण कोर्स पूर्ण करा." }
  },
  {
    diseaseId: "flu",
    medicines: [
      { en: "Paracetamol", hi: "पैरासिटामोल", mr: "पॅरासिटामॉल" },
      { en: "Cetirizine (for cold)", hi: "सेटिरिज़िन (सर्दी के लिए)", mr: "सेटिरिझिन (सर्दीसाठी)" },
    ],
    homeRemedies: [
      { en: "Hot water with honey and ginger", hi: "शहद और अदरक के साथ गर्म पानी", mr: "मध आणि आल्यासह गरम पाणी" },
      { en: "Steam inhalation", hi: "भाप लें", mr: "वाफ घ्या" },
      { en: "Rest and stay warm", hi: "आराम करें और गर्म रहें", mr: "विश्रांती घ्या आणि उबदार रहा" },
    ],
    advice: { en: "Rest well and stay hydrated. Visit doctor if symptoms persist beyond 5 days.", hi: "अच्छी तरह आराम करें और हाइड्रेटेड रहें। 5 दिन से अधिक लक्षण रहने पर डॉक्टर से मिलें।", mr: "चांगली विश्रांती घ्या. 5 दिवसांपेक्षा जास्त लक्षणे राहिल्यास डॉक्टरांना भेटा." }
  },
  {
    diseaseId: "covid",
    medicines: [
      { en: "Paracetamol", hi: "पैरासिटामोल", mr: "पॅरासिटामॉल" },
      { en: "Vitamin C & Zinc supplements", hi: "विटामिन C और जिंक सप्लीमेंट", mr: "व्हिटॅमिन C आणि झिंक सप्लिमेंट" },
    ],
    homeRemedies: [
      { en: "Steam inhalation twice daily", hi: "दिन में दो बार भाप लें", mr: "दिवसातून दोनदा वाफ घ्या" },
      { en: "Drink warm turmeric milk", hi: "गर्म हल्दी दूध पिएं", mr: "गरम हळदीचे दूध प्या" },
    ],
    advice: { en: "Isolate for 14 days. Seek emergency care if breathing becomes difficult.", hi: "14 दिनों के लिए आइसोलेट रहें। सांस लेने में कठिनाई होने पर आपातकालीन देखभाल लें।", mr: "14 दिवस विलगीकरणात रहा. श्वास घेण्यास त्रास होत असल्यास आपत्कालीन सेवा घ्या." }
  },
  {
    diseaseId: "food_poisoning",
    medicines: [
      { en: "ORS (Oral Rehydration Salts)", hi: "ORS (ओरल रिहाइड्रेशन साल्ट)", mr: "ORS (ओरल रिहायड्रेशन सॉल्ट)" },
      { en: "Ondansetron (anti-nausea)", hi: "ओंडानसेट्रॉन (मतली रोधी)", mr: "ओंडानसेट्रॉन (मळमळ विरोधी)" },
    ],
    homeRemedies: [
      { en: "Drink ginger tea", hi: "अदरक की चाय पिएं", mr: "आल्याचा चहा प्या" },
      { en: "Eat bland food like khichdi", hi: "खिचड़ी जैसा सादा भोजन खाएं", mr: "खिचडी सारखे साधे अन्न खा" },
    ],
    advice: { en: "Stay hydrated. Visit doctor if symptoms last more than 2 days.", hi: "हाइड्रेटेड रहें। 2 दिन से अधिक लक्षण रहने पर डॉक्टर से मिलें।", mr: "हायड्रेटेड रहा. 2 दिवसांपेक्षा जास्त लक्षणे राहिल्यास डॉक्टरांना भेटा." }
  },
  {
    diseaseId: "pneumonia",
    medicines: [
      { en: "Amoxicillin", hi: "एमोक्सिसिलिन", mr: "अमॉक्सिसिलिन" },
      { en: "Paracetamol", hi: "पैरासिटामोल", mr: "पॅरासिटामॉल" },
    ],
    homeRemedies: [
      { en: "Rest and avoid cold air", hi: "आराम करें और ठंडी हवा से बचें", mr: "विश्रांती घ्या आणि थंड हवा टाळा" },
      { en: "Drink warm fluids", hi: "गर्म तरल पदार्थ पिएं", mr: "गरम पेय प्या" },
    ],
    advice: { en: "Seek immediate medical attention. Pneumonia can be life-threatening.", hi: "तुरंत चिकित्सा सहायता लें। निमोनिया जानलेवा हो सकता है।", mr: "तात्काळ वैद्यकीय मदत घ्या. न्यूमोनिया जीवघेणा असू शकतो." }
  },
  {
    diseaseId: "common_cold",
    medicines: [
      { en: "Cetirizine", hi: "सेटिरिज़िन", mr: "सेटिरिझिन" },
      { en: "Nasal decongestant", hi: "नेज़ल डिकंजेस्टेंट", mr: "नेझल डिकंजेस्टंट" },
    ],
    homeRemedies: [
      { en: "Drink warm water with tulsi and honey", hi: "तुलसी और शहद के साथ गर्म पानी पिएं", mr: "तुळशी आणि मधासह गरम पाणी प्या" },
      { en: "Gargle with warm salt water", hi: "गर्म नमक पानी से गरारे करें", mr: "गरम मिठाच्या पाण्याने गुळण्या करा" },
    ],
    advice: { en: "Usually resolves in 7-10 days. Visit doctor if fever persists.", hi: "आमतौर पर 7-10 दिनों में ठीक हो जाता है। बुखार बना रहने पर डॉक्टर से मिलें।", mr: "सामान्यतः 7-10 दिवसांत बरे होते. ताप कायम राहिल्यास डॉक्टरांना भेटा." }
  },
  {
    diseaseId: "gastroenteritis",
    medicines: [
      { en: "ORS", hi: "ORS", mr: "ORS" },
      { en: "Loperamide (if needed)", hi: "लोपेरामाइड (आवश्यक हो तो)", mr: "लोपेरामाइड (आवश्यक असल्यास)" },
    ],
    homeRemedies: [
      { en: "Drink coconut water", hi: "नारियल पानी पिएं", mr: "नारळ पाणी प्या" },
      { en: "Eat rice and curd", hi: "चावल और दही खाएं", mr: "भात आणि दही खा" },
    ],
    advice: { en: "Keep hydrated. Seek medical care if you see blood in stool.", hi: "हाइड्रेटेड रहें। मल में खून दिखने पर चिकित्सा सहायता लें।", mr: "हायड्रेटेड रहा. शौचात रक्त दिसल्यास वैद्यकीय मदत घ्या." }
  },
];

export function getMedicineForDisease(diseaseId: string): MedicineInfo | undefined {
  return MEDICINES.find((m) => m.diseaseId === diseaseId);
}
