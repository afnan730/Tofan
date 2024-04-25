import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
// import p2 from "./assets/static/p2.jpeg";
// import p3 from "./assets/static/p3.jpeg";
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
                text: "203 days of suffering in Gaza: families torn apart, homes destroyed, lives lost. It's time for the free people worldwide to esclate their actions, standing firm against this injustice",

          type: "video",
          src: v1,
        },
        //2
        {
                text: "Dozens of lsraeli settlers open fires on Palestinian village A-Mughayyir near Ramallah, West Bank",

          type: "video",
          src: v2,
        },
        //3
        {
      text: "No cause justifies the deliberate killing and maiming of innocent civilians, especially in refugee camps. The international community must condemn these heinous acts and work towards a peaceful resolution",
          type: "video",
          src: v3,
        },
        //4
        {
      text: "Since October 7th, the statistics of Israeli aggression on Gaza, supported by the UK, US, and various countries, reveal the devastating impact of war.",
          type: "image",
          src: p1,
        },
        //5
        {
      text: "Israeli occupation soldiers block access of an ambulance into Bab Al-Zawiya neighborhood in the Old City of Hebron, south of the occupied West Bank, today",
          type: "video",
          src: v4,
        },
        //	6
        {
      text: "These innocent children were killed in an Israeli airstrike targeting the Al-Jamal family home in Rafah Gzza last night",
          type: "video",
          src: v5,
        },
        // 7
        {
      text: "Israeli occupation forces detain and harass Palestinian children on al-Tuffah Street in the city of Hebron, in the southern occupied West Bank.",
          type: "video",
          src: v6,
        },
        //8
        {
      text: "Hundreds of Israeli settlers storm the Ibrahimi Mosque in the Old City of Hebron, south of the occupied West Bank, under the pretext of celebrating Passover, today",
          type: "video",
          src: v7,
        },

        //9
        {
      text: "A Palestinian child recounts the horror she experienced while trapped under rubble alongside her brother's body following Israeli airstrikes on Gaza.",
          type: "video",
          src: v8,
        },

        // //10

        {
      text: "Israeli occupation forces arrest Palestinian children near al-Jalazone refugee camp north of Ramallah.",
          type: "video",
          src: v9,
        },

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
