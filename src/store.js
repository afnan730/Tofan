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
          text: "This is what happened in Palestine.",
          type: "image",
          src: p1,
        },
        //2
        {
          text: "Blind support.",
          type: "video",
          src: v2,
        },
        //3
        {
          text: "There is no need to create movies! It's a real crime.",
          type: "video",
          src: v3,
        },
        //4
        {
          text: "If your version of history is true..",
          type: "video",
          src: v1,
        },
        //5
        {
          text: "Gaza's alShifa Hospital is now in ruins after Israeli forces withdrew from the complex on 1 Apr following a 2-week raid, during which they killed +400 Palestinians & demolished +1,050 homes in the surrounding area.",
          type: "video",
          src: v3,
        },
        //	6
        {
          text: "In one day,Israel violated the Geneva Convention,the Vienna Convention,& the Rome Statute by attacking an embassy, killing 7 humanitarian aid volunteers. This follows the Holocaust crimes at AlShifa Hospital",
          type: "image",
          src: p3,
        },
        // 7
        {
          text: "Meet Zumi,worked at World Central Kitchen,serving meals to displaced people with a smile. She came From Australia to Gaza for humanitarian work. Israel killed Zumi with her colleagues, along with + 32,000 others.",
          type: "image",
          src: p2,
        },
        //8
        {
          text: "The atrocities in Al-Shifa Complex expose the true face of this fascist entity Israel,straying from humanity's values. Its genocidal wars against Gaza civilians & infrastructure persist,with unlimited support from US President Biden's administration,while the world remains silent",
          type: "text",
        },

        // //9
        // {
        //   text: "Despite the rulings of the International Court of Justice requiring Israel to allow food into Gaza, it continues to refuse, and the children of Gaza continue to fall one after another!",
        //   type: "video",
        //   src: v7,
        // },

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
