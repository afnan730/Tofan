import { createStore } from "vuex";
import img1 from "./assets/static/44.jpeg";

import img3 from "./assets/static/66.jpeg";
import video1 from "./assets/static/video1.mp4";
const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "Hamas treated their prisoners well. They even exchanged their goodbyes W a contentement's smiles.This is the true tolerant face of Islam.",
          type: "image",
          src: img1,
        },
        {
          text: "14 YEAR OLD YAZEN LOST 3 LIMBS FROM ISRAELI BOMBING",
          type: "image",
          src: img3,
        },
        {
          text: "Attempt to rescue a young man from under the rubble of a house bombed by the occupation in the Beshara neighborhood in Deir al-Balah, central Gaza Strip, this evening",
          type: "video",
          src: video1,
        },
        {
          text: "Hamas treated their prisoners well. They even exchanged their goodbyes W a contentement's smiles.This is the true tolerant face of Islam.",
          type: "image",
          src: img1,
        },
        {
          text: "14 YEAR OLD YAZEN LOST 3 LIMBS FROM ISRAELI BOMBING",
          type: "image",
          src: img3,
        },
        {
          text: "Attempt to rescue a young man from under the rubble of a house bombed by the occupation in the Beshara neighborhood in Deir al-Balah, central Gaza Strip, this evening",
          type: "video",
          src: video1,
        },
        {
          text: "Hamas treated their prisoners well. They even exchanged their goodbyes W a contentement's smiles.This is the true tolerant face of Islam.",
          type: "image",
          src: img1,
        },
        {
          text: "14 YEAR OLD YAZEN LOST 3 LIMBS FROM ISRAELI BOMBING",
          type: "image",
          src: img3,
        },
        {
          text: "Attempt to rescue a young man from under the rubble of a house bombed by the occupation in the Beshara neighborhood in Deir al-Balah, central Gaza Strip, this evening",
          type: "video",
          src: video1,
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
      },
      english: {
        header: "Truth Flood🔻",
        command: "Enter your API keys",
        howToMsg: "To know how to get your API keys",
        clickHere: "Click here to know how to get your API keys ",
        postButton: "Post tweets",
        perviewButton: "Perview tweets",
        langButton: "عربي",
        tweetsHeader: "Tweets that will be posted 🔻",
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
