/**
 * NutriMesh Interactive Engine
 * Multilingual Translations, Living Mesh Canvas, Simulator & Catalogue Explorer
 */

// ============================================================
// 1. MULTILINGUAL TRANSLATION DICTIONARY (8 LANGUAGES)
// ============================================================
const translations = {
  en: {
    "nav.problem": "The Shared Pot",
    "nav.simulator": "Pot Simulator",
    "nav.features": "Pillars",
    "nav.catalogue": "450+ Dishes",
    "nav.faq": "FAQ",
    "nav.dashboard": "Open Dashboard",
    
    "hero.badge": "🌿 India's 1st Household Nutrition Mesh • ICMR-NIN 2024 Calibrated",
    "hero.title": "One Shared Pot. <span class='mesh-text-gradient'>Individual Nourishment.</span>",
    "hero.sub": "Indian families cook in one handi, kadai, or pressure cooker. Western calorie apps make you cook 5 separate meals. NutriMesh calculates each family member's exact macros from the shared pot.",
    "hero.cta_primary": "Launch NutriMesh Flow",
    "hero.cta_secondary": "Try Pot Simulator",
    "hero.stat_dishes": "Indian Dishes",
    "hero.stat_mesh": "Shared-Pot Mesh",
    "hero.stat_guidelines": "ICMR-NIN Aligned",
    
    "chip.rohan": "Rohan (28, Strength)",
    "chip.rohan_sub": "2.0 Katoris • 28g Protein Target met",
    "chip.dadi": "Dadi Ji (69, Low GI)",
    "chip.dadi_sub": "1.0 Katori • Sodium capped at 320mg",

    "comp.tag": "THE DILEMMA & THE BREAKTHROUGH",
    "comp.title": "Why Conventional Calorie Trackers Fail Indian Kitchens",
    "comp.desc": "Tracking an Indian thali with Western fitness apps is frustrating because they assume you cook individual raw chicken breasts and weigh single portions.",
    "comp.old_badge": "TRADITIONAL APPS",
    "comp.old_title": "The Single-Plate Illusion",
    "comp.old_1": "Demands raw weighing before cooking each person's dish separately.",
    "comp.old_2": "Cannot apportion nutrition when 4 family members eat from 1 dal kadai.",
    "comp.old_3": "Ignores Indian cooking realities: tadka, ghee, regional spices, and katori metrics.",
    "comp.old_4": "Forces fitness enthusiasts to alienate themselves from family dinners.",

    "comp.new_badge": "NUTRIMESH SYSTEM",
    "comp.new_title": "The Household Shared Mesh",
    "comp.new_1": "Cook once for everyone: Log the entire pot in grams or katoris effortlessly.",
    "comp.new_2": "Algorithmic apportionment distributes macros dynamically per family member.",
    "comp.new_3": "Native 450+ Indian dish catalogue with authentic katori and thali conversions.",
    "comp.new_4": "One-katori micro swaps solve individual protein gaps without separate cooking.",

    "sim.tag": "INTERACTIVE LAB",
    "sim.title": "Simulate Your Shared Pot to Individual Thalis",
    "sim.desc": "Pick a family dish, choose the total pot preparation, and adjust portion katoris to see how NutriMesh computes personal targets in real time.",
    "sim.select_dish_label": "Choose Family Pot:",
    "sim.pot_volume": "Total Pot Cooked",
    "sim.pot_calories": "Total Pot Calories",
    "sim.pot_protein": "Total Pot Protein",
    "sim.opt_status": "Mesh Optimizer",
    "sim.active": "Active & Balanced",

    "features.tag": "SYSTEM ARCHITECTURE",
    "features.title": "Engineered for Indian Kitchens & Multi-Gen Households",
    "features.desc": "Every algorithm, catalog entry, and UI interaction is crafted around the rhythm of Indian cooking and familial bonding.",

    "f1.title": "Shared-Pot Apportionment",
    "f1.desc": "Mathematical decomposition of a shared pot into precise personal macronutrient quotas using portion-weighted allocation.",
    "f2.title": "Multimodal Frictionless Logger",
    "f2.desc": "Log meals the way you live — speak in Hindi or Tamil, snap a photo of the kadai, or type quick natural phrases.",
    "f3.title": "450+ Verified Regional Catalogue",
    "f3.desc": "Complete nutritional breakdown from Theplas and Thalipeeth to Avial, Sambars, Dal Tadkas, and Khichdis.",
    "f4.title": "LP Optimization Engine",
    "f4.desc": "Linear programming recommends simple 1-katori additions (e.g. extra curd or roasted chana) rather than cooking separate dinners.",
    "f5.title": "Vrat & Fasting Intelligence",
    "f5.desc": "Adaptive fasting presets for Navratri, Ekadashi, and Shravan with auto-adjusted macro targets and fasting-compliant recipes.",
    "f6.title": "Pantry & Thali Budgeting",
    "f6.desc": "Track ingredient consumption, reduce kitchen waste, and optimize cost per gram of dietary protein across household groceries.",

    "cat.tag": "REGIONAL ARCHIVE",
    "cat.title": "Explore 450+ Verified Indian Nutrition Profiles",
    "cat.desc": "Laboratory calibrated macro and micronutrient benchmarks standardized in familiar katoris, rotis, and thalis.",
    "cat.search_ph": "Search dishes e.g. Dal Makhani, Thepla, Sambar, Thalipeeth...",

    "cta.title": "Ready to Nourish Your Entire Household?",
    "cta.sub": "Join thousands of Indian families enjoying collective health without cooking separate meals.",
    "cta.btn": "Open NutriMesh Flow Dashboard",

    "footer.desc": "NutriMesh is the household nutrition mesh platform bridging collective Indian cooking with individualized metabolic goals.",
    "footer.rights": "© 2026 NutriMesh Flow. Calibrated to ICMR-NIN 2024 Guidelines. All rights reserved."
  },

  hi: {
    "nav.problem": "साझा पतीला",
    "nav.simulator": "पॉट सिमुलेटर",
    "nav.features": "मुख्य विशेषताएं",
    "nav.catalogue": "450+ व्यंजन",
    "nav.faq": "अक्सर पूछे जाने वाले सवाल",
    "nav.dashboard": "डैशबोर्ड खोलें",

    "hero.badge": "🌿 भारत का पहला पारिवारिक पोषण मेश • ICMR-NIN 2024 प्रमाणित",
    "hero.title": "एक साझा पतीला। <span class='mesh-text-gradient'>व्यक्तिगत पोषण।</span>",
    "hero.sub": "भारतीय परिवारों में खाना एक ही कड़ाही या कुकर में बनता है। विदेशी ऐप्स हर सदस्य के लिए अलग खाना पकाने को कहते हैं। न्यूट्री-मेश साझा पतीले से हर सदस्य का सटीक पोषण निकालता है।",
    "hero.cta_primary": "न्यूट्रीमेश फ्लो शुरू करें",
    "hero.cta_secondary": "सिमुलेटर चलाकर देखें",
    "hero.stat_dishes": "भारतीय व्यंजन",
    "hero.stat_mesh": "शेयर्ड-पॉट ट्रैकिंग",
    "hero.stat_guidelines": "ICMR-NIN मानक",

    "chip.rohan": "रोहन (28, वर्कआउट)",
    "chip.rohan_sub": "2.0 कटोरी • 28 ग्राम प्रोटीन लक्ष्य पूर्ण",
    "chip.dadi": "दादी जी (69, सुगर कंट्रोल)",
    "chip.dadi_sub": "1.0 कटोरी • सोडियम केवल 320mg",

    "comp.tag": "समस्या और समाधान",
    "comp.title": "साधारण कैलोरी ऐप्स भारतीय रसोई में क्यों फेल हो जाते हैं?",
    "comp.desc": "विदेशी फिटनेस ऐप्स यह मानकर चलते हैं कि हर व्यक्ति अपने लिए अलग खाना तोलकर बनाएगा, जो संयुक्त भारतीय परिवार में संभव नहीं है।",
    "comp.old_badge": "साधारण ऐप्स",
    "comp.old_title": "अकेले व्यक्ति का भ्रम",
    "comp.old_1": "खाना बनाने से पहले कच्ची सामग्री अलग-अलग तोलने की शर्त।",
    "comp.old_2": "जब 4 लोग एक दाल की कड़ाही से खाते हैं तो हिसाब नहीं लगा पाते।",
    "comp.old_3": "तड़का, घी और कटोरी के भारतीय नाप-तौल को नजरअंदाज करते हैं।",
    "comp.old_4": "फिटनेस चाहने वाले को परिवार के साथ भोजन करने से अलग कर देते हैं।",

    "comp.new_badge": "न्यूट्रीमेश प्रणाली",
    "comp.new_title": "पारिवारिक शेयर्ड मेश",
    "comp.new_1": "सबके लिए एक बार पकाएं: पूरे पतीले को कटोरी या ग्राम में आसानी से दर्ज करें।",
    "comp.new_2": "स्मार्ट एल्गोरिदम परिवार के हर सदस्य को उसकी जरूरत अनुसार पोषण बांटता है।",
    "comp.new_3": "450+ प्रामाणिक भारतीय व्यंजनों का डेटाबेस कटोरी और थाली के रूप में।",
    "comp.new_4": "बिना अलग खाना बनाए केवल 1 अतिरिक्त कटोरी से प्रोटीन की कमी पूरी करें।",

    "sim.tag": "लाइव लैब",
    "sim.title": "साझा पतीले से व्यक्तिगत थाली का सिमुलेशन",
    "sim.desc": "व्यंजन चुनें और देखें कि कैसे न्यूट्रीमेश हर सदस्य की कटोरी के अनुसार पोषण को संतुलित करता है।",
    "sim.select_dish_label": "पारिवारिक व्यंजन चुनें:",
    "sim.pot_volume": "कुल तैयार व्यंजन",
    "sim.pot_calories": "कुल पतीला कैलोरी",
    "sim.pot_protein": "कुल पतीला प्रोटीन",
    "sim.opt_status": "मेश ऑप्टिमाइज़र",
    "sim.active": "संतुलित व सक्रिय",

    "features.tag": "प्रणाली की क्षमताएं",
    "features.title": "भारतीय रसोई और संयुक्त परिवारों के लिए विशेष रूप से निर्मित",
    "features.desc": "हमारा हर एल्गोरिदम भारतीय भोजन की परंपरा और पारिवारिक मिठास को ध्यान में रखकर बनाया गया है।",

    "f1.title": "शेयर्ड-पॉट विभाजन",
    "f1.desc": "साझा पतीले के भोजन को वैज्ञानिक रूप से हर सदस्य की थाली में सही प्रोटीन और कैलोरी में बांटना।",
    "f2.title": "सहज AI मील लॉगर",
    "f2.desc": "जैसे मन चाहे वैसे दर्ज करें — हिंदी में बोलें, कड़ाही की फोटो खींचें या लिख दें।",
    "f3.title": "450+ क्षेत्रीय भारतीय व्यंजन",
    "f3.desc": "थेपला, थालीपीठ से लेकर सांभर, अवियल और दाल तड़का तक की संपूर्ण प्रयोगशाला-परीक्षित पोषण जानकारी।",
    "f4.title": "लीनियर ऑप्टिमाइज़ेशन इंजन",
    "f4.desc": "अलग खाना बनाने के बजाय केवल 1 कटोरी अंकुरित मूंग या दही जोड़कर प्रोटीन की कमी पूरी करने का सुझाव।",
    "f5.title": "व्रत और उपवास बुद्धिमत्ता",
    "f5.desc": "नवरात्रि, एकादशी और सावन के उपवासों के लिए स्वतः संतुलित पोषण और फलाहारी व्यंजन।",
    "f6.title": "रसोई बजट व सामग्री प्रबंधन",
    "f6.desc": "भोजन की बर्बादी रोकें और प्रति थाली प्रोटीन की लागत (₹/ग्राम) को किफायती बनाएं।",

    "cat.tag": "व्यंजन संग्रह",
    "cat.title": "450+ प्रामाणिक भारतीय पोषण प्रोफाइल खोजें",
    "cat.desc": "भारतीय रसोई की थाली, कटोरी और रोटी के मानक माप पर आधारित सत्यापित डेटा।",
    "cat.search_ph": "व्यंजन खोजें जैसे दाल मखनी, थेपला, सांभर, थालीपीठ...",

    "cta.title": "पूरे परिवार के स्वास्थ्य को एक साथ संवारें",
    "cta.sub": "बिना अलग खाना बनाए परिवार के हर सदस्य के स्वास्थ्य लक्ष्यों को पूरा करें।",
    "cta.btn": "न्यूट्रीमेश फ्लो डैशबोर्ड खोलें",

    "footer.desc": "न्यूट्रीमेश भारतीय परिवारों के साझा भोजन को हर सदस्य के व्यक्तिगत स्वास्थ्य लक्ष्यों से जोड़ने वाला अग्रणी मंच है।",
    "footer.rights": "© 2026 न्यूट्रीमेश फ्लो। ICMR-NIN 2024 दिशानिर्देशों पर आधारित। सर्वाधिकार सुरक्षित।"
  },

  mr: {
    "nav.problem": "सामायिक भांडे",
    "nav.simulator": "पॉट सिम्युलेटर",
    "nav.features": "वैशिष्ट्ये",
    "nav.catalogue": "४५०+ पदार्थ",
    "nav.faq": "प्रश्नोत्तरे",
    "nav.dashboard": "डॅशबोर्ड उघडा",
    "hero.badge": "🌿 भारताची पहिली कौटुंबिक पोषण प्रणाली • ICMR-NIN २०२४ प्रमाणित",
    "hero.title": "एकच सामायिक भांडे. <span class='mesh-text-gradient'>प्रत्येकाचे वैयक्तिक पोषण.</span>",
    "hero.sub": "महाराष्ट्रीयन घरात स्वयंपाक एकाच पातेल्यात किंवा कढईत होतो. न्यूट्रीमेश संपूर्ण कुटुंबासाठी शिजवलेल्या अन्नातून प्रत्येकाच्या गरजेनुसार अचूक पोषण मोजते.",
    "hero.cta_primary": "डॅशबोर्ड सुरू करा",
    "hero.cta_secondary": "सिम्युलेटर पहा",
    "comp.tag": "समस्या आणि उपाय",
    "comp.title": "साधे कॅलरी ॲप्स भारतीय स्वयंपाकघरात का अपयशी ठरतात?",
    "cta.btn": "न्यूट्रीमेश फ्लो डॅशबोर्ड उघडा"
  },

  ta: {
    "nav.problem": "பகிர்ந்த பாத்திரம்",
    "nav.simulator": "சிமுலேட்டர்",
    "nav.features": "அம்சங்கள்",
    "nav.catalogue": "450+ உணவுகள்",
    "nav.faq": "கேள்விகள்",
    "nav.dashboard": "டாஷ்போர்டு திறக்க",
    "hero.badge": "🌿 இந்தியாவின் முதல் குடும்ப ஊட்டச்சத்து மெஷ் • ICMR-NIN 2024",
    "hero.title": "ஒரு பொது பாத்திரம். <span class='mesh-text-gradient'>தனிநபர் ஊட்டச்சத்து.</span>",
    "hero.sub": "குடும்பத்தினர் அனைவரும் ஒரே பாத்திரத்தில் சமைத்து சாப்பிடும்போது, ஒவ்வொருவருக்கும் தேவையான புரோட்டீன் மற்றும் ஊட்டச்சத்தை துல்லியமாக கணக்கிடுகிறது நியூட்ரிமெஷ்.",
    "hero.cta_primary": "டாஷ்போர்டு தொடங்குக",
    "hero.cta_secondary": "சிமுலேட்டர் முயற்சி செய்",
    "cta.btn": "NutriMesh டாஷ்போர்டு திறக்க"
  },

  te: {
    "nav.problem": "ఉమ్మడి వంటకం",
    "nav.simulator": "సిమ్యులేటర్",
    "nav.features": "ఫీచర్లు",
    "nav.catalogue": "450+ వంటకాలు",
    "nav.faq": "ప్రశ్నలు",
    "nav.dashboard": "డ్యాష్‌బోర్డ్ తెరవండి",
    "hero.badge": "🌿 భారతదేశపు మొట్టమొదటి కుటుంబ పోషకాహార మెష్ • ICMR-NIN 2024",
    "hero.title": "ఒకే వంట పాత్ర. <span class='mesh-text-gradient'>వ్యక్తిగత పోషణ.</span>",
    "hero.sub": "కుటుంబమంతా కలిసి వండుకునే ఆహారం నుండి ప్రతి ఒక్కరి వ్యక్తిగత పోషకాలను లెక్కించే ఆధునిక వ్యవస్థ న్యూట్రీమెష్.",
    "hero.cta_primary": "డ్యాష్‌బోర్డ్ ప్రారంభించండి",
    "hero.cta_secondary": "సిమ్యులేటర్ చూడండి",
    "cta.btn": "న్యూట్రిమెష్ డ్యాష్‌బోర్డ్"
  },

  bn: {
    "nav.problem": "একত্রে রান্না",
    "nav.simulator": "সিমুলেটর",
    "nav.features": "বৈশিষ্ট্য",
    "nav.catalogue": "৪৫০+ পদ",
    "nav.faq": "প্রশ্নোত্তর",
    "nav.dashboard": "ড্যাশবোর্ড খুলুন",
    "hero.badge": "🌿 ভারতের প্রথম পারিবারিক পুষ্টি মেশ • ICMR-NIN ২০২৪ মান্য",
    "hero.title": "একই হাঁড়ির রান্না। <span class='mesh-text-gradient'>সবার সঠিক পুষ্টি।</span>",
    "hero.sub": "একই পাত্রে রান্না করা খাবার থেকে পরিবারের প্রতিটি সদস্যের প্রয়োজনীয় প্রোটিন ও ক্যালোরি আলাদাভাবে হিসাব করে নিউট্রি-মেশ।",
    "hero.cta_primary": "ড্যাশবোর্ড শুরু করুন",
    "hero.cta_secondary": "সিমুলেটর দেখুন",
    "cta.btn": "NutriMesh ড্যাশবোর্ড"
  },

  gu: {
    "nav.problem": "સામાયિક રસોઈ",
    "nav.simulator": "સિમ્યુલેટર",
    "nav.features": "વિશેષતાઓ",
    "nav.catalogue": "૪૫૦+ વાનગીઓ",
    "nav.faq": "પ્રશ્નોત્તરી",
    "nav.dashboard": "ડેશબોર્ડ ખોલો",
    "hero.badge": "🌿 ભારતનું સૌપ્રથમ પારિવારિક ન્યુટ્રિશન મેશ • ICMR-NIN ૨૦૨૪",
    "hero.title": "એક જ વાસણની રસોઈ. <span class='mesh-text-gradient'>દરેકનું વ્યક્તિગત પોષણ.</span>",
    "hero.sub": "સંયુક્ત કુટુંબમાં એકસાથે બનતા ભોજનમાંથી દરેક સભ્યનું પ્રોટીન અને કેલરી સચોટ ગણતરી કરતું અદ્યતન પ્લેટફોર્મ.",
    "hero.cta_primary": "ડેશબોર્ડ શરૂ કરો",
    "hero.cta_secondary": "સિમ્યુલેટર અજમાવો",
    "cta.btn": "NutriMesh ડેશબોર્ડ ખોલો"
  },

  pa: {
    "nav.problem": "ਸਾਂਝੀ ਹਾਂਡੀ",
    "nav.simulator": "ਸਿਮੂਲੇਟਰ",
    "nav.features": "ਖੂਬੀਆਂ",
    "nav.catalogue": "੪੫੦+ ਪਕਵਾਨ",
    "nav.faq": "ਸਵਾਲ-ਜਵਾਬ",
    "nav.dashboard": "ਡੈਸ਼ਬੋਰਡ ਖੋਲ੍ਹੋ",
    "hero.badge": "🌿 ਭਾਰਤ ਦਾ ਪਹਿਲਾ ਪਰਿਵਾਰਕ ਪੋਸ਼ਣ ਮੈਸ਼ • ICMR-NIN ੨੦੨੪",
    "hero.title": "ਇੱਕ ਸਾਂਝੀ ਹਾਂਡੀ। <span class='mesh-text-gradient'>ਹਰੇਕ ਦਾ ਆਪਣਾ ਪੋਸ਼ਣ।</span>",
    "hero.sub": "ਇੱਕੋ ਕੜਾਹੀ ਜਾਂ ਪਤੀਲੇ ਵਿੱਚ ਪੱਕੇ ਖਾਣੇ ਤੋਂ ਪਰਿਵਾਰ ਦੇ ਹਰ ਜੀਅ ਲਈ ਪ੍ਰੋਟੀਨ ਅਤੇ ਕੈਲੋਰੀਆਂ ਦੀ ਸਹੀ ਗਿਣਤੀ ਕਰਦਾ ਹੈ ਨਿਊਟਰੀਮੈਸ਼।",
    "hero.cta_primary": "ਡੈਸ਼ਬੋਰਡ ਖੋਲ੍ਹੋ",
    "hero.cta_secondary": "ਸਿਮੂਲੇਟਰ ਚਲਾਓ",
    "cta.btn": "NutriMesh ਡੈਸ਼ਬੋਰਡ"
  }
};

