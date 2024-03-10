import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
// import p3 from "./assets/static/p3.jpg";
// import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
// import v3 from "./assets/static/v3.mp4";
// import v4 from "./assets/static/v4.mp4";
// import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
import v9 from "./assets/static/v9.mp4";
import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";
// import v13 from "./assets/static/v13.mp4";
// import v14 from "./assets/static/v14.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";


const store = createStore({
  state() {
    return {
      tweets: [


    
    // 1

    {
      text: "Graphic content: Israeli military-affiliated accounts celebrate feeding dogs with the remains of Palestinians in Gaza.",
	type: "video",
      src: v1,
    },

    //2
    {
     text: "Israel openly commits & admits its crimes,films soldiers boasting about many. Despite global institutions,laws remain elusive for everyone. Efforts to prove Gazans' suffering persist,yet trials favor the perpetrator over the victim.", 
type: "video",
      src: v2,
    },

    
    //   //	3
    {
     text: "He was killed by the Israeli terrorist army while getting a bag of flour from the top of the truck in northern Gaza.", 
	type: "image",
     src: p1,
    },
    
    
    // 4
    
    {
     text: "They dehumanize Palestinians as animals,but the truth is that the occupying soldiers R the ones behaving like animals,demolishing everything they encounter! This isn't self-defense;it's a complete ethnic cleansing", 
	    type: "video",
      src: v6,
      },
    
    //5

     {
      text: "Israeli bulldozers are demolishing homes and infrastructure during the ongoing raid in Tulkarm refugee camp, West Bank.",
	     type: "video",
       src: v7,
     },

    //   //6
    {

      text:"Zionist forces arrest,humiliate,& kill the innocents then steal their organs. These citizens resist leaving their homes for 2 reasons: they have no place to go, & they oppose forced displacement in any form.",
	    type: "image",
      src: p2,
    },
    
    
    //  7
 
       {
      text: "In the West Bank town of Qabatya, Jenin: Israeli occupation forces are kidnapping a 7-year-old child.",
	       type: "video",
	       src: v8,
        },

	       // 8

    {
      text: "Settlement leaders are among the most inciters for starving and displacing the people of Gaza.",
	    type: "video",
      src: v9,
    },
    
    // //	9

    //   {
    //      text: "It is very important to follow the dialogue to refute the lies and claims of the occupation.",
	   //    type: "video",
    //        src: v10,
    //    },
    

  



	      

        
       
  
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
