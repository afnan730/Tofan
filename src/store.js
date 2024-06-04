import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p4 from "./assets/static/p4.jpeg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpg";
// import p7 from "./assets/static/p7.jpg";
import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
// import v5 from "./assets/static/v5.mp4";
// import v6 from "./assets/static/v6.mp4";
// import v7 from "./assets/static/v7.mp4";
// import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";
// import v17 from "./assets/static/v17.mp4";
// import v14 from "./assets/static/v14.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        //1

        {
          text: "“Zionism was a scourge on Palestinians, unrelated to Israel’s establishment. The Nazi Holocaust was a European crime. Zionism made Arabs & Jews enemies. Palestinian resistance stems from occupation & injustice, not hostility to pacifism.",
          type: "video",
          src: v1,
        },
        {
          text: "An Israeli occupation soldier has published a picture of himself in Gaza enjoying the burning of a Palestinian home after displacing its inhabitants.",
          type: "image",
          src: p4,
        },

        //11
        {
          text: "Effects of the destruction caused by the Zionist aggression in the Al-Faluga area in the northern Gaza Strip ",
          type: "video",
          src: v2,
        },

        {
          text: "Over 9,000 Palestinians have been arrested by Israeli occupation forces in the occupied West Bank since October 7, according to the Palestinian Prisoner's Society (PPS).",
          type: "image",
          src: p1,
        },
        {
          text: "Following the withdrawal, the decomposed bodies of multiple Palestinians were found in the area after being mass executed by the Israeli army. Their bodies were left in the open for a long period. ",
          type: "video",
          src: v3,
        },

        //12
        {
          text: "This isn't Gaza! This is Jaffa in 1948 after 3 months siege,where residents were starved, killed, & displaced by Israel. Despite no invasion by Palestinians or abducted soldiers,these atrocities occurred",
          type: "image",
          src: p2,
        },
        {
          text: "The father requests the doctor to check for signs of life in his child. Despite the doctor's thorough examination, they couldn't find any. Israel killed her. She was merely a 3-month-old infant! ",
          type: "video",
          src: v4,
        },
        {
          text: "+3,500 children in Gaza face the threat of death because of Israeli policies causing starvation,food scarcity,absence of nutritional supplements,& aid blockades.",
          type: "image",
          src: p3,
        },

        //13
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
