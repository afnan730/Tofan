import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";

import p1 from "./assets/static/p1.jpeg";

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
import v9 from "./assets/static/v9.mp4";
import v10 from "./assets/static/v10.mp4";

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
          text: "What South Africa is doing is brave and humane. It is the only country that stood against a powerful & ruthless collision to save Gaza. #Yemen #South_Africa #Gaza_Genocide ariana Radio 1",
          type: "image",
          src: p1,
        },
        {
          text: "The genicide's case put an end to Israel's arrogance. Same court that was established to support Holocaust's victims's here to judge those who exploit unfortunate event happened to them to commit,4 decades,unimaginable war crimes #Yemen #South_Africa #Gaza_Genocide ariana Radio 1",
          type: "video",
          src: v10,
        },
        {
          text: "A testimony to History, a Norwegian doctor, who worked in Gaza for nearly 16 years speaks about the failure of the international community and its racism practiced towards the crimes of the occupation in Gaza. #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide ariana Radio 1",
          type: "video",
          src: v1,
        },
        {
          text: "@CIJ_ICJ Israeli army ignores South Africa's lawsuit, continues Gaza genocide, using starvation as a weapon, limiting aid entry to the south, and blocking aid to the north for weeks. #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide ariana Radio 1",
          type: "video",
          src: v9,
        },
        {
          text: "Killing journalists was never a collateral damage but well planned. Occupation fears the truth and its atrocities and will eliminate whomever is trying to expose it.  #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide ariana Radio 1",
          type: "video",
          src: v3,
        },
        {
          text: "The young Americans are truth seekers and don't follow a set of pre-existing ideas or propaganda. They are the real power of change and can't be manipulated nor brainwashed. #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide ariana Radio 1e",
          type: "video",
          src: v2,
        },
        {
          text: "Tantura, an Israeli documentary film, interviewed Israeli veterans who witnessed massacres against Palestinians. This film exposed the horrifying truth about one of the crimes that Israel had been trying to keep hidden since 1948. #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide",
          type: "video",
          src: v7,
        },

        {
          text: "100+ journalists killed & their families were bombed because they exposed the truth about Gaza's situation. However, when asked, the Whitehouse spokeman said that there's no evidence that Israel targets journalists! #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide ariana Radio 1",
          type: "video",
          src: v4,
        },
        {
          text: "A Zionist is calling South Americans as: Nation of monkeys! This is how they saw all the other nations other than Zionists. #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide ariana Radio 1",
          type: "video",
          src: v8,
        },

        {
          text: "A logical question from a Jewish man: How would u expect peace with someone u tortured to rob his home? Land should be returned to its rightful owners if the world's serious about establishing peace & stability. #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide ariana Radio 1",
          type: "video",
          src: v6,
        },

        {
          text: "'I support forced transfer; find it morally acceptable.' - David Ben-Gurion, June 1938. Part of a recurring pattern in Zionist history used by their leaders, revealing consistent goals. #Yemen #South_Africa #OTDirecto12E #Gaza_Genocide ariana Radio ",
          type: "video",
          src: v5,
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
