import { createStore } from "vuex";


// import p1 from "./assets/static/p1.jpg";

// import p2 from "./assets/static/p2.jpeg";
// import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// import p6 from "./assets/static/p6.jpeg";
// import p5 from "./assets/static/p5.jpeg";

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

const store = createStore({
  state() {
    return {
      tweets: [
        // {
        //   text: "South Africa filed a genocide case against Israel in the ICJ in reference to the latest continuous attacks on Gaza. Thanks to this great nation that stands for what's right. What about the others? #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
        //   type: "image",
        //   link: "https://www.cnn.com/2024/01/09/middleeast/israel-genocide-case-world-court-gaza-mime-intl/index.html",
        //   src: p5,
        // },

   //1
    {

      text: "What does 15k demolition orders in Jerusalem alone reveal?It exposes Israel's clear intent  to get rid of all Palestinians by all means possible. If this isn't a colonization & ethnic cleansing,what else could it be?  #Gaza_Genocide Arsenal Martinelli Palworld Palace Saka #MINU",
      type: "video",
      src: v1,
    },

    //2
    {

      text: "Israeli forces R continuing to commit massacres in Gaza, they executed an elderly man in front of his family.The occupation continues with such atrocities with total support from the world's leaders. #Gaza_Genocide Arsenal Martinelli Palworld Palace Saka #MINU",
      type: "video",
      src: v2,
    },
	
    //3
    {

      text: "Gazans endure 100+ days of horrors – crimes,destruction,starvation,& loss. Continuous war crimes persist while major world players & UN organizations simply watch. R Gazans abandoned to be brutally wiped out by Israel #Gaza_Genocide Arsenal Martinelli Palworld Palace Saka #MINU",
      type: "video",
      src: v3,
    },
    
    //4
    {

      text: "Understanding the Nakba is by exploring the ongoing struggles against illegal land seizures. Moreover, Israeli apartheid's regime practices expose the enduring oppression on Palestinians #Gaza_Genocide Arsenal Martinelli Palworld Palace Saka #MINU",
      type: "video",
      src: v4,
    },
    
    //5
    {


      text: "Israeli students endorse violence towards Arabs,envisioning harm & enslavement 4 survivors.Concerns arise about their future actions as potential soldiers,revealing a lack of emphasis on tolerance& diversity in their education #Gaza_Genocide Arsenal Martinelli Palworld Palace",
      type: "video",
      src: v5,
    },

   

    //6
    {

      text: "Zionists instill (Traumatization and Revenge) in Israelis through education and media,portraying Arabs as (New Nazis) dehumanizing Palestinians, and promoting genocide as the solution to prevent a (New Holocaust.)  #Trump #Davos #Pakistan #Argentina Metro  #GazaGenocide",
      type: "video",
      src: v6,
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
