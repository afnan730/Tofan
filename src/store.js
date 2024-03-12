import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
// import p2 from "./assets/static/p2.jpg";
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
import v7 from "./assets/static/v7.mp4";
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
          text: "This is what those in power have decided will be the new normal!",
          type: "image",
          src: p1,
        },

        //2
        {
          text: "Speaking of double standards! When it's Ukraine, the world opens its eyes, but when it's Gaza, everyone seems to have turned blind.",
          type: "video",
          src: v1,
        },

        //	3
        {
          text: "Helicopter footage reveals extensive destruction, highlighting that this is more of a genocide than the claimed 'self-defense.'",
          type: "video",
          src: v2,
        },

        // 4

        {
          text: "The occupation has not stopped targeting homes and neighborhoods, so do not believe the lies about the cessation of the barbaric bombardment carried out by the occupation day and night on Gaza.",
          type: "video",
          src: v3,
        },

        //5

        {
          text: "The occupation continues its campaigns of arrests and raids without any justifiable reasons.",
          type: "video",
          src: v4,
        },

        //   //6
        {
          text: "This is the life of the people of Jerusalem 'alquds' throughout the occupation. Israeli occupation police officers in occupied Jerusalem restrain 6 Palestinians together and humiliate them as they are led away.",
          type: "video",
          src: v5,
        },

        //  7

        {
          text: "'Yes, these R difficult scenes 4 viewers'. These martyrs were pulled out from the Nasser Medical Complex courtyard in Khan Younis after the graves were excavated & the bodies of the martyrs were desecrated by the occupying army",
          type: "video",
          src: v6,
        },

        // 8

        {
          text: "Palestine was not a land without people. There was a life on this land.",
          type: "video",
          src: v7,
        },

        // //	9

        //   {
        //      text: "It is very important to follow the dialogue to refute the lies and claims of the occupation.",
        //    type: "video",
        //        src: v10,
        //    },
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
