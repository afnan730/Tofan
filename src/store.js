import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
// import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// import p5 from "./assets/static/p5.jpeg";
import p6 from "./assets/static/p6.jpg";
import p7 from "./assets/static/p7.jpg";
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
import v11 from "./assets/static/v11.mp4";
import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        // 1
        {
          text: "The Criminal Israeli occupation army, supported by the US,UK and other European countries, is bombing the displaced Gazans in their tents.",
          type: "video",
          src: v1,
        },
        {
          text: "Palestinian ex-prisoner Imad Jadallah from Dura, south of Hebron, upon release from Israeli jails today. The image highlights severe malnutrition, indicating Israeli authorities' denial of hygiene facilities as collective punishment after 7 Oct",
          type: "image",
          src: p7,
        },
        {
          text: "The Commission of Detainees Affairs says it received yesterday a released prisoner who lost his mind as a result of torture in Israeli prisons.",
          type: "image",
          src: p6,
        },
        {
          text: "I saw them tweezed the hair of his beard using pincers . A horrifying testimony by a recently released detainee about doctor Eyad Shaqoura.",
          type: "video",
          src: v12,
        },
        {
          text: 'The witnesses of the newly released Palestinian prisoners stated: "We endured 24 hours of torture, oppression, and humiliation. We were surrounded by the Israeli army\'s fierce dogs, and Israeli jailers even urinated on us."',
          type: "video",
          src: v11,
        },
        //2
        {
          text: "Gaza, the Open Massacre",
          type: "image",
          src: p1,
        },

        //3
        {
          text: "The Israeli occupation army 's terrorism knows no bounds, targeting children and those aiding them, be they journalists or medical workers.",
          type: "video",
          src: v2,
        },

        //4
        {
          text: "How long will the suffering of these innocents continue, between displacement, killing, and hunger, while powerful countries continue to support the occupation in its acts of genocide and injustice?",
          type: "video",
          src: v3,
        },
        //5
        {
          text: "Have we lost our minds to condemn the resistance of a people subjected to repression, murder, and genocide for 75 years?",
          type: "video",
          src: v4,
        },
        //	6
        {
          text: "Israeli soldiers are torching homes in Jabalia. Posted minutes ago from a soldier on social media writing: 'Gaza is on fire'!",
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
