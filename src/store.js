import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";

import p1 from "./assets/static/p1.jpeg";

// import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p4 from "./assets/static/p4.jpeg";
import p6 from "./assets/static/p6.jpeg";
import p5 from "./assets/static/p5.jpeg";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "As per Haaretz's wording,'If death doesn't come by bombing,hunger will bring it'. A 'severe famine' spreads quickly in Gaza due 2 continues boming & the blockade imposed by Israel. Urgent global humanitarian intervention's deemed necessary. #WorldJuniors #OTDirecto2E Epstein MATZ",
          type: "image",
          src: p5,
        },
        {
          text: "If one attack,as barbaric as it was,pushes so many Israelis to  become inhuman,imagine what it's like 4 Palestinians who have lived  under such attacks 4 decades. We always wonder,'How do they become  those monsters?'Here's the answer. #WorldJuniors #OTDirecto2E #Epstein #MATZ",
          type: "video",
          src: v1,
        },
        {
          text: "The Israeli occupier openly acknowledges and legalizes torture of detainees, as outlined in Article 4.7 of the Lando report, subjecting thousands of Palestinians arrested by the occupation to the worst forms of torture throughout history. #WorldJuniors #OTDirecto2E Epstein MATZ",
          type: "image",
          src: p1,
        },
        {
          text: "If Israel pretext to wipe Gazans out is October 7th, how should the Palestinians react when they v been living many October 7th for 75+ years. This Israeli scholar is one of many honest voices who dare to expose the truth. #WorldJuniors #OTDirecto2E Epstein MATZ",
          type: "video",
          src: v2,
        },

        {
          text: "Kidnapping babies/children is another war crime Israeli occupation is committing against Gazans & some evidence emerged to confirm this atrocity. An urgent return of those children should be demanded immediately. #WorldJuniors #OTDirecto2E Epstein MATZ #Gaza_Genocide",
          type: "image",
          src: p3,
        },
        {
          text: "Palestinian passes away, but his memory remains immortal. This is a story of people seeking for dignity & a beautiful life, but Israeli occupation & his alliance don't allow them to live. #WorldJuniors #OTDirecto2E Epstein MATZ",
          type: "video",
          src: v4,
        },
        {
          text: "Brick, an Israeli General, said that all of Israel weapons used in this current Gaza's genocide are Americans and Israel won't be able to continue if not for the U.S's weaponry. https://www.motherjones.com/politics/2023/12/how-joe-biden-became-americas-top-israel-hawk/?s=08 #WorldJuniors #OTDirecto2E Epstein MATZ #Gaza",
          type: "image",
          src: p4,
        },
        {
          text: "Decades of Washington's unconditional support 2 Israel give them impunity 2 the point that they feel no shame bragging about their crimes. One of their soldiers, who just killed a 12 y.o girl, is looking 4 babies as they r his best targets. #WorldJuniors #OTDirecto2E Epstein MATZ",
          type: "video",
          src: v3,
        },
        {
          text: "Isreal detained Palestinians' children without charges & put them in prison for long years where they're tortured, humiliated & starved. https://www.addameer.org/sites/default/files/publications/al_dameer_annual_report_english.pdf #WorldJuniors #OTDirecto2E Epstein Epstein MATZ $BRCT #Gaza_Genocide",
          type: "image",
          src: p6,
        },
        // {
        //   text: "2 allegations emerged in the last 24hrs about Gaza's children being kidnapped by Israel. Rushdi, from Gaza, was detained with his wife & 2 children(a 4y.old & a 6month old), however, Rushdi is back 2 Gaza without his children! #WorldJuniors #OTDirecto2E Epstein MATZ #Gaza_Genocide",
        //   type: "video",
        //   src: v5,
        // },

        // {
        //   text: "يد واحدة لا تصفق؛ لكنها تخوض معركة، وتسحق جيشا، وتصنع بطولة عجزت عن صناعتها أمة. قدم واحدة لا تستطيع السير؛ لكنها تستطيع الوقوف في أرض الرباط تدافع عن ثغر أمة. الإقدام أو التراجع من داخل المرء، ولا علاقة له بفقدان أو تعطل عضو. #السنه_الجديده #HappyNewYear #الشهيد_الساجد آرسنال",
        //   type: "video",
        //   src: v4,
        // },
      ],
      arabic: {
        header: "🔻طُـوفَـان الـحَـقِـيـقَـة",
        command: "الخاصة بك API Keys أدخل معرّفات",

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
