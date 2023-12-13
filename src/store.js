import { createStore } from "vuex";
import img1 from "./assets/static/1.jpg";
import img2 from "./assets/static/2.jpg";
import img3 from "./assets/static/3.jpg";
import video1 from "./assets/static/video1.mp4";
const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "Massive destruction at the UNRWA school in northern Gaza Strip named 'Palestine' after a ground invasion by the Israeli forces.",
          type: "image",
          src: img1,
        },
        {
          text: "Injuries among civilians and children after an Israeli bombardment of a residential block in Rafah, the Gaza Strip.",
          type: "image",
          src: img2,
        },
        {
          text: "Protesters in New York block all traffic on 1st Avenue as they demonstrate in front of the UN",
          type: "video",
          src: video1,
        },
        {
          text: "tweets",
          type: "image",
          src: img1,
        },
        {
          text: "tweets",
          type: "image",
          src: img2,
        },
        {
          text: "tweets",
          type: "video",
          src: video1,
        },
      ],
      arabic: {
        header: "طُـوفَـان الـحَـقِـيـقَـة",
        command: "الخاصة بك API Keys أدخل معرّفات",

        clickHere: " اضغط هنا لمشاهدة كيفية الحصول على API Keys",
        postButton: "نشر التغريدات",
        perviewButton: "عرض التغريدات",
        langButton: "English",
        tweetsHeader: "التغريدات التي سيتم نشرها",
      },
      english: {
        header: "Truth Flood",
        command: "Enter your API keys",
        howToMsg: "To know how to get your API keys",
        clickHere: "Click here to know how to get your API keys ",
        postButton: "Post tweets",
        perviewButton: "Perview tweets",
        langButton: "عربي",
        tweetsHeader: "Tweets that will be posted",
      },
      englishTest: false,
    };
  },
  getters: {
    Tweets(state) {
      return state.tweets;
    },
    Content(state) {
      return state.englishTest ? state.arabic : state.english;
    },
  },
});
export default store;
