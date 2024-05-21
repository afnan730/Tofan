import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
// import p2 from "./assets/static/p2.jpg";
// // import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// // import p5 from "./assets/static/p5.jpeg";
// import p6 from "./assets/static/p6.jpg";
// import p7 from "./assets/static/p7.jpg";
import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
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
        {
          text: "American surgeon Dr. Adam El-Hamwy:'I've worked in war &disaster zones for 20 years,but I've never seen anything like Gaza. I performed more amputations on children in 2 weeks in Gaza than in my entire career!'",
          type: "video",
          src: v1,
        },

        //3
        {
          text: "An expert presents investigations with evidence of the brutality of the occupation at Al-Shifa Hospital in Gaza.",
          type: "video",
          src: v2,
        },

        //4
        {
          text: "Everything you need to know about Rafah 'the-safe-zone'.",
          type: "video",
          src: v3,
        },
        //5

        // 1
        {
          text: "ISRAEL TARGETS CHILDREN!",
          type: "video",
          src: v4,
        },
        {
          text: "American influencer Guy Christensen:'Biden sent another billion dollars worth of weapons to Israel less than a week after saying he wouldn't send more weapons if Israel invaded Rafah. They keep lying & deceiving us!'",
          type: "video",
          src: v5,
        },
        {
          text: "This 92-year-old Nakba survivor says the genocide in Gaza today is “history repeating itself.”",
          type: "video",
          src: v6,
        },
        {
          text: "THE NAKBA EXPLAINED",
          type: "video",
          src: v7,
        },
        {
          text: "Israel has become the most dangerous place for Jews to live.",
          type: "video",
          src: v8,
        },
        {
          text: "The Israeli military's action of publicly releasing a list of citizens, including minors, alleging them to be Hamas informants is appalling. This includes kids whose personal information has been disclosed.",
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
