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
// import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "Alan Dershowitz, a Jewish lawyer defending Israel against South Africa at the International Criminal Court, asserts Jewish power, wealth, media control,& the necessity of achieving peace only through force. #uksnow Coretta #GoldenGlobes #OTDirecto8E #Bauernproteste #Gaza_Genocide",
          type: "video",
          src: v2,
        },

        {
          text: "What is Nakba? When had been planning it? Who is the planner? Brief historical account of Nakba's events. #uksnow Coretta #GoldenGlobes #OTDirecto8E #Bauernproteste #Gaza_Genocide",
          type: "video",
          src: v3,
        },
        {
          text: "'Homeland is so precious, I can't forget any inch or piece of it,'Elderly remembered The Nakba and how they were forced to flee their villages. #uksnow Coretta #GoldenGlobes #OTDirecto8E #Bauernproteste #Gaza_Genocide",
          type: "video",
          src: v1,
        },
        {
          text: "According to a UN's official, while 130k suffer from hunger all over the world, half a million are starving in Gaza alone!! There is a real human catastrophe! #uksnow Coretta #GoldenGlobes #OTDirecto8E #Bauernproteste #Gaza_Genocide",
          type: "video",
          src: v4,
        },
        {
          text: "Happy with their achievement in burning food stores! This is Israel's true face, whose people's proud of everything that humanity considers shameful. #uksnow Coretta #GoldenGlobes #OTDirecto8E #Bauernproteste #Gaza_Genocide",
          type: "video",
          src: v5,
        },
        {
          text: "It's important 2 mention that the situation in Palastine resulted of decades of oppression. Finally, resistance exposed Israel's brutal aggression against innocents as well as the hypocrisy of a world who claims justice&equality. #uksnow #GoldenGlobes #OTDirecto8E #Bauernproteste",
          type: "video",
          src: v6,
        },
        {
          text: "While Isreal clearly behaves as an apartheid regime that has no regard to any international laws, West led by Washington continues its support while turning a blind eye to all its war crimes & atrocities. #uksnow Coretta #GoldenGlobes #OTDirecto8E #Bauernproteste #Gaza_Genocide",
          type: "video",
          src: v7,
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
