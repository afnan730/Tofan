import { createStore } from "vuex";

 import p1 from "./assets/static/p1.jpg";
 import p2 from "./assets/static/p2.jpg";
 import p3 from "./assets/static/p3.jpg";
 // import p4 from "./assets/static/p4.jpg";
import p5 from "./assets/static/p5.jpeg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
// import v7 from "./assets/static/v7.mp4";
// import v8 from "./assets/static/v8.mp4";
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
  

        text: "Australian Senator Jordan Steele-John condemns the Australian government for cutting funding to organizations saving Palestinians' lives while continuing to fund those involved in killing them.",
        type: "video",
        src: ['v1.mp4' ],
      },
    
    // 2
    
     {


       text: "Einstein,a just Jew,declined collecting donations 4 Zionists. Post-Deir Yassin massacre,he sent 2 the emerging entity : 'Terrorist organizations from our ranks R responsible 4 Palestine.I don't want 2 see these misled criminals' ",
       	type: "image",
        src: p1,
      },
    
  
      
          //3
      
       {

         text: "A nurse in #KhanYunis, #Gaza risks her life running through gunfire to save an injured man and treat him, symbolizing to the world the bravery of the Gazan people!",
         type: "video",
         src: v2,
      },
      
    
       //4
      
       {


         text: "Occupation Brutality: Hind Rajab's Final Moments Inside Destroyed Family Car https://twitter.com/KhaledSafi/status/1756395136798392363?t=ahPWiZ08lCmS1bYkKXB5tQ&s=19 ",
         type: "text",
        // path: ['v4.mp4'],
      },
      
    

       //5
      
       {
  

         text: "In moments of intense hardship & pain,he sought solace in his faith.This resilient people never experiences defeat.A Gazan boy while being taken to the hospital following  injuries from ongoing Israeli airstrikes in Gaza.",
         type: "image",
        src: p2,
      },
      
    
    
          //6
      
       {
  

         text: "Did you know 'Israel' has one of the world's largest weapons stockpiles? It conducts postwar auctions & weapons shows, showcasing their effectiveness, exploiting Gaza genocide & Palestine's suffering as an example!",
         type: "video",
        src: v3,
      },
      
     
      //7
      {
  

      text: "In the West Bank, life starkly contrasts with limitations, iron barriers, and meticulous surveillance, depicting the oppressive reality of occupation, curtailing lives and asserting control.",
      type: "video",
      src: v4,
      },
    
      
          //8
      
       {

        text: "In Western media,double standards have evolved into skewed ones.Ukrainian child's death by Russian airstrike gets detailed coverage,bt when the Israeli army killed child aged 6 in Gaza,it's vaguely stated. Who killed her @BBCWorld ?", 
        type: "image",
        src: p3,
      },
    
      
        //9
      
       {


         text: "Arresting an American human rights activist exposes the bias of Zionists, the West, and America against UNRWA for the purpose of exterminating the Palestinian people.",
         type: "video",
        src: v5,
      },
     
     
           //10
      
       {


         text: "A 3-second scene provides ample evidence 2 accuse Israel of war crimes:bombing without warning,targeting ambulances& medical personnel,bombing residential areas,causing civilian casualties,endangering kid's&women'slives.",
         type: "video",
        src: v6,
      },
    
      
        //11
      
       {


        text: "This map was issued by National Geographic in 1947, one year before the Nakba, there was no such thing called “Israel”.", 
        type: "image",
        src: p5,
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
