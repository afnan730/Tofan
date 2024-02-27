import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
// import p2 from "./assets/static/p2.jpg";
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
import v9 from "./assets/static/v9.mp4";
// import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";

const store = createStore({
  state() {
    return {
      tweets: [


    
    // 1

    {

	text: "They said 'Be cautious about information from Gaza due to Hamas', yet have faith in everything from Israel, despite some false claims and unfounded accusations lacking credibility or honesty.",
      type: "video",
      src: v1,
    },

    //2
    {

text: "Israel keeps making false claims that Hamas uses civilians as human shields, simultaneously taking and torturing them. Not only that, but they go further by using civilians as human shields!",
type: "video",
      src: v2,
    },

    
    //   //	3
    {
	    
 text: "After Israel presented its map by erasing Palestine, Canada is currently removing Palestine from the list of countries! Following Israel's genocidal actions in Gaza, Canada is engaging in cultural eradication.",
type: "video",
     src: v3,
    },
    
    
    // 4
    
    {
	    text: "Video Documents Part of the Destruction of the Indonesian Hospital in Northern Gaza Strip as a Result of Israeli Airstrikes",
	    type: "video",
      src: v4,
      },
    
    //5

     {

	     text: "هل من حق الفلسطينين الدفاع عن أنفسهم كما الأوكرانين؟، وزير خارجية النمسا يجيب: "هناك فرق"!",
	     type: "video",
       src: v5,
     },

    //   //6
    {
text : "Canadian researcher Karen DeVito warns:'This isn't just a war;it's a systematic genocide against a population. If we don't act now,there won't be a Gaza. The ongoing genocide,spanning a century,saw escalation and justification on October 7.'",
	    type: "video",
      src: v6,
    },
    
    
    //  7
 
       {


	       text: "Balfour Declaration's concealed history: Issued on Nov.2, 1917, by British foreign secretary to Zionist leader Walter Rothschild, promising establishing national homes 4 the Jewish in Palestine",
	       type: "video",
	       src: v7,
        },

	       // 8

    {

	    text: "This is the daily situation inside Shifa Medical Complex: no electricity and dozens of injuries.",
	    type: "video",
      src: v8,
    },
    
    //	9

      {

	text: "People in Gaza aren't the only ones dealing with famine; even animals in Gaza are experiencing hunger.",
	      type: "video",
           src: v9,
       },
    

    //10

    {

text: "دعوة للإضراب الشامل في جميع الدول الخميس 29 فبراي. الهدف: إيقاف إطلاق النار - إدخال المساعدات - وقف المجاعة - كسر الحصار.",
	    type: "image",
      src: p1,
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
