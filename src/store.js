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
          text: "At the same time, American officials come out to express their 'concern' about civilian casualties if an invasion of Rafah occurs",
          type: "image",
          src: p1,
        },
        //2
        {
          text: "Images posted by Israeli occupation soldiers depict Israeli forces utilizing schools in Gaza as military bases, where the buildings serve to shelter tanks & troops after displacing hundreds of Palestinians who had sought refuge there.",
          type: "image",
          src: p2,
        },
        //3
        {
          text: "The extensive destruction caused by Israeli airstrikes, with Israeli tanks subsequently invading al-Shuja'iyya neighborhood, east of Gaza City.",
          type: "video",
          src: v1,
        },
        //4
        {
          text: "Palestinian infants arrive daily at the hospital in Gaza in a severe state of malnutrition and drought due to the Israeli blockade on Gaza.",
          type: "video",
          src: v2,
        },
        //5
        {
          text: "Israeli occupation forces place barriers in the way of Muslim worshippers heading to Al-Aqsa Mosque in occupied Jerusalem to perform the prayers.",
          type: "video",
          src: v,
        },
        //	6
        {
          text: "Israeli settlers try to impede access of worshippers to the Ibrahimi Mosque in the old city of Hebron, south of the occupied West Bank.",
          type: "video",
          src: v4,
        },
        // 7
        {
          text: "Israeli drones attacking Palestinians in tents near Al-Aqsa Martyrs Hospital in Deir al-Balah (The Safe Zone) , killing and wounding civilians and journalists.",
          type: "video",
          src: v5,
        },
        //8
        {
          text: "Why would the Israelis think that there are going to be consequences for acts that they have been committing for 75 years?!",
          type: "video",
          src: v6,
        },

        //9
        {
          text: "Despite the rulings of the International Court of Justice requiring Israel to allow food into Gaza, it continues to refuse, and the children of Gaza continue to fall one after another!",
          type: "video",
          src: v7,
        },

        //10
        
        {
          text: "This is not self-defense, but ethnic cleansing.",
          type: "video",
          src: v8,
        },
        
        //11
        {
          text: "United States of Israel.",
          type: "video",
          src: v9,
        },
        
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
