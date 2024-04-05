import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// import p5 from "./assets/static/p5.jpeg";
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
          text: "German Nazism = Israeli Zionism.",
          type: "video",
          src: v3,
        },
        //2
        {
          text: "James Elder, spokesperson for UNICEF globally, stated:'This tragic narrative for children must come to an end; humanity must craft a new chapter for these vulnerable young lives.'",
          type: "video",
          src: v2,
        },
        //3
        {
          text: "Israel emptied El Shifa Hospital in Gaza, abandoning 400 bodies. Some were crushed by tanks, others buried alive. Burnt buildings and children under 13 were executed. This isn't war, it's genocide.",
          type: "image",
          src: p1,
        },
        //4
        {
          text: "Israel hasn't been held accountable nor compelled to pay compensation for 75 yrs, which has contributed to a sense of impunity, potentially leading to serious violations such as genocide & no sense of accountability for their actions!",
          type: "video",
          src: v1,
        },
        //5
        {
          text: "Owen Jones spoke truth to power about Gaza: 'It changed me forever. Moral clarity gives resilience. Despite attacks and abuse, I stand firm. I'll risk my career for what's right!'Every free human must undertake this action!",
          type: "video",
          src: v5,
        },
        //	6
        {
          text: "According to Arab Panorama News, a British individual took action against a factory supplying rockets & fighter jets to the Zionist army. A clear message to those profiting from Palestinian suffering: complicity in genocide won't go unchallenged.l",
          type: "video",
          src: v4,
        },
        // 7
        {
          text: "Israeli forces push an ELDERLY MAN down the stairs, leaving his head SPLIT OPEN!",
          type: "video",
          src: v6,
        },
        //8
        {
          text: "Israeli sniper records himself shooting a CIVILIAN for FUN! “Wow, someone was hit in the HEAD! What a LEGENDARY VIDEO!”",
          type: "video",
          src: v7,
        },

        //9
        {
          text: "The genocide itself!",
          type: "video",
          src: v8,
        },

        // //10

        // {
        //   text: "This is not self-defense, but ethnic cleansing.",
        //   type: "video",
        //   src: v8,
        // },

        // //11
        // {
        //   text: "United States of Israel.",
        //   type: "video",
        //   src: v9,
        // },

        /*
        {
          text: "The Israeli occupation army detains and abuses women, even resorting to raping a pregnant woman in her fifth month. Yet, you turn a blind eye to these atrocities!",
          type: "image",
          src: p6,
        },

        //9
        {
          text: "UNICEF spokesman James Elder says he's frustrated that so many aid trucks packed on the Egyptian side of the border with Gaza are not allowed entry there for starving Palestinians in desperate need of them.",
          type: "video",
          src: v7,
        },
        */
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
