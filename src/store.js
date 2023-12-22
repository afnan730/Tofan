import { createStore } from "vuex";
import img1 from "./assets/static/44.jpeg";

import img3 from "./assets/static/66.jpeg";
import video1 from "./assets/static/video1.mp4";
import p3 from "./assets/static/p3.jpg";
import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
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
          text: "Sahar Caldarone, a released Israeli detainee, said in an interview: 'I told myself many times that I might die here because of Israeli bombs and not because of Hamas.",
          type: "text",
        },
        {
          text: "Israeli occupation forces raids last night on the central Gaza Strip caused a massive destruction in residential buildings",
          type: "video",
          src: v2,
        },
        {
          text: "The Ministry of Health says Donia Abu Mohsen was supposed to be sent to Egypt tomorrow to get treatment there. However, an Israeli shelling on Nasser Hospital killed her two days ago. #Gaza",
          type: "video",
          src: v6,
        },
        {
          text: "Scenes from shelter camps in the south of the #Gaza Strip",
          type: "video",
          src: v5,
        },
        {
          text: "#BREAKING| Israeli forces detonate a house in the village of Aqraba in the #WestBank city of #Nablus.",
          type: "video",
          src: v1,
        },
        {
          text: "The first moments of the Israeli occupation forces bombing of a house in Rafah last night.",
          type: "video",
          src: v3,
        },
        {
          text: "The mass destruction in homes for the Zorob family in Rafah, south of the Gaza Strip, after the Israeli occupation heavily bombed the area last night.",
          type: "image",
          src: p3,
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
          "يرجى عدم مغادرة الصفحة حتى يتم النشر، قد يستغرق ذلك من دقيقة إلى دقيقتين بسبب حجم الفيدوهات ",
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
          "Please don't leave the page until you see the success message. This may take approximately 1 to 2 minutes due to media size",
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
