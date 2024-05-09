import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
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
          text: 'Where is the "safe zone"?! This is their plan.',
          type: "video",
          src: v1,
        },
        //2
        {
          text: '12 US Senators threatened ICC prosecutor Karim Khan with severe sanctions if he issues an arrest warrant against Netanyahu, stating,"If you attack Israel, we\'ll attack you." Is this how international politics works?',
          type: "image",
          src: p1,
        },

        //3
        {
          text: "Israeli settlers attacked & destroyed humanitarian aid trucks bound for Gaza. It’s not just the Israeli government but also the Israeli people involved.They aren't innocent.",
          type: "video",
          src: v2,
        },

        //4
        {
          text: "It's time to acknowledge the reality & dispel the myth of Israeli innocence. Israeli nation actions reveal their true nature:perpetrating violence through attacks on civilians, property destruction,& even grave desecration",
          type: "video",
          src: v3,
        },
        //5
        {
          text: "It was never about hostages or October 7th; it was always about a land grab.",
          type: "video",
          src: v4,
        },
        //	6
        {
          text: "Here's why you should be wary when reading mainstream US news about Israel and Palestine:",
          type: "video",
          src: v5,
        },

        // 7
        {
          text: "Before judging people for how they react in Oct 7th, ask who have been the victims for the past 75 years? Who had their country colorized and their homes ethnically cleansed?!",
          type: "video",
          src: v6,
        },

        // 8
        {
          text: "A call for a global strike worldwide on Friday, the 10th of May.",
          type: "video",
          src: v7,
        },
        {
          text: "This is the occupation's list of targets from Rafah city.If the world stops boycotting & protesting, the test of its endless crimes continues..",
          type: "video",
          src: v8,
        },

        // 9
        {
          text: "The plan has been clear from the beginning, which is to displace the people of Gaza to Sinai. Now they control the Rafah crossing and can open and close it whenever they want.",
          type: "image",
          src: p2,
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
