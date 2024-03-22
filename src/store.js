import { createStore } from "vuex";

// import p1 from "./assets/static/p1.jpeg";
// import p2 from "./assets/static/p2.jpeg";
// import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
import v9 from "./assets/static/v9.mp4";
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
          text: "A British surgeon who treated the wounded in Gaza tells how Israeli occupation forces burn children alive all the way to the bone.",
          type: "video",
          src: v1,
        },
        //2
        {
           text: "Their lies are evident yet again as they falsely claim there were military barracks inside Al-Shifa Hospital after their raid.",
          type: "video",
          src: v2,
        },
        //3
        {
          text: "'Constructing this port aims to displace Palestinians from Gaza, a grave act of ethnic cleansing.' British MP George Galloway condemns UK government's silence on occupation's intentions.",
          type: "video",
          src: v3,
        },
        //4
        {
          text: "Jared Kushner's plan of excavating the Negev, establishing a safe zone, evacuating civilians from Gaza, then entering and completing the mission, is a clear and explicit strategy for ethnic cleansing and displacing people from their land.",
          type: "video",
          src: v4,
        },
        //5
        {
          text: "The international community is increasingly aware of Israel's use of famine as a weapon of war in Gaza, achieved through the blockade preventing aid from reaching the region.",
          type: "video",
          src: v5,
        },
        //	6
        {
        text: "October 7th was not the beginning of the Palestinian Genocide.",
          type: "video",
          src: v6,
        },
        // 7
        {
          text: "'Israel now ranks among the world's worst, committing unprecedented crimes.' - British Jewish journalist David Hearst",
          type: "video",
          src: v7,
        },
        //8
        {
          text: "Apartheid Israeli occupation forces assault Palestinians trying to reach Al-Aqsa mosque in occupied Jerusalem.",
          type: "video",
          src: v8,
        },

        //9
        {
          text: "The head of an Israeli settlement in the northern West Bank calls for the erasure of Palestinian villages and cities in the West Bank, as seen in Gaza.",
          type: "video",
          src: v9,
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
