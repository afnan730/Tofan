import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
import p3 from "./assets/static/p3.jpg";
import p4 from "./assets/static/p4.jpg";
// import p6 from "./assets/static/p6.jpeg";
// import p5 from "./assets/static/p5.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
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
          text: "Israel consistently violates Human Rights.Ayman is a human rights workers & among the prisoners recounts abuse in Israeli detention where 6 Palestinian prisoners deaths reported  #Gazagenocide‌ $joker Emergencies Act #ALGMRT Mauritanie Trudeau Zverev",
          type: "image",
          link: "https://www.theguardian.com/world/2024/jan/21/gaza-activist-tells of-beating-and-abuse-in-israeli-detention CMP=Share_AndroidApp_Other&s=09",
          src: p1,
        },

    
    //2
    {

      text: "This is how Israel 🇮🇱 treat Palestinian 🇵🇸 kids when there’s cameras on them! Just imagine what they do behind closed doors",
      type: "video",
      src: v1,
    },
	
    //3
    {


      text: "Gaza faces hunger,worsened by Israeli aid restriction.WFP says almost every Palestinian goes without food 4 a day.  Resorting to animal feed when they have a chance,with meager portions shared among many families",
      type: "video",
      src: v2,
    },
    
    //4
    {

      text: "The United States requires a profound transformation in its governance.This country is ran by Israel.",
      type: "image",
      src: [p2,p3],
    },
    
    //5
    
     {

      text: "Netanyahu incited soldiers to commit genocide under religious cover and pretext. He is using a whole range of outrageous Machiavellian maneuvers to achieve his goals.",
      type: "video",
      src: v3,
    },
    
    
    //6
    
     {

      text: "People gift flowers, chocolate, and so on,but the (most moral army) is dedicating innocent massacres and home destructions. Have you ever seen such demoralization?!", 
      type: "video",
      src: v4,
    },
    
    
      //7
    {


      text: "Israel uses 'dehumanizing language' to justify killing Gazans.The strange thing is when German media,considering its history, adopts such a strategy.",
      type: "video",
      src: v5,
    },
    
    
    //8
    {

      text: "A Palestinian mother refuses to leave the body of her slain son & carries him on her shoulder to escape Israeli bombing in Khan Younis to Rafah.The mother said Israeli soldiers shot at them & killed her son.",
      type: "video",
      src: v6,
    },
    
    
      //9
    {

      text: "Thousands are displaced to the southern Gaza Strip through the (safe passage) designated by the Israeli army. Seeing all these displaced with signs of fear and exhaustion is heart breaking.",
      type: "video",
      src: v7,
    },
    
    //10
    {

      text: "With unprecedented audacity,Israel mocks the dead white,conveying a clear message of no peace with Palestinians. It knows it would never be held accountable,so it reveals  its true ugly face without concern.",
      type: "image",
      src: p4,
    },
    
    //  //11
    // {
    //   text: "ELDERLY MAN ASSAULTED AND THE ISRAELI SOLDIER STANDS ON HIS NECK",
    //   type: "media",
    //   path: ["v8.mp4"],
    // },
    

        
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
