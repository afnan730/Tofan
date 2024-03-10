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
	  text:"BREAKING: Biden will build a port in Gaza for Israel to export the gas located on the coast of Gaza. He will claim it’s for aid. But it’s not. Its to steal, as they always do.",      
	type: "image",
      src: p1,
    },

    //2
    {
     text: "Daily life for Palestinian children under the Israeli Apartheid Occupation. It didn't start on October 7th.", 
type: "video",
      src: v10,
    },

    
    //   //	3
    {
     text: "A glimpse into apartheid Israel: soldiers abusing older Palestinian women at checkpoints likely not being allowed to go pray or visit. This is daily life at the hand of their racist occupiers. Who can tolerate this?!", 

type: "video",
     src: v1,
    },
    
    
    // 4
    
    {
      text: "(1) 'Palestine, from its north to its south, is targeted.' As Israel continues to expand its illegal occupation of Palestine, here’s a glimpse into how it seizes land & enforces a system of apartheid upon Palestinians in Huwara in southern Nablus.", 
	    type: "video",
      src: v2,
      },
    
    //5

     {
      text: "(2) 'Palestine, from its north to its south, is targeted.' As Israel continues to expand its illegal occupation of Palestine, here’s a glimpse into how it seizes land & enforces a system of apartheid upon Palestinians in Huwara in southern Nablus.",
	     type: "video",
       src: v3,
     },

    //   //6
    {

      text: "(3) 'Palestine, from its north to its south, is targeted.' As Israel continues to expand its illegal occupation of Palestine, here’s a glimpse into how it seizes land & enforces a system of apartheid upon Palestinians in Huwara in southern Nablus.",
	    type: "video",
      src: v4,
    },
    
    
    //  7
 
       {
         text: "(4) 'Palestine, from its north to its south, is targeted.' As Israel continues to expand its illegal occupation of Palestine, here’s a glimpse into how it seizes land & enforces a system of apartheid upon Palestinians in Huwara in southern Nablus.",
	       type: "video",
	       src: v5,
        },

	       // 8

    {
        text: "'The question used to be about Israel's right to exist. Now, much of the world questions if Israel deserves to exist.' Ex-US ambassador Chas Freeman condemns Israel, likening it actions to a 'mass lynching in Gaza'.",
	    type: "video",
      src: v6,
    },
    
    //	9

      {
      text: "An Israeli soldier named Liam Israel posted this montage on TikTok on 3 January and captioned it 'having fun also in the West Bank'. It includes footage of abducted Palestinians, and soldiers shooting and throwing stun grenades in a Palestinian town during nighttime.",
	      type: "video",
           src: v7,
       },
    

    //10

    {
     text: "A Palestinian woman in North Gaza bursts into tears after seeing and tasting white bread for the first time in months amid the Israeli war of starvation.", 
	    type: "video",
      src: v8,
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
