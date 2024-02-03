import { createStore } from "vuex";

// import p1 from "./assets/static/p1.jpg";
// import p2 from "./assets/static/p2.jpg";
// import p3 from "./assets/static/p3.jpg";
// import p4 from "./assets/static/p4.jpg";
// import p6 from "./assets/static/p6.jpeg";
// import p5 from "./assets/static/p5.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
import v9 from "./assets/static/v9.mp4";
import v10 from "./assets/static/v10.mp4";
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
  
        text: "Isreali crimes exhibit similarities to the actions of Nazis, witnessed  by individuals & organizations for decades. The continued lack of accountability for those responsible perpetuates the persistence of these crimes.",
        type: "video",
        src: v1,
      },
    
      //2
      {
  
        text: "If this scene was in Ukraine, NATO would surely act in a different way. However, the hypocrisy & double-standards r currently running the world. But by the will of people, this will come to an end soon.",
        type: "video",
        src: v2,
      },
      
      
          //3
      
       {

       
         text: "Aid to Palestine failed to tackle the core issue– settler colonialism. It perpetuated the problem & made the occupation cost-free for Israel. It has become oppression subsidized by the international community.",
         type: "video",
         src: v3,
      },
      
     
      //4
      {
 
        text: "Colonialism never ended, it just takes on a different form.",
        type: "video",
        src: v4,
      },
    
      //5
      {
 

        text: "Internationally restricted white phosphorus has been used on civilians in Palestine by the Israeli occupation army. With life-lasting, lethal effects, the use of this chemical in combat is still not considered a war crime!!",
        type: "video",
        src: v5,
      },
      
          //6
      
       {
  
        text: "Zionist soldiers brag about killing Palestinian children! The motivation to kill innocent children is nothing but sick, cruel & abnormal souls!", 
        type: "video",
        src: v6,
      },
      
     
      //7
      {
  
      text: "Tyrants consistently exhibit the same arrogant actions & words, refusing to learn from history. Nevertheless, the light will prevail over the darkness cast by Netanyahu & all his accomplices.",  
      type: "video",
      src: v7,
      },
    
      
          //8
      
       {
        text: "Despite the contravention of the international laws for decades, what was the response of the western world of what's happening in Gaza?!", 
        type: "video",
        src: v8,
      },
      
        //9
      
       {

        text: "رسالة إلى نشامى الأردن وشعبه الأصيل: مهمتكم اليوم قطع الإمدادات عن العدو.", 
        type: "video",
        src: v9,
      },
     
      //10
      {
        text: "The new media, politics & decision maker's diseases 'the double standards' become contagious.Some social media platforms adopt Israeli propaganda & defend it. Freedom of expression turns out to be a tool used only selectively.",
        type: "video",
        src: v10,
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
