import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p4 from "./assets/static/p4.jpeg";
import p5 from "./assets/static/p5.jpeg";
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
          text: '"وبعد أيها المسلمون؟هؤلاء إخوانكم، وتلك نساؤكم وأعراضكم، من لم يحركه حرق المسلمين، وتقطيع أطفالهم أشلاءً، وتمزيق أوصالهم أحياءً.. فلا خير فيه! ووالله، وبالله، وتالله، من لم يوقظه هذا، لن يستيقظ بعد ذلك إلا في قبره!"',
          type: "video",
          src: v3,
        },
        //2
        {
          text: "Israeli & USA war against Children in Rafah. ",
          type: "video",
          src: v1,
        },

        //3
        {
          text: "Israel's attempt to justify the burning +100 innocent Palestinians alive by claiming to target a resistance member is a blatant violation of international law & basic human decency. #Rafah_Massacre ",
          type: "video",
          src: v2,
        },

        //4
        {
          text: "Israel burned +100 Palestinians alive,mostly women & kids ,sparking outrage. Claiming targeting a resistance member,it evaded accountability. Media echoed the narrative,obscuring the truth. People's anger waned,forgetting the true massacre of 100! ",
          type: "image",
          src: p1,
        },

        // 5
        {
          text: "Despite overwhelming evidence of Israel's atrocities,its narrative of 'precision strikes' continues to be parroted by international media, obscuring the truth of the Rafah massacre ",
          type: "image",
          src: p2,
        },

        // 6
        {
          text: "Before u sleep,remember millions in Gaza don't wish food,cold drinks,or warm beds. All they wish is not to have their names among the charred bodies in tomorrow's or the day after's massacre committed by Israel",
          type: "image",
          src: p3,
        },

        // 7
        {
          text: "US Secretary of Defense: We sent precision munitions to Israel in order to reduce the number of civilian deaths in Gaza and hit targets accurately.",
          type: "video",
          src: v2,
        },
        {
          text: "Yes, indeed, your missiles have accurately hit their targets.",
          type: "image",
          src: p4,
        },
        {
          text: "A child martyr whose features were altered by the occupation's missiles on the displaced people's tents in Rafah yesterday.",
          type: "image",
          src: p5,
        },
        {
          link: "https://x.com/thetufan07/status/1795111333249138871 ",
          type: "text",
        },
        {
          link: "https://x.com/thetufan07/status/1794826042835976368 ",
          type: "text",
        },
        {
          link: "https://x.com/DAlshmwsy/status/1794906615734218891 ",
          type: "text",
        },
        {
          link: "https://x.com/thetufan07/status/1794357369360842993 ",
          type: "text",
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
