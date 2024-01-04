import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";

import p1 from "./assets/static/p1.jpeg";

import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p4 from "./assets/static/p4.jpeg";
// import p6 from "./assets/static/p6.jpeg";
import p5 from "./assets/static/p5.jpeg";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "الذين يرتكبون جرائم الحرب يعتقدون أنهم آمنون طالما أنهم يملكون القوة والحماية،لكن أحداث التاريخ تخبرنا بغير ذلك،والأمثلة القريبة والبعيدة من حولنا لا نهاية لها، فالقوة لا تدوم لأحد،والحماية غطاء كاذب مؤقت سينقشع،وعدالة الخالق غلّابة وعده الحق ولو بعد حين. #غزه_تباد #صالح_العاروري",
          type: "image",
          src: p5,
        },
        {
          text: "Palestinians welcomed the Jews who fleed the Holocaust and provided them with shelter and safety. They never thought that the same people they saved would be the ones who took their land, safety and lives. #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "video",
          src: v1,
        },
        {
          text: "Important video analysis by Lord Bebo! Many war crimes in one video, they are the ones who published it. Can we imagine the scale of atrocities committed that were not published because they thought it might affect their image?! #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "video",
          src: v3,
        },
        {
          text: "This's Jerusalem,where no Hamas's there! Israeli forces raid to carry out illegal demolition of Palestinian homes(illegal by Int'l law&by Israeli courts) We live under an ugly fascist regime intent on ethnically cleansing all of Palestine. #LegenJerry #SAFC Epstein #GazaHolocaust",
          type: "image",
          src: p1,
        },
        {
          text: "The 95-year-old reservist Ezra Yachin incited to wipe out ALL (Arabs) whom he called (animals), similar to what Nazis called jews (Human Rats) to dehuminze them and justify killing them! #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "video",
          src: v2,
        },
        {
          text: "Crimes against international laws are committed in Sudan and the world is silent. What's the point of the UN & keeping organizations if it only exist to preserve the benifets of strongest countries? #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "video",
          src: v8,
        },
        {
          text: "Gaza; Turkish Friendship Cancer Hospital's Director, Sobhi Skaik said:(The situation is catastrophic and we have 10,000 cancer patients in shelters and streets.) The world must stop the crimes of the occupying entity &its supporters! #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "image",
          src: p4,
        },
        {
          text: "How to turn innocent jewish children to monsters: make them believe in a (lie) till it becomes their truth, like that to prevent another Holocaust you've 2 wipe Palestinians out,hence, the actual opressions that started 75+ years ago. #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "video",
          src: v7,
        },
        {
          text: "Pro-Palestine Jews explain why they support Palestine? #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "video",
          src: v4,
        },
        {
          text: "According to UNRWA:“There're 1.4 million refugee in 155 Agency facilities in the strip,while 400,000 people living near shelters.”It's the responsibility of entire world to grant them their rights, and stand against Israel. #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "image",
          src: p3,
        },
        {
          text: "How is it possible 4 those under attacks &lack all life necessities 2 fabricate horrible scenes about thier genocide. Washington would do anything 2 cover the truth & 2 punish who exposed it. That's the real face of Western democracy! #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "video",
          src: v6,
        },
        {
          text: "Israeli police aggressively oppressed an anti-Zionist Jewish clergy's peaceful protest. If this is how they treat their people when they oppose their ideologies, how do you think they will treat others? #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "video",
          src: v5,
        },
        {
          text: "Gaza; Turkish Friendship Cancer Hospital's Director, Sobhi Skaik said:(The situation is catastrophic and we have 10,000 cancer patients in shelters and streets.) The world must stop the crimes of the occupying entity &its supporters! #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
          type: "image",
          src: p2,
        },
        // {
        //   text: "2 allegations emerged in the last 24hrs about Gaza's children being kidnapped by Israel. Rushdi, from Gaza, was detained with his wife & 2 children(a 4y.old & a 6month old), however, Rushdi is back 2 Gaza without his children! #WorldJuniors #OTDirecto2E Epstein MATZ #Gaza_Genocide",
        //   type: "video",
        //   src: v5,
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
