import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p4 from "./assets/static/p4.jpeg";
import p5 from "./assets/static/p5.jpeg";
import p6 from "./assets/static/p6.jpeg";

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
          text: "In Gaza, the massacre of journalists was committed by Israel and the international community remained silent about it!.",
          type: "image",
          src: p1,
        },
        //2
        {
          text: "For those with short memories. There was no state called Israel, only Palestine. Listen to the former Prime Minister of Israel",
          type: "video",
          src: v1,
        },
        //3
        {
          text: "US politicians are trying to stop Palestinians from taking Israel to the International Criminal Court to prove their crimes. It’s the equivalent of trying to stop the Nuremberg Trials",
          type: "video",
          src: v2,
        },
        //4
        {
          text: "After killing and displacing people, they record the moment of detonating civilians on social media platforms!.",
          type: "video",
          src: v3,
        },
        //5
        {
          text: "Israel's reputation is the result of its actions, & it doesn't need anyone to tarnish its reputation b/c its soldiers and politicians do it well. Rather, they document and photograph their crimes & then publish them on social media.",
          type: "image",
          src: p2,
        },
        //	6
        {
          text: "'Best time to kill Rafah residents is during Ramadan as they're all fasting and tired.' This was a statement by Knesset member Almog Cohen from the Jewish Power Party, openly advocating violence and destruction.",
          type: "video",
          src: v4,
        },
        // 7
        {
          text: "Israel propaganda strategy:",
          type: "image",
          src: p3,
        },
        //8
        {
          text: "Dr. Mads Gilbert, who just recently came back from volunteering at Al-Shifa Hospital, said on an interview with @democracynow  that he is extremely disturbed from what he saw and that the only explanation is that this is rooted from a deep form of racism",
          type: "video",
          src: v6,
        },

        //9
        {
          text: "This Zionist soldier humiliated and abused a Palestinian child, hitting him & dragging him by his clothes for no reason other than to satisfy his sick pride!",
          type: "video",
          src: v5,
        },
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
