import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
// import v2 from "./assets/static/v2.mp4";
import p4 from "./assets/static/p4.jpeg";
import p1 from "./assets/static/p1.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p2 from "./assets/static/p2.jpeg";
import p5 from "./assets/static/p5.jpeg";
import p6 from "./assets/static/p6.jpeg";
import p7 from "./assets/static/p7.jpeg";
import p8 from "./assets/static/p8.jpeg";
import p9 from "./assets/static/p9.jpeg";
// import v3 from "./assets/static/v3.mp4";
// import v4 from "./assets/static/v4.mp4";
// import v5 from "./assets/static/v5.mp4";
import p10 from "./assets/static/p10.jpeg";
const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "King–Crane Commission stated:'the zionists claim that jews've the right 2 a land by being descendants from natives 2000+ yrs ago shouldn't be taken seriously&Jews immigration should be limited&2 stop making Palestine a purely Jew's state' Aug 29,1919 #Term #Palmer #Chelsea #Luton",
          type: "image",
          src: p5,
        },
        {
          text: "Understanding Palestinians' cause isn't so complicated. They're the indigenous of a land & a group of Zionists who stole it to establish their state. But that wasn’t enough 4 those homes wreckers, as they're trying to wipe Palestinians as well! #Term #Palmer #Chelsea #Luton #Gaza",
          type: "image",
          src: p3,
        },
        {
          text: "Palastinians in Israeli's prisons suffer from  bad and inhumane conditions. Lately, they are being treated as lab rates & forced to participate in drugs' trail that worsened their health. #Term #Palmer #Chelsea #Luton #Gaza",
          type: "image",
          src: p7,
        },
        {
          text: "Killing, for them, is a religious ideology!What logic is there to justify genocides?Where are all the human rights organizations regarding what's happening in Gaza? Aren't they supposed to stand up with the oppressed & protect them? #Term #Palmer #Chelsea #Luton #Gaza",
          type: "video",
          src: v1,
        },
        {
          text: "Ben Gurion,the founder of Israel,said:'I support the forced deportation of Palestinians,& I don't see anything immoral in it.' So,4 Israelis, Palestinians've no right 2 Palastine & they r the obstacle 2 a purely Jewish State's establishment. #Term #Palmer #Chelsea #Luton #Gaza",
          type: "image",
          src: p4,
        },
        {
          text: "Israel frequently engages in projection, falsely accusing the resistance of using children as human shields. In facts, evidence proves that the Israeli army employs this tactic, and use children to shield their tanks, among other instances. #Term #Palmer #Chelsea #Luton #Gaza.",
          type: "image",
          src: p1,
        },
        {
          text: "Being a Gazan, you are deemed a terrorist & a target. Occupation's army kills indiscriminately everyone (children,  women, elderly, etc) & destroyed everything in their way and then create a new fabrication to mask the truth. #Term #Palmer #Chelsea #Luton #Gaza",
          type: "image",
          src: p2,
        },

        {
          text: "Washington & Europe's support 4 Israeli occupation in its barbaric attacks on Gaza, where no one is safe,is a clear indication of double standards & hypocrisy. It is the real language that major players & politicians speak & understand #Term #Palmer #Chelsea #Luton #Gaza",
          type: "image",
          src: p6,
        },

        {
          text: "According to the Palestinian Red Crescent spokesman, the entire northern Gaza Strip lacks a single ambulance, despite the northern Gaza Strip is crowded with wounded and martyrs daily as a result of the ongoing criminality of the occupation. #Term #Palmer #Chelsea #Luton #Gaza",
          type: "image",
          src: p9,
        },
        {
          text: "Bombardment isn't the only death's cause in Gaza.  According to Euro-Mediterranean Human Rights Monitor, 71% Gazans are facing food shortage, 98% suffer from starvation while 64% consume grass, raw & or expired food. #Term #Palmer #Chelsea #Luton #Gaza",
          type: "image",
          src: p8,
        },
        {
          text: "Gaza isn't Israel's sole target. Masjid AlAqsa faces continuous aggression 4 decades; on 12/28/2023, 174 settlers stormed it without restraint. Muslims endure inhumane treatment, humiliation, aggressive searches, assault,& unjustified entry denials. #Term #Palmer #Chelsea #Luton",
          type: "image",
          src: p10,
        },
        // {
        //   text: "Even the bodies of martyrs in Gaza did not escape the brutality of the occupying entity, as they were mutilated, their internal organs were stolen, and many of them decomposed. #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
        //   type: "video",
        //   src: v4,
        // },

        // {
        //   text: "Bombardment isn't the only death's cause in Gaza.  According 2 Euro-Mediterranean Human Rights Monitor, 71% Gazans r facing food shortage, 98% suffer from starvation while 64% consume grass, raw & or expired food. #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
        //   type: "image",
        //   src: p8,
        // },
        // {
        //   text: "فرحة الأطفال أعيادهم. إلى جانب جبرُ خاطرِ خليل وإسعاده، يظهر في هذا الفيديو إيثار الأسرة لخليل رغم كثرة عددهم وحاجتهم؛ لكنهم يثقون في عطاء الله الذي وسعت خزائنه السماوات والأرض. 'وَاللهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ'. رواه مسلم #ولعت #الهلال #ايران",
        //   type: "video",
        //   src: p1,
        // },
      ],
      arabic: {
        header: "🔻طُـوفَـان الـحَـقِـيـقَـة",
        command: "الخاصة بك API Keys أدخل معرّفات",

        clickHere: " اضغط هنا لمشاهدة كيفية الحصول على API Keys",
        postButton: "نشر التغريدات",
        perviewButton: "عرض التغريدات",
        langButton: "English",
        tweetsHeader: "🔻التغريدات التي سيتم نشرها",
        modalButton: "إغلاق",
        note: "عند الضغط على نشر التغريدات سيتم نشرها على حسابك في تويتر",
        LoadingMsg:
          "يرجى عدم مغادرة الصفحة حتى يتم النشر، قد يستغرق ذلك بعض الوقت بسبب حجم الفيدوهات ",
      },
      english: {
        header: "Truth Flood🔻",
        command: "Enter your Twitter API keys",
        howToMsg: "To know how to get your API keys",
        clickHere: "Click here to know how to get your API keys ",
        postButton: "Post tweets",
        perviewButton: "Perview tweets",
        langButton: "عربي",
        tweetsHeader: "Tweets that will be posted 🔻",
        modalButton: "close",
        note: "After clicking Post tweets, they will be posted on your Twitter account",
        LoadingMsg:
          "Please don't leave the page until you see the success message. This may take a bit of time due to media size",
      },
      arabicTest: true,
    };
  },
  getters: {
    Tweets(state) {
      return state.tweets;
    },
    Content(state) {
      return state.arabicTest ? state.arabic : state.english;
    },
  },
});
export default store;
