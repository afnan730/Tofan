import { createStore } from "vuex";

 // import p1 from "./assets/static/p1.jpg";
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

        text: "المساعدات لم تصل لغزة، ودعم اليهود مستمر من قِبَل الحكام الخونة ومن فوقهم أمريكا، والمحكمة الدولية لم تنصف المسلمين. أي تحرك حقيقي الآن لابد أن يستند إلى الأمة الإسلامية بكل قواها المختلفة https://twitter.com/ARezeg/status/1757863873347015108?t=YGdYLA_VKhYAID7EcaqAGQ&s=19 ",
        type: "video",
        src: v1,
      },
    
    // 2
    
     {


       text: "The situation in #Rafah is extremely dire,  with over three quarters of the total population of the #Gaza Strip currently living in a place made to house just a few hundred thousands! https://twitter.com/thetufan07/status/1758165304075596070?t=4N1kCJaQl4V9O0_TjcBvgw&s=19 ",
       type: "text",
       // path: ['p1.jpg'],
      },
    
  
      
          //3
      
       {

         text: "UN expert: Israel is an occupying power and therefore it has no right to defend itself.",
         type: "video",
         src: v2,
      },
      
    
       //4
      
       {

         text: "Israeli army is an army made up of sadistic soldiers trained in dirty practices and immoral behaviour.",
         type: "video",
         src: v3,
      },
      
    

       //5
      
       {

        text: "(3) Why is Israel racist and full of hate?  Israel is one of the most racist country in the world.", 
        type: "video",
        src: v4,
      },
      
    
    
          //6
      
       {
  

        text: "(2) Why is Israel racist and full of hate?",
        type: "video",
        src: v5,
      },
      
     
      //7
      {
        
      text: "(1) Why is Israel racist and full of hate?",
      type: "video",
      src: v6,
      },
    
      
          //8
      
       {

        text: "No one hates like a zionist...",
        type: "video",
        src: v7,
      },
    
      
        //9
      
       {

        text: "The Holocaust occurred before the current structure of international law,but Gaza Holocaust is happening in the presence of these laws with full support of Western democracies who we expected to uphold these laws! https://twitter.com/thetufan07/status/1758165802434396441?t=T4JAUgD5Ck4hl4KCIH26LA&s=19 ",
        type: "text",
       // path: ['v7.mp4'],
      },
     
     
           //10
      
       {

        text: " 'All the Israeli villages in the country were built above Palestinian villages' A truth said by an Israeli citizen,so after all of this, is it rational for Palestinians to live in peace & safety with the occupation?",
        type: "video",
        src: v8,
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
