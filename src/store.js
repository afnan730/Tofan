import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
import p3 from "./assets/static/p3.jpg";
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
import v10 from "./assets/static/v10.mp4";
import v11 from "./assets/static/v11.mp4";
import v12 from "./assets/static/v12.mp4";
import v13 from "./assets/static/v13.mp4";
import v14 from "./assets/static/v14.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";


const store = createStore({
  state() {
    return {
      tweets: [


    
    // 1

    {


	text: "حوار مع طفل فلسطيني فقد ذراعية جراء القصف الإسرائيلي المتواصل على قطاع غزة.",    
      type: "video",
      src: v1,
    },

    //2
    {


	    text: "US soldier speaking out against Palestine genocide and illegal occupation",
type: "video",
      src: v2,
    },

    
    //   //	3
    {
	    

	    text: "Before invading & occupying Palestine,the European Zionists considered establishing a Jewish state in East Africa. In 1903, the 'Uganda Scheme' was being mulled to carve out a Jewish country out of modern-day Kenya.",
type: "video",
     src: v3,
    },
    
    
    // 4
    
    {


	    text : "US & British media controlled by Zionist lobby,omit the reason 4 the US soldier setting himself on fire in protest against Gaza aggression from headlines. These outlets R tools of brainwashing,hindering readers from grasping the situation's gravity",
	    type: "video",
      src: v4,
      },
    
    //5

     {


	     text: "Can you imagine how terrible it is for them to strip our women naked in front of us without any respect?! A horrifying testimony from a recently released detainee about Israel's treatment of Palestinian women in detention.",
	     type: "video",
       src: v5,
     },

    //   //6
    {

	    text: "Folke Bernadotte personally saved 31,000 Jews from the Nazis. He was shot dead by Zionists after reporting on devastated Palestinian villages he saw. The murder was ordered by future Prime Minister of Israel, Yitzhak Yezernitsky.",
	    type: "video",
      src: v6,
    },
    
    
    //  7
 
       {
	       text: "It’s been weeks & people from every stripe of Israeli society are still working tirelessly to starve 1.3 million children & babies to death. To. Death.  What kind of society is this?!",
	       type: "video",
	       src: v7,
        },

	       // 8

    {


	    text: "The same people telling you Aaron Bushnell 'who burned himself' was mentally ill will tell you these guys are perfectly sane!",
	    type: "video",
      src: v8,
    },
    
    //	9

      {
	      text: "Genocide. Ethnic cleansing. Collective punishment. These are the western values Israel shares.",
	      type: "video",
           src: v9,
       },
    

    //10

    {
	    text: "During the Holocaust, international law wasn't legislated in its current form, but the Holocaust in Gaza was committed in the presence of Int'l law, & with the protection of western democratic governments, which we thought they would be the protectors of Int'l law.",
	    type: "image",
      src: v10,
    },

   
    //   //11
    {


	    text: "When will the world realize that Israel is a terrorist state?!",
	    type: "video",
      src: v11,
    },
    
    
    //  12
 
       {

	       text: "This is how Israel exploited the Holocaust and anti-Semitism.",
	       type: "video",
	       src: v12,
        },


	          //   //13
    {


	    text: "This is what Palestine looked like in 1938, before it was occupied by Israel, its people were killed, displaced, and later was called Israel.",
	    type: "video",
      src: v13,
    },
    
    
    //  14
 
       {

	       text: "A message from the descendants of Holocaust survivors.",
	       type: "video",
	       src: v14,
        },

	
	          //   //15
    {




	    text: "Israeli terrorist Eido Levi shared a photo on Instagram inside a child's bed in Khan Yunis. Did he kill the child & family before occupying the bed, or did residents evacuate fearing to be killed?",
	    type: "image",
      src: p1,
    },
    
    
    //  16
 
       {

	       text: "Trying to colonize a local population inevitably provokes violent resistance. It's recognized by international law & openly foreseen by the Zionism founders,notably Jabotinsky in his 1923 essay 'The Iron Wall'. History didn’t start Oct 7th",
	       type: "image",
	       src: p2,
        },

	      
	          //   //17
    {

	text: "Despite the assertion of being the epitome of ethical conduct, it's disconcerting to observe a regrettably juvenile demeanor from the military post-home demolitions in Gaza, particularly in handling such sensitive situations.",
      type: "image",
      src: p3,
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
