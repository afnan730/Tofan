import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
import p3 from "./assets/static/p3.jpg";
// import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
// import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
// import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
import v9 from "./assets/static/v9.mp4";
import v10 from "./assets/static/v10.mp4";
import v11 from "./assets/static/v11.mp4";
import v12 from "./assets/static/v12.mp4";
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
      text: "How can anyone find humor in such a tragic situation? Israeli soldiers sharing videos for blowing up an entire neighborhood in Khan Younis & joking about this, showing a complete disregard for the innocent lives.",
	type: "video",
      src: v1,
    },

    //2
    {


      text: "The Irish actor and UNICEF Goodwill Ambassador, Liam Neeson, called for an immediate humanitarian ceasefire in Gaza, emphasizing five urgent needs for the children in the region.",
type: "video",
      src: v3,
    },

    
    //   //	3
    {
	    

     text: "Anyone familiar with apartheid and has lived among those who suffered from it, then knows what is called 'Israel,' would not have the slightest doubt or hesitation in recognizing them as practitioners of apartheid.", 
type: "video",
     src: v4,
    },
    
    
    // 4
    
    {
      text: "Recent history shows a deliberate effort to erase Palestine, from past crises like the Nakba to current events in Gaza and even cultural erasure, such as Canada removing Palestine from its recognized nations.", 
	    type: "video",
      src: v6,
      },
    
    //5

     {
      text: "The Israeli occupation army films a shocking clip in which two men are targeted: one riding his bicycle and the other carrying a bag of flour. They depict the bicycle as a weapon to mask their direct and terrifying bombing of civilians.",
	     type: "video",
       src: v7,
     },

    //   //6
    {

      text: "The Israeli apartheid regime persists in killings across all of Palestine. The recent incident occurred in Qalandia refugee camp near Jerusalem, where a Palestinian child named Mustafa was brutally executed by the occupation forces in front of his family",
	    type: "video",
      src: v8,
    },
    
    
    //  7
 
       {
         text: "Israeli Ynet reports that Israel's military kidnapped 1200 people from Khan Yunis, 85 of whom were kidnapped while evacuating Hamad City according to Israeli orders, and distributed food as 'Ramadan gifts' to some citizens.",
	       type: "image",
	       src: p1,
        },

	       // 8

    {


        text: "'There is no life after you, O light of my eye. You were dearer than everything in the world for me.'  A letter was found on the grave of a man in Gaza, written by his daughter.",
	    type: "image",
      src: p2,
    },
    
    //	9

      {
      text: "'As part of the genocide in Gaza, Israel killed 13,430 children while there are 7000 missing persons, 70% of whom are women and children'. ",
	      type: "image",
           src: p3,
       },
    

    //10

    {
      text: "The silence of the world in the face of Israel's massacre and brutality continues as Israel persists in its atrocities by bombing the Jabalia refugee camp for displaced people in the northern Gaza Strip, leaving behind a large number of martyrs and casualties.",
	    type: "video",
      src: v9,
    },

   
    //   //11
    {


     text: "It's just the IDF practicing their usual moral stuff.",
	    type: "video",
      src: v10,
    },
    
       
    //   //12
    {


      text: "Israeli settlers storm Al-Aqsa Mosque compounds in occupied Jerusalem under the protection of Israeli forces, while Palestinian Muslims face stringent restrictions on entry to the mosque, embodying the apartheid practiced by Israel.",
	    type: "video",
      src: v11,
    },
       
    //   //13
    {
     text: "Leaked recording from Israeli detainees confirms they pleaded for help from the Israeli army but were killed instead, supporting earlier claims by the Gaza resistance that Israel's military has been responsible for the deaths of multiple detainees",
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
