import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";

import p1 from "./assets/static/p1.jpeg";

import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p4 from "./assets/static/p4.jpeg";
// import p6 from "./assets/static/p6.jpeg";
import p5 from "./assets/static/p5.jpeg";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
// import v7 from "./assets/static/v6.mp4";
// import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "South Africa filed a genocide case against Israel in the ICJ in reference to the latest continuous attacks on Gaza. Thanks to this great nation that stands for what's right. What about the others? #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "image",
          link: "https://www.cnn.com/2024/01/09/middleeast/israel-genocide-case-world-court-gaza-mime-intl/index.html",
          src: p5,
        },
        {
          text: "Arresting Palestinian children is a usual behavior by the occupation. Many of those spent years in prison without charges or sometimes fabricated ones. Israel should be held accountable to such war crimes. #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "video",
          src: v3,
        },
        {
          text: "In total disregard to South Africa’s lawsuit, Israeli occupation continues its genocidal on Gaza!  #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "image",
          link: "https://euromedmonitor.org/en/article/6087",
          src: p2,
        },
        {
          text: "Two months ago, Gaza's children held a press conference requesting a ceasefire to save them. Since then, more than 12k have been murdered by Israel. How many more should be killed for the world to even hear them? #Epstein #PMQs #OTDirecto10E #SouthAfrica #Attal #Gaza_Geniocide",
          type: "image",
          src: p4,
        },
        {
          text: "October 7th wasn't the beginning, but a wake-up call 2 expose decades of : displacement, terrorizing Palestinians, massacres that wiped villages out & other crimes to force Palastinians to leave their Homeland. #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "video",
          src: v1,
        },
        {
          text: "How can a child so young experience such terror & despair? Shouldn't children be protected,happy, & safe? Where R the various UN's entities? These kids R let down by world leaders,but they R counting on u to save them. #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "video",
          src: v4,
        },

        {
          text: "Major news agency headlines report Palestinian starvation in Gaza but omit the culprit. Israel weaponizes food, deliberately starving civilians—this should be the headline. #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "image",
          src: p1,
        },
        {
          text: "(The most moral army in the world) is attacking children on their way to school!Scenes from the arrest of two children in the occupied city of al-khalil in 2018. #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "video",
          src: v5,
        },

        {
          text: "Belgian Deputy Prime Minister says she'll propose to the government to follow South Africa's lead in its complaint against Israel in the International Court of Justice,&calls for an investigation into charges of genocide. #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "video",
          src: v2,
        },

        {
          text: "Murdered, in front of her child, who was waiving a white flag, just for being a woman living in Gaza. Any more proves needed to confirm that is an ethnic cleansing? #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "video",
          src: v6,
        },

        {
          text: "3 months in that left more then 24k killed Palastinians, including more than 10k children and all what Washington is doing to stop this brutal genocide is to 'work quietly behind the scenes'! #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
          type: "image",
          src: p3,
        },

        // {
        //   text: "Gaza; Turkish Friendship Cancer Hospital's Director, Sobhi Skaik said:(The situation is catastrophic and we have 10,000 cancer patients in shelters and streets.) The world must stop the crimes of the occupying entity &its supporters! #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
        //   type: "image",
        //   src: p2,
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
