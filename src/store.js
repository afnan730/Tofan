import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
// import p3 from "./assets/static/p3.jpg";
// import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [


    
    // 1

    {

	text: "'All the Israeli villages in the country were built above Palestinian villages' A truth said by an Israeli citizen,so after all of this,is it rational for Palestinians to live in peace & safety with the occupation?",
      type: "video",
      src: v1,
    },

    //2
    {

text: "An Israeli soldier documented Israeli occupation soldiers blowing up civilian homes in Khan Yunis while they mock a laugh, proud of their barbaric achievement!",
type: "video",
      src: v2,
    },

    
    //   //	3
    {


	    text: "This is the treatment of the occupation towards Muslims when they want to perform worship at Al-Aqsa Mosque.",
type: "video",
     src: v3,
    },
    
    
    // 4
    
    {

	    text: "What’s happening in Gaza is not war. It’s genocide. —Brazil’s President Lula da Silva",
	    type: "video",
      src: v4,
      },
    
    //5

     {

	     text: "@realRickWiles talks about what he had seen when he went to occupied Palestine in 2018! 'If we don't stop Zionism, someday we'll all be Palestinians, & if Zionism isn't stopped, the entire world will become Palestinians...'",
	     type: "video",
       src: v5,
     },

    //   //6
    {
text : "UN report just released shows Israel has kidnapped women, held women in cages, stripped them naked and released footage online, severely beat women, and raped women in the occupied West Bank.",
	    type: "video",
      src: v6,
    },
    
    
    //  7
 
       {


	       text: "Israel arrest a 5 year old Palestinian boy, over 700. Palestinian children are illegally detained every year!",
	       type: "video",
	       src: v7,
        },

	       // 8

    {

	    text: "Josep Borrell,the EU's High Representative for Foreign Affairs,known for his inconsistent stance on Israeli crimes, exposes the West & countries supporting Israel regarding war crimes & Netanyahu's plan to invade Rafah",
	    type: "video",
      src: v8,
    },
    
    //	9

      {

	text: "The one who called for the rape of non-Jewish women is the Israeli army rabbi, and the one who committed sexual assaults, according to the United Nations, is also Israel. Stop misleading people",
	      type: "image",
           src: p1,
       },
    

    //10

    {

text: "A thief is not an owner.",
	    type: "image",
      src: p2,
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
