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
      text: "The Rothschilds had the British Government sign the Balfour Declaration in Nov 1917 to transfer Palestine to the Zionist Federation, over 20 years before the holocaust. The holocaust was the excuse they would use to commit their own atrocities!",
          type: "video",
          src: v1,
        },
        //2
        {
      text:"To eliminate any doubts, the primary goal was to ethnically cleanse Palestinians and grab the land.",
          type: "video",
          src: v2,
        },
        
        //3
        {
      text: "The humanitarian aid zone had been updated to be no longer safe area, and Israel is dropping bombs on tents full of civilians in Rafah right now!",
          type: "video",
          src: v3,
        },
        
        //4
        {
      text: "The invasion of Rafah by land will cause the last lifeline for the people of Gaza to be severed. This massacre is ongoing, in plain sight of the world!",
          type: "video",
          src: v4,
        },
        //5
        {
      text: "Shocking documentation obtained by [@AJENews] originating from an Israeli drone showing the use of a Palestinian civilian as a human shield in Shujjaia Neighborhood, East Gaza city last December to search after militants, the man is being monitored by drones the whole time",
          type: "video",
          src: v5,
        },
        //	6
        {
      text: "Despite Ham.as announcing its acceptance of the ceasefire proposal, Israel launches a sudden ground assault on east of Rafah, accompanied by Israeli airstrikes!",
          type: "video",
          src: v6,
        },
        
        // 7
        {
      text: "Israeli soldier Ori Horowitz, from the Givati Brigade destroying a kitchen in Gaza for fun.",
          type: "video",
          src: v7,
        },

        // 8
        {
      text: "An Israeli soldier from the paratroopers brigade takes a souvenir picture of a Palestinian kidnapped partly stripped from his clothes, while blindfolded and handcuffed back in January. The soldier put this up on his Facebook account.",
          type: "image",
          src: p1,
        },

          // 9
        {
      text: "Hamas is hiding in a blue car",
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
