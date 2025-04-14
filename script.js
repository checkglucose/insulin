<script>
const translations = {
    en: {
        title: "Easy Insulin Tracker",
        disclaimer: "Disclaimer: This is a tracking tool, not medical advice. Consult your doctor before changing insulin doses.",
        mealsTitle: "Today's Meals",
        dateLabel: "Date:",
        mealLabel: "Meal:",
        fastingLabel: "Fasting Blood Glucose (mmol/L):",
        platesLabel: "Plates of Carbs:",
        shortLabel: "Short-Acting Insulin (units):",
        postLabel: "2-Hr Post-Meal Glucose (mmol/L):",
        longLabel: "Long-Acting Insulin (units, Dinner only):",
    },
    bn: {
        title: "সহজ ইনসুলিন ট্র্যাকার",
        disclaimer: "সতর্কতা : এটি একটি ট্র্যাকিং টুল, চিকিৎসা পরামর্শ নয়। ইনসুলিন ডোজ পরিবর্তনের আগে আপনার ডাক্তারের সাথে পরামর্শ করুন।",
        mealsTitle: "আজকের খাবার",
        dateLabel: "তারিখ:",
        mealLabel: "খাবার:",
        fastingLabel: "উপোস রক্তের গ্লুকোজ (mmol/L):",
        platesLabel: "কার্বোহাইড্রেট প্লেট:",
        shortLabel: "স্বল্পমেয়াদী ইনসুলিন (ইউনিট):",
        postLabel: "খাবার পর ২ ঘন্টার গ্লুকোজ (mmol/L):",
        longLabel: "দীর্ঘমেয়াদী ইনসুলিন (ইউনিট, শুধু রাতের খাবার):",
    },
};

function switchLanguage() {
    const lang = document.getElementById("language-select").value;
    const t = translations[lang];

    document.getElementById("main-title").textContent = t.title;
    document.getElementById("disclaimer").textContent = t.disclaimer;
    document.getElementById("meals-title").textContent = t.mealsTitle;

    document.getElementById("date-label").textContent = t.dateLabel;
    document.getElementById("meal-label").textContent = t.mealLabel;
    document.getElementById("fasting-label").textContent = t.fastingLabel;
    document.getElementById("plates-label").textContent = t.platesLabel;
    document.getElementById("short-insulin-label").textContent = t.shortLabel;
    document.getElementById("post-glucose-label").textContent = t.postLabel;
    document.getElementById("long-insulin-label").textContent = t.longLabel;
}

let meals = JSON.parse(localStorage.getItem('meals')) || [];

function addMeal() {
  // Add meal logic here
  alert('Meal added!');
  updateTable();
 }

 window.onload=()=>{
  switchLanguage();
 };
</script>
