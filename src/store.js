import { createStore } from "vuex";

import img3 from "./assets/static/66.jpeg";
import video1 from "./assets/static/video1.mp4";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import p1 from "./assets/static/p1.jpeg";
import p4 from "./assets/static/p3.jpeg";
import p5 from "./assets/static/44.jpeg";
const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "In all the laws of humanity, resistance to the occupier was an honor. The Zionist entity is trying to overturn moral standards. It wants to kill and terrorize people, and portray to the world that those who resist are terrorists.#Christmas #Trump New Year.",
          type: "video",
          src: video1,
        },
        {
          text: "14 YEAR OLD YAZEN LOST 3 LIMBS FROM ISRAELI BOMBING #Christmas #Trump New Year",
          type: "image",
          src: img3,
        },
        {
          text: "According to the UN charter #51, Israel doesn't have the right to self-defense against Palestinians as it occupies their land.#Christmas #Trump New Year",
          type: "video",
          src: v2,
        },
        {
          text: "You can't achieve peace with an apartheid antity that would do anything to steal your land, torture, murder, destruction, etc. The 2 states solution is the only clear path to peace.#Christmas #Trump New Year",
          type: "video",
          src: v1,
        },
        {
          text: "The land of Palestine was never  desert, but rather an inhabited land with villages inhabited by people and communities of Muslims, Christians, and Jews, until Zionism came and decided to carry out ethnic cleansing and take their place.#Christmas #Trump New Year",
          type: "video",
          src: v3,
        },

        {
          text: "Resistance forced the occupation to withdraw its strongest brigade, the Golani's. This limited resources & basic resistance astonished the world with its military tactics & abilities & managed to destroy the myth of a strong and very advanced army.#Christmas #Trump New Year",
          type: "image",
          src: p5,
        },
        {
          text: "Netanyahu promised freeing the hostages & resistance's elimination. 2+ months in & all he did is innocents' madsacre. Resistance forced their best brigade to withdraw. Israel is eager to have a truce, but it wants to keep its undefeatable image as well.#Christmas #Trump New Year",
          type: "image",
          src: p1,
        },
        {
          text: "إن كان لواء غولاني هو أقوى الألوية، فسحبه من المعركة يضعنا أمام احتمالين: إما أنه قوي بالفعل؛ لكن المقاومة أثبتت أنها أقوى منه ميدانيا، وإما أنه أُعطِي مكانة لا يستحقها، وهذا يعني أن بقية الألوية والفرق هشة، وسيتم سحبها قريبا. #النصر_الاتفاق #يوم_الجمعه #محمد #غزه_تستغيث.",
          type: "image",
          src: p4,
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
