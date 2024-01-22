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
// import v4 from "./assets/static/v4.mp4";
// import v5 from "./assets/static/v5.mp4";
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
    {
      text: "The huge difference in the conditions of the freed hostages/prisoners is a clear indication of who are the (moral ones.) Actions are louders and more honest than words and propaganda. #Gazagenocide‌ #WWE2K24  Bills Chiefs Palworld Demos Mbemba Auschwitz",
      type: "image",
      src: p1,
    },

    //2
    {
      text: "The Israeli media justifies targeting anything in Gaza, even dolls, it is linked to Hamas. Their aim, in essence, is to eliminate all people except Zionists. #Gazagenocide‌ #WWE2K24  Bills Chiefs Palworld Demos Mbemba Auschwitz",
      type: "image",
      path: p2,
    },
	
    //3
    {


      text: "She must face consequences for violating international law & inciting violence. We call on people globally to gather at Israeli embassies,close them,expel or detain ambassadors until justice achieved in Gaza.#Gazagenocide‌ #WWE2K24  Bills Chiefs Palworld Demos Mbemba Auschwitz",
      type: "video",
      src: v1,
    },
    
    //4
    {

      text: "Ex-Israeli soldier questions Israel's claim of(most moral army)&(best democracy). He wonders about storing banned white phosphorus,& now,the mystery's resolved.This weapon,along with others,is used on Gazans! #Gazagenocide‌ #WWE2K24  Bills Chiefs Palworld Demos Mbemba Auschwitz",
      type: "video",
      src: v2,
    },
    
    //5
    {
      text: "Despite global condemnation,Washington staunchly defends Israel against genocide accusations. What's the secret behind this unconditional support?Would the US risk losing its (reputation) for Israel & what for?#Gazagenocide‌ #WWE2K24  Bills Chiefs Palworld Demos Mbemba Auschwitz",
      type: "image",
      src: p3,
    },

   
    //6
    {
      text: "Its time 2 uncover the truth&resist lies &propaganda.October 7th wasn't a start bt response to years of massacres &oppression. How does one react when being under attack,with loved ones slain,&homeland robbed? #Gazagenocide‌ #WWE2K24  Bills Chiefs Palworld Demos Mbemba Auschwitz",
      type: "image",
      src: p4,
    },
    
    
      //7
    {
      
      text:"Some French soldiers are bragging about going to Gaza to massacre innocents and describing this by (wonderful.) Where are the International Criminal Court from such behaviors? #Gazagenocide‌ #WWE2K24  Bills Chiefs Palworld Demos Mbemba Auschwitz",
      type: "video",
      src: v3,
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
