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
          text: "AIPAC plans to allocate an incredible $100 million in political contributions this year, which some consider unprecedented election interference. Those accepting these funds should be investigated for treason and face imprisonment. Credit @TrackAIPAC",
          type: "video",
          src: v1,
        },
        //2
        {
          text: "Palestine is the only country on earth that has no right to resist occupation, land theft, ethnic cleansing and genocide!",
          type: "video",
          src: v2,
        },
        
        //3
        {
          text: "Footage from an Israeli drone, downed in Gaza, documents Israeli army operations in the Shuja'iya neighbourhood, and the use of a Palestinian as a human shield!",
          type: "video",
          src: v3,
        },
        
        //4
        {
          text: "This is how things are politically managed in the major countries, 'it is a dirty political system that is completely corrupted by money..'",
          type: "video",
          src: v4,
        },
        //5
        {
          text: "Your protest and boycott today aren't just for Gaza and Palestine, but for your own liberation. 'If you have come here to help me, you are wasting your time, but if you have come because your liberation is bound up with mine, then let us work together.'",
          type: "video",
          src: v5,
        },
        //	6
        {
          text: "Imagine you and your children in this situation. How would you view the world? How would you see the occupation? Would you live indifferent to what's happening? This is the occupation army continuing its war on children in the Gaza Strip, pledging to end their lives through various forms of killing.",
          type: "video",
          src: v6,
        },
        
        // 7
        {
          text: "A prisoner detained by the occupation from Nasser Medical Complex in Khan Younis recounts harsh details of the torture he endured for two months.",
          type: "video",
          src: v7,
        },

        // 8
        {
          text: "A prisoner detained by the occupation from Nasser Medical Complex in Khan Younis recounts harsh details of the torture he endured for two months.",
          type: "image",
          src: p1,
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
