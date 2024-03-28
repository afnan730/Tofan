import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
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
          text: "How did Israel respond to the UN Security Council's resolution calling for an immediate ceasefire in Gaza? Here is journalist Sami Barhoum's answer.",
          type: "video",
          src: v2,
        },
        //4
        {
          text: "An Israeli soldier has shared this video on an Instagram showing the blowing up of an entire residential square in Gaza, leaving six families homeless.",
          type: "video",
          src: v3,
        },
        //5
        {
          text: "Footage documenting the execution by an Israeli soldier of an elderly man near the Gush Etzion settlement bloc, south of Bethlehem, a few days ago.",
          type: "video",
          src: v4,
        },
        //	6
        {
          text: "Israeli media reports soldiers using images in military gear as a dating strategy,alongside Gaza ruins & boasts about Palestinian detainees. Polls suggest success,with one reservist noting increased attention since starting reserve duty.",
          type: "image",
          src: p2,
        },
        // 7
        {
          text: "When an individual or entity commits acts of genocide, they cannot justify or absolve themselves with any excuse or rationale, leaving them unable to respond.",
          type: "video",
          src: v5,
        },
        //8
        {
          text: "In addition to killing innocent civilians, they also document it for the world to witness the genocide they are committing.",
          type: "video",
          src: v6,
        },

        //9
        {
          text: "Is this the ethical and peaceful people they describe?!! Settlers dance and sing while carrying alcohol in the streets of the occupied Old City of Jerusalem today.",
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
