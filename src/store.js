import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";

import p1 from "./assets/static/p1.jpeg";

import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p4 from "./assets/static/p4.jpeg";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
import v9 from "./assets/static/v9.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "Happy New Year from Gaza, where at least 11,800 children have been killed in the ongoing Israel indiscriminate attacks! Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "image",
          src: p2,
        },
        {
          text: "While people around the world are busy buying & decorating their Christmas trees, Israeli occupation made a special & free delivery of one made by American weapon & delivered by Israeli's war machinery. Happy 2024 #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "image",
          src: p3,
        },
        {
          text: "يد واحدة لا تصفق؛ لكنها تخوض معركة، وتسحق جيشا، وتصنع بطولة عجزت عن صناعتها أمة. قدم واحدة لا تستطيع السير؛ لكنها تستطيع الوقوف في أرض الرباط تدافع عن ثغر أمة. الإقدام أو التراجع من داخل المرء، ولا علاقة له بفقدان أو تعطل عضو. #السنه_الجديده #HappyNewYear #الشهيد_الساجد آرسنال",
          type: "video",
          src: v4,
        },
        {
          text: "As the Gaza genocide persists,our  new year won't be happy while countless innocents're being massacred by Israeli occupation. Instead of a countdown for a happy new year, let's countdown for a permanent #CEASEFIRE. Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "video",
          src: v6,
        },
        {
          text: "With burns, suffering and fear caused by the heinous acts of Israeli occupation, this is how the children of Gaza will be starting their New Year. Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "video",
          src: v5,
        },
        {
          text: "The creation of a “buffer state” that would be hostile to it's neighbours and friendly to Europe and it's interests.\n- Al-Nakba: The Palestinian catastrophe documentry. Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "video",
          src: v2,
        },
        {
          text: "While we r busy preparing to celebrate the new year & share our dreams, hopes, parties with friends & relatives, we should take a moment 2 imagine how Gazan d receive it after 87 days of continuous bombardment. Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "video",
          src: v1,
        },
        {
          text: "Isreali soldiers are mocking, scorning and bombing a Gazan's masjid with an open disregard of any religion's beliefs and holly places. Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "video",
          src: v7,
        },

        {
          text: "More than 800 prisoners, in the Israeli occupation' prisons, suffer from illness and deliberate neglect in & 250 of them have chronic diseases. Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "image",
          src: p1,
        },
        {
          text: "To revenge its army defeats by the Resistance, Israeli occupation tortures the defenseless civilians in open disregard to all morals, principles & international laws. Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "video",
          src: v3,
        },
        {
          text: "Isrealis've been carrieng out war crimes against Palestinians 4 decades: humiliation, torture, forced replacement&killing. Such practices r what lead 2 Oct 7th which's a reaction of decades of oppression&injustices. Happy 2024 Happy New Year #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "video",
          src: v8,
        },
        {
          text: "Gazans have no food stored as Isreal used to allow food's entry  matching only the number of carolies Gazans need to survive. Civilians have to cook grass to eat & the starving mother're so weak to brestfeed their babies! Happy 2024 #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "image",
          src: p4,
        },

        {
          text: "As the world celebrates the Happy New Year, thousands of children in Gaza are being killed. The genocide on Gaza's persisted for 87 days, and those who survive live in panic & displacement, enduring Israeli bombings in the open. Happy 2024 #AEWWorldsEnd #Lions #FULARS Feliz Año",
          type: "video",
          src: v9,
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
