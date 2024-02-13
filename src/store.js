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
        text: "المطلوب هو النفير العام على كل مسلم أن يخرج إلى الساحات والميادين والسفارات، والعصيان المدني في كل بلاد العالم حتى تنتهي حرب الإبادة وهذا أقل الواجب تجاه أهلنا في غزة !",
        type: "video",
        src: v1,
      },
    
    // 2
    
     {

       text: "Australian documentary exposes Israeli torture of Palestinian kids,revealing physical abuse,false confessions,& intelligence gathering.UNICEF reported nightly arrests, raids,threats,violence,etc. https://youtu.be/cvOSv2fGJ5w?si=_1uKg9LZmB35ZyXJ ",
       type: "text",
       // path: ['p1.jpg'],
      },
    
  
      
          //3
      
       {

         text: "Israeli soldiers in the West Bank proudly share on their accounts about vandalizing shops, stating, 'Who needs sabotage? we are here. A workshop in the city.' ",
         type: "video",
         src: v2,
      },
      
    
       //4
      
       {

         text: "Even fair-minded Jews call for fighting the occupation and standing with the Palestinians against the injustice inflicted upon them.",
         type: "video",
         src: v3,
      },
      
    

       //5
      
       {

         text: "Gaza urgently needs U NOW more than before. Israel forced 1.5 M displaced people to the last 'safe' place,then bombing through air,land &sea. THIS is a planned genocide withfull support from world leaders.",
        type: "video",
        src: v4,
      },
      
    
    
          //6
      
       {
  
        text: "To those who are skeptical of the justification for the actions of October 7th: https://twitter.com/thetufan07/status/1757409124554313887?t=AVqfXgWtoOyyfdw4SuGfug&s=19 ",
        type: "text",
        //path: ['v3.mp4'],
      },
      
     
      //7
      {

      text: "ليعلم الجميع أن حجم مصر وإمكانيات مصر وإرادة المصريين تستطيع أن تقتلع جذور العدوان ' مصر هي الثقل العربي الذي يمكن أن يغير كل الموازين'.",
      type: "video",
      src: v5,
      },
    
      
          //8
      
       {

        text: "Biden initially said 'our military operation in Rafah' but corrected to 'the major military operation,' revealing a moment of truth in the 1st. FACT: USA funds Israel's Gaza genocide using taxpayers' money.",
        type: "video",
        src: v6,
      },
    
      
        //9
      
       {

        text: "The world can't or won't airdrop milk for Gaza's children, yet occupation soldiers bring in coffee equipment for latte in Khan Yunis, amidst famine in the north & a looming displacement plan in the south.",
        type: "video",
        src: v7,
      },
     
     
           //10
      
       {

        text: "Muslims once sheltered Jews in their mosques during the Nazi war, notes a Jewish rabbi. He condemns Israel's actions in Gaza as a war crime that demands accountability.",
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
