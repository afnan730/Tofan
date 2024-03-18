import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
import p3 from "./assets/static/p3.jpg";
import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

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
          text: "Yuval Diskin,former head of the Shin Bet:'If I were Palestinian,I would do everything in my power to fight Israel for my freedom.They R fighting for freedom.We control lives of millions of Palestinians.Smotrich & Ben-Gvir R terrorists.'",
          type: "video",
          src: v1,
        },
        //2
        {
          text: "The influence of Talmudic theology in Zionism is the missing link to comprehending Israeli mass murder and racism.  https://twitter.com/Haqiqatjou/status/1717685255388237903?t=GEpBHeGgQgmM3PW7gvjH4A&s=19 ",
          type: "text",
        },
        //3
        {
          text: "This Rabbi let the whole world see how utterly evil israel demons are. Over 75 yrs of abuse of the Palestinians, Israel've created the problem with their illegal behavior. If these're their religious leaders, imagine how provoked will be followers of this monster!",
          type: "video",
          src: v2,
        },
        //4
        {
          text: "'Israel is a murderous gang!', and will stop only when United States stops providing them with the munition.",
          type: "image",
          src: v3,
        },
        //5
        {
          text: "How is it possible that here in Brazil, spreading hate against Jews can result in an 18-year prison sentence (murder gets you >12 years), while it is completely fine to advocate for the annihilation of the entire Palestinian people?!",
          type: "image",
          src: p1,
        },
        //	6
          {
          text: "NEVER STOP BOYCOTTING.",
          type: "image",
          src: p2,
        },
        // 7
        {
         text: "A daughter helps her father outside of Al-Najjar hospital in Rafah.  No child should ever have to endure such trauma.",
          type: "image",
          src: p3,
        },
        //8
        {
          text: "THERE IS NO WORD IN HEBREW FOR ACCOUNTABILITY. 'It was not needed in our culture'  -Ehud Barak, Former PM Israel",
          type: "video",
          src: v4,
        },

          //9
        {
          text: "Gilad Atzmon: 'Jewish power is the unique capacity to stop us from discussing or even contemplating Jewish power. It is the capacity to determine the boundaries of the political discourse and criticism in particular.'",
          type: "image",
          src: p4,
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