// ============================================================
// 2. DISH CATALOGUE DATA (ICMR-NIN SOURCED INDIAN STAPLES)
// ============================================================
const dishesDatabase = [
  {
    name: "Dal Tadka (Yellow Lentil)",
    region: "North",
    category: "dals",
    serving: "1 katori (150g)",
    calories: 148,
    protein: 8.5,
    carbs: 21.0,
    fat: 3.6,
    tags: ["High Protein", "Comfort"]
  },
  {
    name: "Rajma Masala (Red Kidney Beans)",
    region: "North",
    category: "curries",
    serving: "1 katori (180g)",
    calories: 224,
    protein: 12.2,
    carbs: 34.0,
    fat: 4.5,
    tags: ["High Protein", "Fibre Rich"]
  },
  {
    name: "Paneer Bhurji (Cottage Cheese)",
    region: "North",
    category: "curries",
    serving: "1 katori (130g)",
    calories: 275,
    protein: 16.8,
    carbs: 6.2,
    fat: 20.5,
    tags: ["High Protein", "Low Carb"]
  },
  {
    name: "South Indian Drumstick Sambar",
    region: "South",
    category: "dals",
    serving: "1 katori (160g)",
    calories: 112,
    protein: 5.4,
    carbs: 18.2,
    fat: 2.2,
    tags: ["Low Calorie", "Fibre Rich"]
  },
  {
    name: "Avial (Kerala Coconut Veg Medley)",
    region: "South",
    category: "curries",
    serving: "1 katori (140g)",
    calories: 165,
    protein: 3.8,
    carbs: 14.5,
    fat: 10.2,
    tags: ["Micronutrient Rich", "Traditional"]
  },
  {
    name: "Maharashtrian Thalipeeth (1)",
    region: "West",
    category: "breads",
    serving: "1 piece (110g)",
    calories: 236,
    protein: 7.5,
    carbs: 32.0,
    fat: 8.5,
    tags: ["Multigrain", "Fibre Rich"]
  },
  {
    name: "Gujarati Methi Thepla (1)",
    region: "West",
    category: "breads",
    serving: "1 piece (45g)",
    calories: 118,
    protein: 3.2,
    carbs: 16.8,
    fat: 4.2,
    tags: ["Fasting Friendly", "Digestive"]
  },
  {
    name: "Sprouted Moong Usal",
    region: "West",
    category: "dals",
    serving: "1 katori (150g)",
    calories: 172,
    protein: 11.4,
    carbs: 24.5,
    fat: 3.2,
    tags: ["High Protein", "Low GI"]
  },
  {
    name: "Mochar Ghonto (Bengal Banana Blossom)",
    region: "East",
    category: "curries",
    serving: "1 katori (140g)",
    calories: 135,
    protein: 4.1,
    carbs: 22.0,
    fat: 3.5,
    tags: ["High Iron", "Gut Health"]
  },
  {
    name: "Cholar Dal with Coconut",
    region: "East",
    category: "dals",
    serving: "1 katori (160g)",
    calories: 215,
    protein: 9.8,
    carbs: 29.5,
    fat: 6.8,
    tags: ["Festive", "Protein"]
  },
  {
    name: "Kuttu Roti (Buckwheat Fasting Roti)",
    region: "North",
    category: "fasting",
    serving: "1 piece (50g)",
    calories: 132,
    protein: 4.5,
    carbs: 23.0,
    fat: 2.4,
    tags: ["Vrat / Fasting", "Gluten Free"]
  },
  {
    name: "Sabudana Khichdi (Mild Peanut)",
    region: "West",
    category: "fasting",
    serving: "1 katori (150g)",
    calories: 310,
    protein: 5.2,
    carbs: 48.0,
    fat: 11.5,
    tags: ["Vrat / Fasting", "Energy Dense"]
  }
];

