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
        // {
        //   text: "South Africa filed a genocide case against Israel in the ICJ in reference to the latest continuous attacks on Gaza. Thanks to this great nation that stands for what's right. What about the others? #Epstein #PMQs $AGN #SouthAfrica #Attal #Gaza_Geniocide",
        //   type: "image",
        //   link: "https://www.cnn.com/2024/01/09/middleeast/israel-genocide-case-world-court-gaza-mime-intl/index.html",
        //   src: p5,
        // },


      //1
     
       {
        text: "The Israeli occupation army continues to escalate its aggression to the extent of killing civilians daily by sniping in front of Nasser Hospital gate. https://twitter.com/thetufan07/status/1758891805775392828?t=bMOtu5RSpxeE4upNUJozLg&s=19 ",
        type: "text",
        //path: ['v1.mp4'],
      },
    
    // 2
    
     {

      	text: "Placing Palestinian citizens as human shields is a deeply rooted culture of the Israeli army.",
       	type: "video",
        src: v1,
      },
    
      //3
       {
  

        text: "This ethnic cleansing, which Western leaders called self-defense.",
        type: "video",
        src: v2,
       },
      
      
          //4
      
        {

     
          text: "The world must see how non-Zionist Jews are persecuted in Israel.",
         type: "video",
         src: v3,
       },
    
     
    //   //5
       {
 


         text: "It started before October 7th.",
        type: "video",
        src: v4,
       },
    
    
    
      //6
     
      {
        text: "Displacing them, starving them, and then killing them, Rafah removes the last mask of Western humanity.",
        type: "video",
        src: v5,
      },
    
    // 7
    
     {
       
       text: "In 1947, the Jewish state huddled on 18% of the original British Mandate land. The Jews accepted it gratefully.  The Arabs rejected it with a vengeance and seven Arab states immediately declared war against Israel.",
       type: "image",
        src: p1,
      },
    
    
      //8
       {
         text: "Accountability Void:Israel's Decades of Unchecked Actions reflects a longstanding pattern of defying laws & fosters an apartheid regime where soldiers act with impunity,recording & sharing crimes without fearing consequences",
         type: "video",
         src: v6,
       },
      
      
          //9
      
        {

      
          text: "Israeli terrorism continues Forcing the displaced to leave Nasser Hospital under arms threat and Snipers with consent of the Silent World.",
          type: "video",
         src: v7,
       },
    
     
    //   //	10
       {
         text: "While people are dying from starvation and bombing, these settlers are holding a party at Karam Abu Salem crossing, preventing aid from entering Gaza!",
         type: "video",
        src: v8,
       },
    
    
     //	11
       {
         text: "Northern Gaza residents face severed means of survival, resorting to animal feed due to an occupier's cruelty. The ruthless aim is to eliminate landowners through massacres and starvation, ensuring no threat remains.",
         type: "image",
        src: p2,
       },
 
    
    
    //	12
      
        {


          text: "Can international and humanitarian systems lift the siege, stop bombing, and hunger imposed on Gaza? Yes, they can, but they ignore and turn a blind eye, as Palestinian aren't from the West!  https://twitter.com/thetufan07/status/1758891813031629145?t=dBDa72FWMk1h810ga79PWg&s=19 ",
         type: "text",
        //path: ['v9.mp4'],
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
