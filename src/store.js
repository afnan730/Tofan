import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
// import p3 from "./assets/static/p3.jpg";
// import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
// import v7 from "./assets/static/v7.mp4";
// import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";
// import v13 from "./assets/static/v13.mp4";
// import v14 from "./assets/static/v14.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        // 1
        {
          text: "'The occupation aims to expel Palestinians from their land. I remain to resist their efforts and protect our homeland.' They seek genocide, intimidation, and displacement with international support, aiming to occupy all Palestinian territories.",
          type: "video",
          src: v1,
        },
        //2
        {
          text: "Israeli airstrikes obliterated an entire residential tower in Gaza before October 7th.",
          type: "video",
          src: v2,
        },
        //3
        {
          text: "This girl is crying because she lost her legs due to injuries sustained in the occupation's airstrikes on the Gaza Strip, where various types of rockets and ammunition are used, targeting children.",
          type: "video",
          src: v3,
        },
        //4
        {
          text: "The occupation's targets: 'the children of Gaza.'",
          type: "image",
          src: p1,
        },
        //5
        {
          text: "Boycott is the simplest and most important humanitarian duty on the conscience of every honorable person who condemns the criminal occupation's genocide.",
          type: "video",
          src: v4,
        },
        //	6
        {
          text: "Scenes of AlQuds Open University in Khan Yunis, Gaza after being destroyed by Israel's army.",
          type: "video",
          src: v5,
        },
        // 7
        {
          text: "Israeli occupation forces raid Hebron city, south of West Bank.",
          type: "image",
          src: p2,
        },
        //8
        {
          text: "Palestinians perform funeral prayer to nearly 40 martyrs killed in an Israeli massacre last night in Nusseirat refugee camp in central Gaza.",
          type: "video",
          src: v6,
        },

  
      ],
      arabic: {
        header: "🔻طُـوفَـان الـحَـقِـيـقَـة",
        command: "الخاصة بك API Keys أدخل معرّفات",
        contact: "تابعونا على",
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
        contact: "Follow us on",
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
