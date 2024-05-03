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
// import v7 from "./assets/static/v7.mp4";
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
          text: "Mass graves keep being uncovered in Gaza, committed by Israel. This truth has become known to the whole world.",

          type: "video",
          src: v1,
        },
        //2
        {
          text: "Starbucks stock extends its decline to -16% today hitting its lowest level since June 2022. The stock has now erased $35 billion in market cap since & globally saw 6% decline in customer traffic in Q1 2024 alone.Sources: Yahoo Finance, New York Post, The Kobeissi Letter",

          type: "image",
          src: p1,
        },
        //3
        {
          text: "This secret footage exposes elements of American university protesters who support Zionism and its crimes, illustrating how they are financially supported with large sums to carry out demonstrations. The tape has been banned from being shown in America.",
          type: "video",
          src: v2,
        },
        //4
        {
          text: "An elderly from Gaza. The occupation bombed his house while he was inside, rubble fell on him When paramedics reached him They found him praying the Fajr prayer! ",

          type: "video",
          src: v3,
        },
        //5
        {
          text: "While the occupation is bombing Gaza and its inhabitants, settlers are attacking aid trucks that were on their way to the Gaza Strip.",
          type: "video",
          src: v4,
        },
        //	6
        {
          text: "Palestinian Prisoners Club: The number of detainees in the West Bank has risen to 8,480 since October 7th",
          type: "image",
          src: p2,
        },
        // 7
        {
          text: "Palestinian Ministry of Health: In the West Bank Israel has killed more than 491 since the start of the war on #Gaza",
          type: "image",
          src: p3,
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
