import { createStore } from "vuex";

// import p1 from "./assets/static/p1.jpeg";
// import p2 from "./assets/static/p2.jpeg";
// import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
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
          text: "A video filmed by a French soldier in the occupation army shows Palestinian prisoners abducted from Gaza. He points out one prisoner's back,tortured by his Israeli colleagues. The video contains insulting remarks towards prisoners",
          type: "video",
          src: v2,
        },
        //2
        {
          text: "Israeli occupation forces kidnapped dozens of civilians from Al-Shifa hospital in #Gaza city and they officially admitted the execution of 20 Palestinian men inside Shifa hospital",
          type: "image",
          src: p1,
        },
        //3
        {
          text: "Israeli soldiers carve star of David with a knife on Palestinian's back in South Gaza. It's appalling that such atrocities continue to occur with unlimited impunity.",
          type: "image",
          src: p2,
        },
        //4
        {
          text: "Israel has killed +13,000 children in Gaza since last October, according to UNICEF. Meanwhile,tens of thousands suffer severe malnutrition due to deliberate starvation & siege imposed on Gaza by Israel, US & its allies.",
          type: "image",
          src: p3,
        },
        //5
        {
          text: "Israeli settler militias attack the Palestinian village of Madama, north of the occupied West Bank.",
          type: "video",
          src: v1,
        },
        //	6
        {
          text: "Official statistics show that the number of children killed in Gaza surpasses those killed in the last 5 years of global wars. How can anyone resume normal life after such tragedies?",
          type: "image",
          src: p4,
        },
        // 7
        {
          text: "A little Palestinian girl cries her eyes out over her father, killed in an Israeli airstrike in Gaza's Al Zaytoun neighborhood.",
          type: "video",
          src: v4,
        },
        //8
        {
          text: "Israeli forces invaded AlShifa hospital,expelling 4-year-old Saja & other patients with Many displaced individuals forcing them to walk to Deir elBalah despite receiving treatment for injuries from an Israeli airstrike.",
          type: "video",
          src: v5,
        },

        //9
        // {
        //   text: "Gilad Atzmon: 'Jewish power is the unique capacity to stop us from discussing or even contemplating Jewish power. It is the capacity to determine the boundaries of the political discourse and criticism in particular.'",
        //   type: "image",
        //   src: p4,
        // },
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
