import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
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

        {
          text: "They are not terrorists, they are resistance. Does the world expect them to behave passively while Israel kills, tortures & slaughters Palestinians ?",
          type: "video",
          src: v1,
        },

        //11
        {
          text: "A silent yet deadly scene. The videographer says that this child was walking alone among the rubble, not knowing where to go. ",
          type: "video",
          src: v2,
        },
        {
          text: "Despite 240 days of genocide, the ICC has issued arrest warrants for only 2 war criminals from the Zionist entity.",
          type: "image",
          src: p1,
        },
        {
          text: "A total of 148 journalists have been killed since the start of the Israeli aggression on Gaza in October 2023",
          type: "image",
          src: p2,
        },

        //12
        {
          text: "Did U know that you are the bullet? U raised the lowly to the sky, called him a star, didn't boycott products that profit the occupier, & stayed silent while the truth suffered alone. ",
          type: "video",
          src: v3,
        },
        {
          text: "More than 15,000 children in Gaza have been killed by Israel in the past 7 months. How much longer will the world stay silent?",
          type: "image",
          src: p3,
        },

        //13
        {
          text: "Israel burns people & children alive, calling it a mistake, while world governments stand by, still supporting them with weapons. Israel won't stop till it's really stopped by the world leading government",
          type: "video",
          src: v4,
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
