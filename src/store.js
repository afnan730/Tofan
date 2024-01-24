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
// import v6 from "./assets/static/v6.mp4";
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
    // {
    //   text: "Israel consistently violates Human Rights.Ayman is a human rights workers & among the prisoners recounts abuse in Israeli detention where 6 Palestinian prisoners deaths reported  #Gazagenocide‌ $joker Emergencies Act #ALGMRT Mauritanie Trudeau Zverev",
    //   type: "image",
    //   link: "https://www.theguardian.com/world/2024/jan/21/gaza-activist-tells of-beating-and-abuse-in-israeli-detention CMP=Share_AndroidApp_Other&s=09",
    //   src: p1,
    // },

    //2
    {

      text: "This is how Israeli army has functioned in Palestine for so many years. #Gazagenocide‌ $joker Emergencies Act #ALGMRT Mauritanie Trudeau Zverev",
      type: "video",
      src: v1,
    },
	
    //3
    {

      text: "Israel practices racial segregation obviously. Not only in its refusal to recognize human rights, but also in its marginalization and use of Palestinans for purposes that contradict international treaties. #Gazagenocide‌ $joker Emergencies Act #ALGMRT Mauritanie Trudeau Zverev",
      type: "video",
      src: v2,
    },
    
    //4
    {


      text: "Nazism is currently a historical Nazi, a revival of an ancient Nazi rife with genocide. #Gazagenocide‌ $joker Emergencies Act Trudeau #ALGMRT Zverev Mauritanie",
      type: "video",
      src: v3.,
    },
    
    //5
    {

      text: "This British lady answers questions related to double standards when it comes to non-white people & their interests, & why that appears in the dirtiest ways especially in issues related to Israel & Ukraine #Gazagenocide‌ $joker Emergencies Act Trudeau #ALGMRT Zverev Mauritanie",
      type: "video",
      src: v4,
    },

   
    //6
    {

      text: "(I’m losing the desire to belong to a country that kills 11,000 children) a well-known Israeli playwright & screenwriter, Motti Lerner, told a crowd at a literary event in Israel. #Gazagenocide‌ $joker Emergencies Act Trudeau #ALGMRT Zverev Mauritanie",
      type: "video",
      src: v5,
    },
    
    
      //7
    {
      text : "Israel is using starvation of civilians as a method of warfare, and according to the U.N reports: 1 in 4 people are starving and 9 out of 10 families in some areas spend a day and night without food. #Gazagenocide‌ $joker Emergencies Act Trudeau #ALGMRT Zverev",
      type: "image",
      src: p2,
    },
    
       //8
    {

      text: "Gaza Media Office:800,000 residents in Gaza & the northern enclave face death due to Israel's starvation & thirst policy. World leaders must act 2 end this abhorrent war crime with devastating effects on the innocents #Gazagenocide‌ $joker Emergencies Act Trudeau #ALGMRT Zverev",
      type: "image",
      src: p3,
    },
    
    
      //9
    {
      
      text: "Israel's deliberately blocking water,food,& fuel delivery while willfully impeding humanitarian assistance,apparently razing agricultural areas,& depriving the civilians of objects indispensable to their survival #Gazagenocide‌ $joker Emergencies Act Trudeau #ALGMRT Zverev",
      type: "image",
      src: p4,
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
