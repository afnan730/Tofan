import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";

import p1 from "./assets/static/p1.jpeg";

import p2 from "./assets/static/p2.jpeg";
import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// import p6 from "./assets/static/p6.jpeg";
// import p5 from "./assets/static/p5.jpeg";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
import v9 from "./assets/static/v9.mp4";
import v10 from "./assets/static/v10.mp4";

const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "This world calls for peace & prosperity for all show its real hypocrite face & its double standard policy at Gaza's genocide. It just turns the blind eye 2 children's cries & suffering while complicity support the oppressor! #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v5,
        },
        {
          text: "Proudly, loudly & full of confidence, she stated that she won't go back to her settlement, built on a stolen land, till all Palastinians're wiped out. Would any normal human being would dare 2 pronounce such hareful words?! #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v7,
        },
        {
          text: "By supressing 1936 revolt, Britain destroyed Palastine's leadership & defense system, which gave zionists time to set in motion their plan & plant their next moves.The Ethnic Cleansing of Palastine by Ilan Pappe #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v6,
        },
        {
          text: "Palestinians're being attacked by settlers while the occupation's soldiers turn the blind eye & some time they take rule in such aggression, which proves that Israeli occupation is never a democracy but an apartheid entity. #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v3,
        },
        {
          text: "Children in Gaza & Sudan are subject to the same horrors: killing, displacement, lack of all basic necessities. Unfortunately, the whole world is just watching, doing nothing to save them! #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "image",
          src: p2,
        },
        {
          text: "The 1936 revolt, suppressed by Britain, ended 6 months later as Arab leaders urged Palestinians to 'rely on the good intentions of Great Britain...for achieving justice.' Al-Nakba: The Palestinian catastrophe documentary. #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v9,
        },
        {
          text: "'In Palestine, there r considerable numbers of Jews who consider themselves Europeans & would prefer 2 return there as it's safer. There r others who would stay in Palestine under advantageous conditions...' - Hurley's 1943 report #SUNNEW #SmackDown Capitol #Bauern #Gaza_Genocide",
          type: "image",
          src: p3,
        },
        {
          text: "Those who were to young to know about the holocaust don't need to check history. Zionists' crimes in Gaza surpass any atrocities humans ever documented! #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v4,
        },
        {
          text: "(We'd do the same thing even 2 a 3 y.old) an Israeli soldier said after killing 13 y.old girl by 17 bullets in 2005. Israel's crimes r not recent but v been committed against the land legitime owners 4 over 75 yrs. https://www.theguardian.com/world/2005/nov/16/israel2 #SUNNEW #SmackDown #Bauern #Gaza_Genocide",
          type: "image",
          src: p1,
        },
        {
          text: "Some Israeli soldiers described the crimes they committed against Palestinians in 1948 as they were herotic & brave. Israel was never a state but an apartheid entity. #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v2,
        },

        {
          text: "This video explains it all. Don't be brainwashed by propaganda, fabrications, some untrue speech, etc. Truth is there for its seekers, so don't be fooled by some politicians or leaders who want to sell you a punch of lies. #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v1,
        },
        {
          text: "All standards of journalistic professionalism come to an end when a journalist is blatantly racist. Gaza exposes the duplicity of world standards. #SUNNEW #SmackDown Reyes Capitol #Bauern #Gaza_Genocide",
          type: "video",
          src: v10,
        },

        {
          text: "Int'l law guarantees 2 people their rights. Yet,If u r a Palestinian, u v none. However,the occupation's above the law&accountability. It committed horrible crimes in Palestine&when they tried 2 defend themselves,they r labeled terrorist! #SUNNEW #SmackDown #Bauern #Gaza_Genocide",
          type: "video",
          src: v8,
        },
        // {
        //   text: "Israeli police aggressively oppressed an anti-Zionist Jewish clergy's peaceful protest. If this is how they treat their people when they oppose their ideologies, how do you think they will treat others? #LegenJerry #SAFC Epstein Katt #GazaHolocaust",
        //   type: "video",
        //   src: v5,
        // },
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