// ============================================================
// 3. SHARED POT SIMULATOR LOGIC
// ============================================================
const potPresets = {
  rajma: {
    name: "Rajma Masala Pot (4 Servings)",
    baseCal: 224,
    basePro: 12.2,
    baseCarb: 34.0,
    baseFat: 4.5,
    totalCookedWeight: "720g (approx 4.5 katoris)"
  },
  daltadka: {
    name: "Moong & Toor Dal Tadka Pot",
    baseCal: 148,
    basePro: 8.5,
    baseCarb: 21.0,
    baseFat: 3.6,
    totalCookedWeight: "650g (approx 4.5 katoris)"
  },
  paneerbhurji: {
    name: "Amritsari Paneer Bhurji Kadai",
    baseCal: 275,
    basePro: 16.8,
    baseCarb: 6.2,
    baseFat: 20.5,
    totalCookedWeight: "520g (approx 4.0 katoris)"
  },
  sambar: {
    name: "Madras Drumstick & Shallot Sambar",
    baseCal: 112,
    basePro: 5.4,
    baseCarb: 18.2,
    baseFat: 2.2,
    totalCookedWeight: "800g (approx 5.0 katoris)"
  }
};

let currentMembers = [
  {
    id: "rohan",
    name: "Rohan",
    avatar: "🏋️",
    goalTag: "Hypertrophy Target: 130g",
    katoris: 2.0,
    swapTip: "Mesh Recommendation: Added 1 katori sprouted moong (+11g P) closes your post-workout gap."
  },
  {
    id: "priya",
    name: "Priya",
    avatar: "🏃‍♀️",
    goalTag: "Active Deficit: 55g",
    katoris: 1.5,
    swapTip: "Mesh Recommendation: 1.5 katoris balances daily endurance energy without insulin spikes."
  },
  {
    id: "dadi",
    name: "Dadi Ji",
    avatar: "👵",
    goalTag: "Low GI & BP Guard: 45g",
    katoris: 1.0,
    swapTip: "Mesh Recommendation: 1.0 katori provides clean bio-available protein while keeping sodium <320mg."
  }
];

