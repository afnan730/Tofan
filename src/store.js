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

      text: "This is one of the biggest crimes in the history of mankind euphorically caught on camera. They sent aid trucks to lure out the starving and then opened fire with machine guns and tanks while filming and making fun of it! What kind of society is this?!",

	type: "video",
      src: v1,
    },

    //2
    {


      text: "When principles & morality get lost, it’s easy for a person to commit even the worst crimes. As the Israeli military play with soccerballs, Palestinian children who should be carefree, are starving to death! What a sick world we live in?!",
type: "video",
      src: v2,
    },

    
    //   //	3
    {
	    

     text: "A YouTube channel called 'שמנמנים ונהנים' or 'Fatties Having Fun' posted videos showing Israeli soldiers starting fires inside Palestinian homes. Justifying such actions only fuel hatred & perpetuate cycle of violence",
type: "video",
     src: v3,
    },
    
    
    // 4
    
    {


      text: "An Israeli soldier from the Givati brigade shared a threatening message to Gazans, calling them cheap,homeless, vowing to make their lives miserable,& wishing to burn them alive,causing suffering  & death.",
	    type: "video",
      src: v4,
      },
    
    //5

     {


      text: "كيف عرض الإعلام الغربي خبر حرق الجندي لنفسه رفضا للعدوان؟ فقط  'جندي أمريكي أحرق نفسه..' كثير  من القراء لن يكلف نفسه أن يقرأ التفاصيل، ولن تهيج مشاعره ضد الكيان المجرم بهكذا عنوان.   إنها وسائل تضليل وغسيل أدمغة، لا وسائل 'إعلام'!",
	     type: "video",
       src: v6,
     },

    //   //6
    {

      text: "Horrible transformation! The toll of deliberate starvation is devastating for innocent lives. Yazan Al-Kafarna,suffering from poor health conditions,is at risk of death at any moment due to the absence of food.",
	    type: "video",
      src: v7,
    },
    
    
    //  7
 
       {
         text:  "This soldier, in 'The Most Moral Army in the World,'  celebrated his wife's birthday by blowing up a whole & crowded neighborhood!",
	       type: "video",
	       src: v8,
        },

	       // 8

    {


        text: "Isreali soldiers don't just torture & humiliate elderly people, they also steal their money. No wonder they do so if they're stealing their own land!",
	    type: "video",
      src: v9,
    },
    
    //	9

      {
      text: "Western standards of heroism are those that condone their actions of murder and genocide, while any act that exposes them is ignored, and they strive to conceal it.",
	      type: "image",
           src: p1,
       },
    

    //10

    {
      text: "There is no safe inch in Gaza. All government and health sectors, even the desert, are considered threatening and dangerous areas for those who seek refuge in them, as occupation missiles track every gathering and tent.",
	    type: "video",
      src: v10,
    },

   
    //   //11
    {


     text: "In 1944 Näzis starved Jëws to death. In 2024 Ziønists starve Palestinians to death.  How you act now is how you would have acted then.",
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
