import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
// // import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// // import p5 from "./assets/static/p5.jpeg";
// import p6 from "./assets/static/p6.jpg";
// import p7 from "./assets/static/p7.jpg";
import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
// import v5 from "./assets/static/v5.mp4";
// import v6 from "./assets/static/v6.mp4";
// import v7 from "./assets/static/v7.mp4";
// import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";
// import v17 from "./assets/static/v17.mp4";
// import v14 from "./assets/static/v14.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        //1

        //2
        {
          text: "Occupation soldiers publish a photo of themselves setting fire to the library of Al-Aqsa University during their incursion into the university area in Gaza City. ",
          type: "image",
          src: p1,
        },

        //3
        {
          text: "It was always Ethnic Cleansing. It was ways a Genocide. It was always a Land Grab. It was never a WAR. ",
          type: "video",
          src: v1,
        },

        //4
        {
          text: "Aerial footage shows the Zionists have destroyed the whole of Gaza, this is ethnic cleansing on a scale we have never witnessed in our history. ",
          type: "video",
          src: v2,
        },

        // 5
        {
          text: "This's a former Israeli spokesman saying that Israel’s borders will continue to expand until they take over and “purify Mecca.”,It was never about hostages. It was always about Ethnic Cleansing. ",
          type: "video",
          src: v3,
        },

        // 6
        {
          text: "This is EVERYTHING Zionism has been secretly doing until YOU ALL have helped expose it.",
          type: "image",
          src: p2,
        },

        // 7
        {
          text: "From under the rubble, a heart-wrenching response by a father in Gaza, who has just lost his children in an Israeli strike",
          type: "video",
          src: v4,
        },
        {
          link: "https://x.com/thetufan07/status/1794357981980786739 ",
          type: "text",
        },
        {
          link: "https://x.com/thetufan07/status/1794357369360842993 ",
          type: "text",
        },
        {
          link: "https://x.com/thetufan07/status/1794354909657301190",
          type: "text",
        },
        {
          link: "https://x.com/thetufan07/status/1794354644803797265 ",
          type: "text",
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
