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
      text: "The widespread protests at over 40 American universities unveil the deep-seated support & collaboration with Israel, raising questions about the influence of the Zionist lobby in shaping university policies & investments",

          type: "video",
          src: v1,
        },
        //2
        {
      text : "Scenes of protests in American universities demanding an end Gaza war,met with police's aggressive action, haven't been witnessed in the US since the late 1960s in Vietnam War. This highlights the huge influence of Zionists lobby in USA",

          type: "video",
          src: v2,
        },
        //3
        {
      text: "The genocide in Gaza has exposed the hypocrisy and double standards of the so-called civilized world, where the lines between victims & aggressors are blurred, & moral values are disregarded!",
          type: "video",
          src: v3,
        },
        //4
        {
                text : "Occupation soldiers are using 'explosive cans' to target Palestinians in Gaza. These lethal traps are part of a policy of starvation and siege, posing deadly risks in bombed-out homes. ",

          type: "image",
          src: p1,
        },
        //5
        {
      text: "Pretending to be a victim is a culture rooted in the Zionist doctrine, as the well-known Israeli journalist points out.",
          type: "video",
          src: v4,
        },
        //	6
        {
      text: "There has never been a war in history where 80% of the country has been decimated, 100% of the population displaced, and 50% of the deaths were children! So keep protesting against GENOCIDE.",
          type: "video",
          src: v5,
        },
        // 7
        {
      text: "This is what the world governments and mainstream media don’t want you to see: Thousands of Israelis calling for the immediate resignation and imprisonment of Netanyahu.",
          type: "video",
          src: v6,
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
