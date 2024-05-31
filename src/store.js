import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
import p3 from "./assets/static/p3.jpg";
import p4 from "./assets/static/p4.jpg";
import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpg";
// import p7 from "./assets/static/p7.jpg";
import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
// import v7 from "./assets/static/v7.mp4";
// import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";
// import v17 from "./assets/static/v17.mp4";
// import v14 from "./assets/static/v14.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        //1
        {
          text: "Israel's celebration of murdering innocent men, women, and children is beyond demonic. It's reminiscent of the actions of a serial killer, yet it's an entire nation condoning such atrocities.",
          type: "video",
          src: v1,
        },
        //2
        {
          text: "This horror, this pure evil—this is Zionism. It's their agenda for every nation, every race, every man, woman, and child outside their cult. It's time to recognize: supporting Israel = supporting genocide.",
          type: "video",
          src: v2,
        },

        //3
        {
          text: "The world must realize: Israel's terrorism won't stop until it's stopped. Bombing country after country, beheading child after child, they'll persist until the world stops them. #StopIsraelTerrorism",
          type: "video",
          src: v3,
        },

        //4
        {
          text: "Palestinian child in Rafah targeted by Israeli drones. Zionists won't stop this repetitive bloody expansionism & targeting children until the world makes significant actions to stop them",
          type: "image",
          src: p1,
        },

        // 5
        {
          text: "Haaretz reports that Israel has kidnapped nearly 4000 citizens from Gaza since the start of the offensive on Gaza, only 1500 of whom have been freed while 2000 have been arrested.",
          type: "image",
          src: p2,
        },

        // 6
        {
          text: "https://twitter.com/thetufan07/status/1795191366365905257?t=r7nEIEckcA6kGdpaILulXg&s=19 ",
          type: "text",
        },

        // 7
        {
          text: "Footage dating back to October 9, 2023, depicts the barbaric Israeli bombardment of civilian homes in northern Gaza, where some buildings still harbor thousands of bodies trapped under the rubble to this day",
          type: "video",
          src: v4,
        },

        //8
        {
          text: "Israeli occupation snipers shot dead Palestinian civilians in Jabalia refugee camp, northern Gaza.",
          type: "video",
          src: v5,
        },

        //9
        {
          text: "Every child, every nation, every race is at risk if we don't resist. This is the start of a global catastrophe",
          type: "video",
          src: v6,
        },

        //10
        {
          text: "Important and necessary to know: - Rafah doesn't have hospitals,emergency services, & even facilities for injuries. - Rafah doesn't have morgue refrigeration or intensive care units. - In Rafah, anyone who gets infected now doesn't survive.",
          type: "image",
          src: p3,
        },

        //11
        {
          text: "https://twitter.com/fedaaadeen1/status/1795485186299244636?t=RnKA6EwxBvzWA9XLgXzc3g&s=19  ",
          type: "text",
        },

        //12
        {
          text: "United States support Israel to behead children in Gaza",
          type: "text",
          src: p4,
        },

        //13
        {
          text: "Mass exodus of a large number of citizens from areas that the occupation claimed were safe in Rafah, and despite that, it launched dozens of raids and committed horrific massacres, defying the international justice’s decision to stop its military operation in Rafah.",
          type: "text",
          src: p5,
        },
      ],
      arabic: {
        header: "🔻طُـوفَـان الـحَـقِـيـقَـة",
        command: "الخاصة بك API Keys أدخل معرّفات",
        contact: "تابعونا على",
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
        contact: "Follow us on",
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
