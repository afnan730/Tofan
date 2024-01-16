import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
// import v2 from "./assets/static/v2.mp4";

import p1 from "./assets/static/p1.jpeg";

// import p2 from "./assets/static/p2.jpeg";
// import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// import p6 from "./assets/static/p6.jpeg";
// import p5 from "./assets/static/p5.jpeg";
// import v3 from "./assets/static/v3.mp4";
// import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
import v9 from "./assets/static/v9.mp4";
import v10 from "./assets/static/v10.mp4";
import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";

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
          text: "The (most moral army)  is dealing with Gaza's people like hunting prey  or a (fun time hobby) as they are for them (human animals) and should be treated as such. Jose Iowa Roma Trump Eagles Davos  #Gaza_Geniocide",
          type: "video",
          src: v7,
        },
        {
          text: "100+ days with a death toll of 23k+,7k+ under rubble &over 70k wounded in a world claiming to protect the innocent, what's the true power of the UN? How does it differ from Ukraine where firm resolutions were imposed? Jose Iowa Roma Trump Eagles Davos #Gaza_Geniocide",
          type: "video",
          src: v8,
        },
        {
          text: "only 60 seconds reveal the details of the genocide war waged by Israel on Gaza and the heinous crimes it committed in less than 90 days. Jose Iowa Roma Trump Eagles Davos #Gaza_Geniocide",
          type: "video",
          src: v11,
        },
        {
          text: "While Israel is trying hard to manipulate the International Court and convince the world that it is the absolute victim, its soldiers are bombing a building full of innocents and dedicating this crime to their late (leaders). Jose Iowa Roma Trump Eagles Davos #Gaza_Geniocide",
          type: "video",
          src: v6,
        },
        {
          text: "What is Nakba? It's the abrupt loss of everything: home, safety, loved ones. Lucky to be alive but filled with despair, pain, grief, and memories of a people and land robbed by those once welcomed and protected. Jose Iowa Roma Trump Eagles Davos  #Gaza_Geniocide",
          type: "video",
          src: v5,
        },
        {
          text: "Despite the desperate attempts to suppress pro-Palestine voices, the world's seen many manifestations demanding an immediate ceasefire. However,leaders & decision maker turn a blind eye to the public's demands but till when? Jose Iowa Roma Trump Eagles Davos #Gaza_Geniocide",
          type: "video",
          src: v10,
        },

        {
          text: "Palestinians R being used as training tools 4 the Israeli army.Soldiers R ordered 2 invade a home & terrorize residents for hours & then simply leave.It seems funny to those soldiers but definitely terrifying for the innocents. Jose Iowa Roma Trump Eagles Davos #Gaza_Geniocide",
          type: "video",
          src: v1,
        },
        {
          text: "Resistance is never terrorism,it's the legitimate right of any nation to defend itself.Some're trying hard to demoralize it but people R no longer easily brainwashed. Our duty's to help those truth seekers & present them with facts & evidence. Jose Iowa Trump Davos #Gaza_Geniocide",
          type: "video",
          src: v9,
        },

        {
          text: "Isn't it enough of a shame for us that we live in this terrible historical era where the oppressor holds our necks to watch our children being killed and oppressed?! We must SPEAK UP to stop this unjust aggression.. to save humanity. Jose Iowa Roma Trump Eagles Davos #Gaza_Geniocide",
          type: "image",
          src: p1,
        },
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
