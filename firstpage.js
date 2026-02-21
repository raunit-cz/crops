// ===============================
// HERO IMAGE + TEXT SLIDER
// ===============================

const hero = document.querySelector(".hero");
const heroHeading = document.getElementById("heroHeading");
const heroParagraph = document.getElementById("heroParagraph");

let currentLang = "en";
let index = 0;

// Slides in Multiple Languages
const slides = {
    en: [
        {
            image: "images/img1.png",
            title: "Smart Farming Solutions",
            text: "Modern technology for better crop yield."
        },
        {
            image: "images/img2.png",
            title: "Best Selling Crops",
            text: "High demand organic and quality crops."
        },
        {
            image: "images/img3.png",
            title: "Weather & Market Updates",
            text: "Realtime crop price and climate insights."
        },
        {
            image: "images/img4.png",
            title: "Empowering Indian Farmers",
            text: "Digital advisory services across India."
        }
    ],
    hi: [
        {
            image: "images/img1.png",
            title: "स्मार्ट खेती समाधान",
            text: "बेहतर फसल उत्पादन के लिए आधुनिक तकनीक।"
        },
        {
            image: "images/img2.png",
            title: "सबसे अधिक बिकने वाली फसलें",
            text: "उच्च मांग वाली जैविक और गुणवत्ता वाली फसलें।"
        },
        {
            image: "images/img3.png",
            title: "मौसम और बाजार अपडेट",
            text: "रीयल-टाइम फसल मूल्य और जलवायु जानकारी।"
        },
        {
            image: "images/img4.png",
            title: "भारतीय किसानों को सशक्त बनाना",
            text: "डिजिटल सलाह सेवाएँ पूरे भारत में।"
        }
    ]
};

function changeHeroSlide() {
    const currentSlides = slides[currentLang];

    hero.style.backgroundImage = `url(${currentSlides[index].image})`;
    heroHeading.textContent = currentSlides[index].title;
    heroParagraph.textContent = currentSlides[index].text;

    index = (index + 1) % currentSlides.length;
}

// Initial Load
changeHeroSlide();

// Auto Change Every 4 Seconds
setInterval(changeHeroSlide, 4000);


// ===============================
// LANGUAGE TRANSLATION SYSTEM
// ===============================

const translations = {
    en: {
        topbar: "Government of India | Ministry of Agriculture",
        portalTitle: "Krishi Grow",
        home: "Home",
        schemes: "Schemes",
        advisories: "Advisories",
        reports: "Reports",
        contact: "Contact",
        highlightsTitle: "Realtime Highlights",
        reliability: "Best Selling",
        reliabilityDesc: "Grown with care, trusted by farmers.",
        guidance: "Expert Guidance",
        guidanceDesc: "Tips from agriculture specialists.",
        stats: "Real-Time Stats",
        statsDesc: "Latest market & weather updates.",
        reach: "Nationwide Reach",
        reachDesc: "Accessible for all Indian farmers.",
        sms: "SMS Advisory",
        weather: "Weather Updates",
        rice: "Rice",
        wheat: "Wheat",
        potato: "Potato",
        onion: "Onion",
        announcements: "Latest Announcements",
        notice1: "New crop advisory released.",
        notice2: "Subsidy scheme registration open.",
        notice3: "Rainfall alert issued.",
        notice4: "Heatwave conditions likely in central India. Increase irrigation frequency for vegetable crops.",
        notice5: "High demand for export-quality basmati rice reported this week.",
        footer: "© 2026 Ministry of Agriculture | All Rights Reserved"
    },
    hi: {
        topbar: "भारत सरकार | कृषि मंत्रालय",
        portalTitle: "कृषि ग्रो",
        home: "होम",
        schemes: "योजनाएँ",
        advisories: "सलाह",
        reports: "रिपोर्ट्स",
        contact: "संपर्क",
        highlightsTitle: "रीयल-टाइम मुख्य बिंदु",
        reliability: "सबसे अधिक बिकने वाला",
        reliabilityDesc: "देखभाल से उगाई गई, किसानों द्वारा भरोसेमंद।",
        guidance: "विशेषज्ञ मार्गदर्शन",
        guidanceDesc: "कृषि विशेषज्ञों से सुझाव।",
        stats: "रीयल-टाइम आँकड़े",
        statsDesc: "नवीनतम बाजार और मौसम अपडेट।",
        reach: "देशव्यापी पहुँच",
        reachDesc: "सभी भारतीय किसानों के लिए उपलब्ध।",
        sms: "एसएमएस सलाह",
        weather: "मौसम अपडेट",
        rice: "चावल",
        wheat: "गेहूं",
        potato: "आलू",
        onion: "प्याज",
        announcements: "नवीनतम घोषणाएँ",
        notice1: "नई फसल सलाह जारी की गई।",
        notice2: "सब्सिडी योजना पंजीकरण खुला है।",
        notice3: "वर्षा अलर्ट जारी।",
        notice4: "मध्य भारत में लू की संभावना। सब्जियों की सिंचाई बढ़ाएँ।",
        notice5: "इस सप्ताह निर्यात गुणवत्ता बासमती चावल की उच्च मांग।",
        footer: "© 2026 कृषि मंत्रालय | सर्वाधिकार सुरक्षित"
    }
};


// ===============================
// LANGUAGE CHANGE EVENT
// ===============================

document.getElementById("language").addEventListener("change", function () {

    currentLang = this.value;
    index = 0; // reset slider

    // Update all data-key elements
    document.querySelectorAll("[data-key]").forEach(element => {
        const key = element.getAttribute("data-key");
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update hero immediately
    changeHeroSlide();
});