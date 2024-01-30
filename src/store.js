import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
// import p2 from "./assets/static/p2.jpg";
// import p3 from "./assets/static/p3.jpg";
// import p4 from "./assets/static/p4.jpg";
// import p6 from "./assets/static/p6.jpeg";
// import p5 from "./assets/static/p5.jpeg";

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

        text: "'More than 25,000 children have lost one or both parents in Gaza.' -Mediterranean Observatory for Human Rights", 
        type: "image",
        src: p1,
      },
      
     
      //2
      {
  
        text: "In addressing Israel's worst atrocities,world leaders & politicians avoid condemning them but readily label resistance as terrorism when they defend themselves, illustrating blatant double standards.",
        type: "video",
        src: v1,
      },
    
      //3
      {
  
        text: "Gaza endures destruction,bombing,siege, hunger,displacement,tents,&mass graves simultaneously for +100 days,& the world merely watching.If only 1 of these occurred in a region,it will be declared as disastrous area",
        type: "video",
        src: v2,
      },
      
      
          //4
      
       {
        text: "Israel manipulates lands & history to eradicate Palestinians, their history, & identity. Yet, truth arises within the Jewish community, exposing Israel's reality as an apartheid, brutal, & colonial entity.",
        type: "video",
        src: v3,
      },
      
     
      //5
      {
  
        text: "Being a Jewish doesn't mean supporting the zionist's methodology",
        type: "video",
        src: v4,
      },
    
      //6
      {
  
        text: "Many honest intellectual Jewish reveal the truth. It's ur duty to seek it. Yet, if the truth doesn't liberate U from supporting a regime waging a brutal war on children,what does that make u?",
        type: "video",
        src: v5,
      },
      
          //7
      
       {
  
        text: "In cold conditions,Gazans arrested by IOF were forcibly undressed,handcuffed, & given only a thin layer of paper for covering.These innocent civilians appeared exhausted,sleep-deprived,& tortured.", 
        type: "video",
        src: v6,
      },
      
     
      //8
      {
  
      text: "One of many hatred incitements made by a top Israeli rabbi, Dov Lior, who is calling for violating 'religious observances' to participate in the genocide by preventing aid from entering #Gaza!",  
      type: "video",
        src: v7,
      },
    
      //9
     {
  
       text: "'They won't even get air to breathe. It's a religious matter, even if you need to travel on a Saturday!' This is one of many hatred incitements made by a top Israeli rabbi, Dov Lior, who is calling for violating 'religious observances' to participate in the genocide by preventibg aid from entering #Gaza",
        type: "video",
        src: v8,
      },
      
          //10
      
       {
  
        text: "After being completely cut out from drinkable water, Gazans collect rain to drink as it is better than the polluted,  undrinkable one they only have access to for over 3 months.", 
        type: "video",
        src: v9,
      },
      
     
      //11
      {
  
        text: "People don't really choose to resist. Resistance is normally the only available option to confront injustice, torture, and oppression l",
        type: "video",
        src: v10,
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
