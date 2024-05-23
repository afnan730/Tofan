import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
// import p2 from "./assets/static/p2.jpg";
// // import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// // import p5 from "./assets/static/p5.jpeg";
// import p6 from "./assets/static/p6.jpg";
// import p7 from "./assets/static/p7.jpg";
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
import v11 from "./assets/static/v11.mp4";
import v12 from "./assets/static/v12.mp4";
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
       text:"This 87-second viral video captures Gaza's story, portraying its reality with deep humanity, stirring emotions everywhere. It shows Gaza's flesh, blood, pain, hope, patience, and sorrow. Salute to the storyteller.",
          type: "video",
          src: v1,
        },

        //2
        {
      text:"What distinguishes the 76th anniversary of the Nakba today is that the entire world knows about it and sees Israel as a racist, ethnic entity and a colonial apartheid state that practices genocide!",
          type: "video",
          src: v2,
        },

        //3
        {
      text: "What is the appropriate response to 75 years of ethnic cleansing? ",
          type: "video",
          src: v3,
        },
        

        // 4
        {
      text: "The attack by hamas in 7 oct  is a result of accumulations of occupation and oppression by the  Israeli government. Let's just take a look into the prisoners detained by Israel" ,
          type: "video",
          src: v4,
        },

        //5
        {
      text:"The  israeli occupation bulldozer destroys Palestinian cars during the raid on Jenin in northern  WestBank. #GazaWar",
          type: "video",
          src: v5,
        },

        //6
        {
      text: "In Gaza, 37 million tons of rubble tell a harrowing tale of destruction. This isn't just a cleanup job; it's a reminder of unspeakable evil & crimes etched in history's darkest corners. #ContinuousGenocide",
          type: "image",
          src: p1,
        },

        //7
        {
      text: "Shocking satellite images reveal the destruction in eastern Rafah due to the ongoing Israeli invasion. ",
          type: "video",
          src: v6,
        },

        //8
        {
      text:"The targets of the occupation's airstrikes on Gaza ",
          type: "video",
          src: v7,
        },

        // 9
        {
      text: "Biden continues to manipulate and deny the genocide in Gaza, and there is no enforcement of international court decisions, which the world has realized are only applied when Biden desires and others with him",
          type: "video",
          src: v8,
        },

           //10
        {
      text: "Satellite images show massive destruction in Jabalia Camp, Blocks 2, 3, 4, and 5, Sika, Civil Administration, Riyadh Al-Salehin, the market, and schools. ",
          type: "video",
          src: v9,
        },

        //11
        {
      text:"They manipulate the law, and they are the legislators. Legislation and holding everyone accountable is their monopoly but no one’s business to hold them accountable! Because what they do is always right! This is how they used to see themselves! " ,
          type: "video",
          src: v10,
        },

        //12
        {
      text: "An Israeli soldier shared a video on his Instagram account showing him burning the Quran in Gaza Strip.",
          type: "video",
          src: v11,
        },

        // 13
        {
      text: "https://twitter.com/angeloinchina/status/1792922910748807495?s=19  ",
          type: "text",
    
        },

        
        //14
        {
      text:"Join me in listening to @omarsuleiman504 as he describes the heart-wrenching history of modern-day Palestine, tracing back to the Nakba of 1948. https://youtu.be/_eI7IDXC8Es?si=tjEI21-Yf6y4OVVR  ",
          type: "text",
         
        },

        // 15
        {
      text: "ISRAEL IS DESTROYING HOMES IN BETHLEHEM. Netanyahu has ordered the demolition of +3,500 Palestinian homes that will be used for settlements. Bethlehem is a Palestinian town south of Jerusalem in the West Bank",
          type: "video",
          src: v12,
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
