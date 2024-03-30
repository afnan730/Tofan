import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
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
          text: "Amidst the horror of a child's imminent death from starvation and dehydration in 2024, the silence of international law & bodies like the UN & Red Cross is deafening. The perpetrators, Israel, operate without consequences. We cannot ignore this.",
          type: "video",
          src: v1,
        },
        //2
        {
          text: "Paul Keeler, British thinker and lecturer at Cambridge University: ’The 7th of Oct fully exposed Israel. It has shown that Israel is deranged, It's not normal. If this were a person, they would be in a mental hospital.’",
          type: "video",
          src: v2,
        },
        //3
        {
          text: "More than 10,000 dunams in just 3 months. The occupation takes advantage of the world's preoccupation with Isreali' crimes in Gaza to seize lands in the West Bank, executing the largest land grab operation in three decades.",
          type: "video",
          src: v3,
        },
        //4
        {
          text: "Palestinians have taught the whole world the meaning of resilience, bravery, and heroism.",
          type: "video",
          src: v4,
        },
        //5
        {
          text: "The world had never witnessed scenes like these except during the famines in Africa, but now we find ourselves living a bitter reality in Gaza due tl an oppressive entity & complicit entities that R no less injustice!",
          type: "video",
          src: v5,
        },
        //	6
        {
          text: "This is one of the detainees released by the Israeli occupation forces this morning & subsequently transported to a Hospital in Rafah. Medical sources reported that he suffered a stroke & lost his memory while in Israeli detention.",
          type: "image",
          src: p1,
        },
        // 7
        {
          text : "As part of the ongoing genocide, they're now murdering two civilians on the beach!",
          type: "video",
          src: v6,
        },
        //8
        {
          text: "The child Ibrahim Al-najjar lost his life this morning due to hunger and malnutrition at Kamal Adwan Hospital in the north of Gaza, which has been under a tight Israeli blockade for 6 months.",
          type: "image",
          src: p2,
        },

        //9
        {
          text: "Hear their voices.. hear their pain!",
          type: "video",
          src: v7,
        },
        /*
        {
          text: "This is how a young Palestinian man left an Israeli prison in occupied Jerusalem. The occupation has been escalating the torture and abuse of Palestinian prisoners since October 7th",
          type: "image",
          src: p4,
        },
        //8
        {
          text: "Israeli soldiers have posted this picture on social media that shows them openly taking Gazans as human shields to protect their tanks.",
          type: "image",
          src: p5,
        },
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
