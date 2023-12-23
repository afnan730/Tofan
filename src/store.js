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
          text: "She is quiet, yet her eyes speak volumes #Christmas #Trump New Year.",
          type: "video",
          src: video1,
        },
        {
          text: "البارحة فجّر الاحتلال محيط مسجد فلسطين في غزّة، المسجد ذاته ومحيطه الذي شهد وانطلقت منه مشهد جنازة العيّاش العظيمة، هذا حقد ممتد، والحقد وقود المعارك، ونحن أولى به منهم. إن نسيتم أذى العدوّ هلكتم فتواصوا بالحقد جيلاً فجيلا ",
          type: "image",
          src: img3,
        },
        {
          text: "Danny Neumann, a former Knesset member, advocates 4 exterminating every man, woman & child in Gaza.#Christmas #Trump New Year",
          type: "video",
          src: v2,
        },
        // {
        //   text: "You can't achieve peace with an apartheid antity that would do anything to steal your land, torture, murder, destruction, etc. The 2 states solution is the only clear path to peace.#Christmas #Trump New Year",
        //   type: "video",
        //   src: v1,
        // },
        {
          text: "The Resistance destroyed not only the occupation's advanced machinery but the mythe of a very strong army in the world.#Christmas #Trump New Year",
          type: "video",
          src: v3,
        },

        {
          text: "According 2 the Palestinian Central Bureau of Statistics, approved by the UNCA's General Assembly in 2000, more than 6.4 million Palestinian R refugees since 1948 due 2 the forced displacement by Israeli apartheid regime.#Christmas #Trump New Year",
          type: "image",
          src: p5,
        },
        // {
        //   text: "Netanyahu promised freeing the hostages & resistance's elimination. 2+ months in & all he did is innocents' madsacre. Resistance forced their best brigade to withdraw. Israel is eager to have a truce, but it wants to keep its undefeatable image as well.#Christmas #Trump New Year",
        //   type: "image",
        //   src: p1,
        // },
        // {
        //   text: "إن كان لواء غولاني هو أقوى الألوية، فسحبه من المعركة يضعنا أمام احتمالين: إما أنه قوي بالفعل؛ لكن المقاومة أثبتت أنها أقوى منه ميدانيا، وإما أنه أُعطِي مكانة لا يستحقها، وهذا يعني أن بقية الألوية والفرق هشة، وسيتم سحبها قريبا. #النصر_الاتفاق #يوم_الجمعه #محمد #غزه_تستغيث.",
        //   type: "image",
        //   src: p4,
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
