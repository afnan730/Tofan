import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";

// import p1 from "./assets/static/p1.jpeg";

// import p2 from "./assets/static/p2.jpeg";
// import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// import p6 from "./assets/static/p6.jpeg";
// import p5 from "./assets/static/p5.jpeg";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";
import v11 from "./assets/static/v11.mp4";
import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        // {
        //   text: "South Africa filed a genocide case against Israel in the ICJ in reference to the latest continuous attacks on Gaza. Thanks to this great nation that stands for what's right. What about the others? #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
        //   type: "image",
        //   link: "https://www.cnn.com/2024/01/09/middleeast/israel-genocide-case-world-court-gaza-mime-intl/index.html",
        //   src: p5,
        // },

        {
          text: "Israel & its complicits are trying to dsmiss the genocide's case as it would have many negative consequences on them. Zionism proves to have catastrophic effects on the west. Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v12,
        },
        {
          text: "This Rabbi talks about Palastine pre 1948: people with different beliefs cohabitate peacefully but once the apartheid regime took place, torture, killing& displacement ended the peace& Palestinians have no choice but to resist. Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v11,
        },
        {
          text: "The South African Foreign Minister exposes American and Zionist lies, providing the global community with a compelling lesson in upholding human dignity. Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v8,
        },
        {
          text: "U.S administration dealing with Ukraine VS Gaza reveals its double standards.From the empathy in the 1st to a disregard&justification to a genocide in the 2nd. Is the Zionists's lobby wield significant influence in Washington? Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v4,
        },
        {
          text: "According to free voices among the world's Jews, nothing signifies anti-Semitism and Judaism more than the Zionism of the Israeli occupation. Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v6,
        },
        {
          text: "Since the Zionists use the fight against terrorists as cover for their war on Gaza, why do they harass & prevent people from praying at Al-Aqsa when H.a.mas isn't there? Why is press's freedom being suppressed? Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v7,
        },

        {
          text: "Israeli forces committed a massacre while retreating from the Al-Maghazi neighborhood in Gaza, killing tens of residents, including children and women. Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v5,
        },
        {
          text: "According to Mads Gilbert, racism is behind the position the UN took towards Gaza in comparison to Ukraine's. The organization that is supposed to protect and aid the oppressed proves to be a toy in hands of the oppressor  Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v1,
        },
        {
          text: "While Islamic principles emphasize respecting the elderly&the sick,Zionists r bare of any moral compass in distinguishing their treatment based on age.Isrealk soldier's depicted abducting old woman with no regard 4 her age&disability Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v2,
        },
        {
          text: "Aren't holy places protected under international laws & humanitarian and societal norms?  Or has killing and intimidation become the favorite game of the Zionists, regardless of place & time? Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
          type: "video",
          src: v3,
        },

        // {
        //   text: "UK Foreign Secretary David Cameron is 'worried' that Israel has 'taken action in breach of Int'l law'. Continue your pressure for the accountability of Israel and all officials who support the genocide in Gaza. Vivek Yemen Alberta Nigeria #Gaza_Geniocide",
        //   type: "video",
        //   src: v6,
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
