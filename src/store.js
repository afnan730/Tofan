import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpeg";
import p2 from "./assets/static/p2.jpeg";
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
// import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "The secrets behind Gazans' strength, patience, steadfastness, resilience, hope and faith by Prof. Eyad Qunaibi.",
          type: "text",
          link: "https://twitter.com/Dr_EyadQun/status/1736084880830660991?t=AsBIrnE_CpEhehd3Ep2n-g&s=19",
        },

        // 2

        {
          text: "Global leaders stay silent on Gaza's documented genocide,yet US is arming Israel to persist in this genocide.Every moment of silence allows the ongoing genocide. We must not look away. Urgent action is needed",
          type: "video",
          src: v1,
        },

        //3
        {
          text: "Israel's assault on Gaza unveils war crimes,shattering humanitarian standards & defying the UN—a contemptuous stance in the face of international law.",
          type: "video",
          src: v2,
        },

        //4

        {
          text: "في أمريكا أصبح الطلبة يخرجون من المدارس كنوع من المقاطعة/العصيان المدني اعتراضاً على الإبادة في غزة.هل هذا شيء غير قابل للتطبيق في البلاد العربية في المدارس والجامعات؟  لماذا تستمر الحياة هُنا وكأن شيئاً لم يكن؟!",
          type: "video",
          src: v3,
        },

        //   //5
        {
          text: "قال صلى الله عليه وسلم''ما آمن بي من بات شبعان وجاره جائع إلى جنبه وهو يعلم''. فما بالكم بشعب مسلم يقتل ويحاصر ويمنع عنه الماء والغذاء ولا تحرك الأمة وجيوشها ساكنا وتركن لحكام مجرمين أشربوا الخيانة والنذالة؟!",
          type: "video",
          src: v4,
        },

        //6

        {
          text: "This map was issued by National Geographic in 1947, one year before the Nakba, there was no such thing called “Israel”.",
          type: "image",
          src: p1,
        },

        // 7

        {
          text: "In 1948 Israel poisoned water wells to drive Palestinians from their land! This didn't start on October 7th.",
          type: "image",
          src: p2,
        },

        //8
        {
          text: 'Rafah was never a "Safe Zone". It was an ethnic cleansing plan!Truly psychopathic',
          type: "video",
          src: v5,
        },

        //9

        {
          text: "Their own words, this was always their plan to ethnically cleanse the population without return.",
          type: "video",
          src: v6,
        },

        //   //	10
        {
          text: "If this is only a war against Hamas, then why is Israel destroying market stalls in the West Bank?",
          type: "video",
          src: v7,
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
