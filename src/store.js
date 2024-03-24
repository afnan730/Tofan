import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpg";
import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
// import v7 from "./assets/static/v7.mp4";
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
          text: "Horrifying testimonies have been coming out in the last 6 days of executions, rape, & torture at Al-Shifa Hospital and the vicinity of the medical complex",
          type: "video",
          src: v3,
        },
        //2
        {
          text: "[Our logic in this war is clear: don't leave any soul alive.] These are the instructions of their rabbis and distorted Jews.",
          type: "image",
          src: p1,
        },
        //3
        {
          text: "The occupation tries to hide the clear truth that 75 years of killing, displacement, settlement, and siege preceded the events of Oct 7th",
          type: "video",
          src: v4,
        },
        //4
        {
          text: "Is digging up graves part of self-defense, or is it the reality of the Zionist culture based on genocide & the elimination of the indigenous people?!",
          type: "video",
          src: v2,
        },
        //5
        {
          text: "142 sick, injured & others R trapped inside Al-Shifa Hospital, & the United Nations institutions didn't take any action, as if the people of Gaza R nothing!",
          type: "video",
          src: v1,
        },
        //	6
        {
          text: "Little girl at Kamal Adwan Hospital in northern Gaza suffers from dehydration and malnutrition amidst the ongoing Israeli siege warfare.",
          type: "image",
          src: p2,
        },
        // 7
        {
          text: "The prisoner Anas Mashal Al-Barghouti from the town of Kobar, north of Ramallah, has lost his memory due to severe torture inflicted by the Israeli occupation forces.",
          type: "image",
          src: p4,
        },
        //8
        {
          text: "The devastating Israeli bombardment of Gaza would not have been possible without tens of thousands of guided bombs and munitions sent by the United States since October 7",
          type: "image",
          src: p3,
        },

        //9
        {
          text: "The occupation forces forced two children to undress as they passed from Gaza to its center, and on the way, saying that there were dozens of corpses killed by the Israeli occupation along their way",
          type: "video",
          src: v5,
        },
        //10
        {
          text: "The annual crime has begun in Jerusalem, from beating and assaulting the people of Jerusalem and visitors of the Al-Aqsa Mosque.",
          type: "video",
          src: v6,
        },
        //11
        {
          text: "The Rabbi Eliyahu Mali and the Torah Genocide War: He advocates for the principle of killing everyone, including men, women, and children.",
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
