import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
// import p2 from "./assets/static/p2.jpg";
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
          text: "If this is only a war against Hamas, then why is Israel destroying market stalls in the West Bank?",
          type: "video",
          src: v1,
        },
        {
          text: "'Our logic in this war is clear, don't leave any soul alive'Jewish Rabbi Eliyahu Mali. The distorted instructions in the Torah among Jews dictate the necessity to kill every individual in Gaza,even if they R children, elderly women or men",
          type: "video",
          src: v5,
        },
        {
          text: "Israeli occupiers aim to expel all from Gaza to seize control. Despite being American,I remain,resisting their takeover of Gaza.Their agenda includes genocide, intimidation, aided by international systems until all of Palestine is under their control.",
          type: "video",
          src: v9,
        },
        {
          text: "The Israeli military published a drone video of their strike on 2 civilians, claiming one of which was carrying an 'RPG'. After that, they admitted that it was actually a bicycle not RPG.",
          type: "video",
          src: v6,
        },
        //2
        {
          text: "Their own words, this was always their plan to ethnically cleanse the population without return.",
          type: "video",
          src: v2,
        },

        //	3
        {
          text: "This ethnic cleansing, which Western leaders called self-defense.",
          type: "video",
          src: v3,
        },

        // 4

        {
          text: "'All the Israeli villages in the country were built above Palestinian villages' A truth said by an Israeli citizen,so after this,is it rational for Palestinians to live in peace & safety with the occupation?.",
          type: "video",
          src: v4,
        },

        //5
        {
          text: "Israeli jets strike a location in Rafah (SAFE ZONE) near the border crossing.",
          type: "video",
          src: v7,
        },

        //   //6
        {
          text: "In the West Bank, life starkly contrasts with limitations, iron barriers, and meticulous surveillance, depicting the oppressive reality of occupation, curtailing lives and asserting control.",
          type: "video",
          src: v6,
        },

        //  7

        {
          text: "This map was issued by National Geographic in 1947, one year before the Nakba, there was no such thing called “Israel”.",
          type: "image",
          src: p1,
        },

        // 8

        {
          text: "Palestine was not a land without people. There was a life on this land.",
          type: "video",
          src: v7,
        },

        // //	9

        {
          text: "The difference between a victim and an Occupier. So clearly What the occupation is doing is committing more crimes alongside the crime of occupation!",
          type: "video",
          src: v8,
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