// ============================================================
// 4. CANVAS LIVING NUTRITION MESH BACKGROUND
// ============================================================
function initMeshCanvas() {
  const canvas = document.getElementById("mesh-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height;
  let particles = [];
  const particleCount = 38;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 2.5 + 1.5;
      
      const colors = ["#cd855f", "#94a87a", "#e8b865", "#e98a7d", "#7fae8a"];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Connect nodes with soft mesh lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const alpha = (1 - dist / 140) * 0.18;
          ctx.strokeStyle = `rgba(205, 133, 95, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ============================================================
// 5. APPLICATION INITIALIZATION & EVENT LISTENERS
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  initMeshCanvas();
  initTheme();
  initLanguage();
  initSimulator();
  initCatalogue();
  initFaqAccordion();
  initMobileMenu();
});

// ============================================================
// THEME MANAGEMENT (Matches dashboard `nutrimesh-theme`)
// ============================================================
function initTheme() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const storedTheme = localStorage.getItem("nutrimesh-theme") || "light";
  
  if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = "dark";
    if (themeBtn) themeBtn.innerHTML = "☀️";
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.style.colorScheme = "light";
    if (themeBtn) themeBtn.innerHTML = "🌙";
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const isDark = document.documentElement.classList.toggle("dark");
      const nextTheme = isDark ? "dark" : "light";
      localStorage.setItem("nutrimesh-theme", nextTheme);
      document.documentElement.style.colorScheme = nextTheme;
      themeBtn.innerHTML = isDark ? "☀️" : "🌙";
    });
  }
}

// ============================================================
// LINGUISTIC (MULTILINGUAL) SYSTEM
// ============================================================
function initLanguage() {
  const langBtn = document.getElementById("lang-btn");
  const langDropdown = document.getElementById("lang-dropdown");
  const currentLangCodeEl = document.getElementById("current-lang-code");
  const storedLang = localStorage.getItem("nutrimesh-lang") || "en";

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
      langDropdown.classList.remove("open");
    });

    const items = langDropdown.querySelectorAll(".lang-item");
    items.forEach(item => {
      item.addEventListener("click", () => {
        const langCode = item.getAttribute("data-lang");
        setLanguage(langCode);
        langDropdown.classList.remove("open");
      });
    });
  }

  setLanguage(storedLang);
}

function setLanguage(langCode) {
  const dict = translations[langCode] || translations["en"];
  localStorage.setItem("nutrimesh-lang", langCode);

  const currentLangCodeEl = document.getElementById("current-lang-code");
  if (currentLangCodeEl) {
    const langNames = {
      en: "English",
      hi: "हिन्दी",
      bn: "বাংলা",
      te: "తెలుగు",
      mr: "मराठी",
      ta: "தமிழ்",
      gu: "ગુજરાતી",
      pa: "ਪੰਜਾਬੀ"
    };
    currentLangCodeEl.textContent = langNames[langCode] || "English";
  }

  // Translate all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.innerHTML = dict[key];
    } else if (translations["en"][key]) {
      el.innerHTML = translations["en"][key];
    }
  });

  // Placeholder translations
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    const key = el.getAttribute("data-i18n-ph");
    if (dict[key]) el.placeholder = dict[key];
  });
}

// ============================================================
// SHARED POT SIMULATOR
// ============================================================
function initSimulator() {
  const dishSelect = document.getElementById("sim-dish-select");
  if (!dishSelect) return;

  dishSelect.addEventListener("change", renderSimulator);
  renderSimulator();
}

function renderSimulator() {
  const dishSelect = document.getElementById("sim-dish-select");
  const selectedKey = dishSelect ? dishSelect.value : "rajma";
  const preset = potPresets[selectedKey];

  // Calculate totals across members
  let totalKatoris = 0;
  currentMembers.forEach(m => totalKatoris += m.katoris);

  const totalPotCal = Math.round(preset.baseCal * totalKatoris);
  const totalPotPro = Math.round(preset.basePro * totalKatoris);

  const potWeightEl = document.getElementById("pot-total-weight");
  const potCalEl = document.getElementById("pot-total-cal");
  const potProEl = document.getElementById("pot-total-pro");

  if (potWeightEl) potWeightEl.textContent = preset.totalCookedWeight;
  if (potCalEl) potCalEl.textContent = `${totalPotCal} kcal`;
  if (potProEl) potProEl.textContent = `${totalPotPro} g`;

  // Render Member Cards
  const grid = document.getElementById("members-mesh-grid");
  if (!grid) return;

  grid.innerHTML = "";

  currentMembers.forEach((member, index) => {
    const mCalories = Math.round(preset.baseCal * member.katoris);
    const mProtein = Math.round(preset.basePro * member.katoris * 10) / 10;
    const mCarbs = Math.round(preset.baseCarb * member.katoris * 10) / 10;
    const mFat = Math.round(preset.baseFat * member.katoris * 10) / 10;

    const proPercent = Math.min(100, Math.round((mProtein / 35) * 100));
    const carbPercent = Math.min(100, Math.round((mCarbs / 70) * 100));
    const fatPercent = Math.min(100, Math.round((mFat / 25) * 100));

    const card = document.createElement("div");
    card.className = "member-sim-card";
    card.innerHTML = `
      <div class="member-card-header">
        <div class="member-avatar-info">
          <div class="member-avatar">${member.avatar}</div>
          <div>
            <div class="member-name">${member.name}</div>
            <div class="member-tag">${member.goalTag}</div>
          </div>
        </div>
      </div>

      <div class="portion-control">
        <button class="portion-btn" onclick="updatePortion(${index}, -0.5)">-</button>
        <span class="portion-val">${member.katoris.toFixed(1)} katoris</span>
        <button class="portion-btn" onclick="updatePortion(${index}, 0.5)">+</button>
      </div>

      <div class="member-macro-bars">
        <div class="macro-bar-row">
          <div class="macro-label-row">
            <span class="macro-label-name">Calories</span>
            <span class="macro-label-val">${mCalories} kcal</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill fill-carbs" style="width: ${Math.min(100, (mCalories/600)*100)}%"></div>
          </div>
        </div>

        <div class="macro-bar-row">
          <div class="macro-label-row">
            <span class="macro-label-name">Protein</span>
            <span class="macro-label-val">${mProtein}g</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill fill-protein" style="width: ${proPercent}%"></div>
          </div>
        </div>

        <div class="macro-bar-row">
          <div class="macro-label-row">
            <span class="macro-label-name">Carbs</span>
            <span class="macro-label-val">${mCarbs}g</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill fill-carbs" style="width: ${carbPercent}%"></div>
          </div>
        </div>

        <div class="macro-bar-row">
          <div class="macro-label-row">
            <span class="macro-label-name">Fat</span>
            <span class="macro-label-val">${mFat}g</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill fill-fat" style="width: ${fatPercent}%"></div>
          </div>
        </div>
      </div>

      <div class="swap-tip-box">
        💡 ${member.swapTip}
      </div>
    `;

    grid.appendChild(card);
  });
}

window.updatePortion = function(index, change) {
  const current = currentMembers[index].katoris;
  const next = Math.max(0.5, Math.min(3.5, current + change));
  currentMembers[index].katoris = next;
  renderSimulator();
};

// ============================================================
// 450+ DISH CATALOGUE EXPLORER
// ============================================================
function initCatalogue() {
  const searchInput = document.getElementById("catalogue-search-input");
  const filterChips = document.querySelectorAll(".filter-chip");

  let activeFilter = "all";
  let searchQuery = "";

  function filterAndRender() {
    const grid = document.getElementById("dishes-grid");
    if (!grid) return;

    const filtered = dishesDatabase.filter(dish => {
      const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dish.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            dish.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesFilter = true;
      if (activeFilter === "North") matchesFilter = dish.region === "North";
      else if (activeFilter === "South") matchesFilter = dish.region === "South";
      else if (activeFilter === "West") matchesFilter = dish.region === "West";
      else if (activeFilter === "East") matchesFilter = dish.region === "East";
      else if (activeFilter === "high-protein") matchesFilter = dish.protein >= 8;
      else if (activeFilter === "fasting") matchesFilter = dish.category === "fasting" || dish.tags.includes("Vrat / Fasting");

      return matchesSearch && matchesFilter;
    });

    grid.innerHTML = "";

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 2.5rem; color: var(--muted-foreground);">
        No dishes matched "${searchQuery}". Try searching for Dal, Roti, Sambar or Thepla.
      </div>`;
      return;
    }

    filtered.forEach(dish => {
      const card = document.createElement("div");
      card.className = "dish-card";
      card.innerHTML = `
        <div class="dish-header">
          <div class="dish-name">${dish.name}</div>
          <span class="dish-region-badge">${dish.region}</span>
        </div>
        <div class="dish-portion">${dish.serving} • ${dish.tags.join(" • ")}</div>
        <div class="dish-macros-row">
          <div class="macro-box">
            <div class="macro-box-val">${dish.calories}</div>
            <div class="macro-box-lbl">kcal</div>
          </div>
          <div class="macro-box">
            <div class="macro-box-val">${dish.protein}g</div>
            <div class="macro-box-lbl">Pro</div>
          </div>
          <div class="macro-box">
            <div class="macro-box-val">${dish.carbs}g</div>
            <div class="macro-box-lbl">Carb</div>
          </div>
          <div class="macro-box">
            <div class="macro-box-val">${dish.fat}g</div>
            <div class="macro-box-lbl">Fat</div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      filterAndRender();
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeFilter = chip.getAttribute("data-filter");
      filterAndRender();
    });
  });

  filterAndRender();
}

// ============================================================
// FAQ ACCORDION
// ============================================================
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        faqItems.forEach(i => i.classList.remove("active"));
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });
}

// ============================================================
// MOBILE & NOTCH NAVIGATION MENU
// ============================================================
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const notchWrapper = document.getElementById("notch-wrapper");

  if (btn && menu) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("open");
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
      });
    });

    document.addEventListener("click", (e) => {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove("open");
      }
    });
  }

  // Dynamic Island compacting physics on scroll
  window.addEventListener("scroll", () => {
    if (notchWrapper) {
      if (window.scrollY > 35) {
        notchWrapper.classList.add("notch-scrolled");
      } else {
        notchWrapper.classList.remove("notch-scrolled");
      }
    }
  }, { passive: true });
}

