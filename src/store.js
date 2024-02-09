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
  
        text: "British musician Roger Waters exposes Israeli crimes,seeing things as they truly R, & recognizing Israel as an apartheid entity. He said,'They treated me poorly,& I hold a British passport. Imagine how they treat Palestinians!' ",
        type: "video",
        src: v1,
      },
    
    // 2
    
     {

        text : "How much racism they think they can get away with?! The use of deception & misinformation is a collapse of ethics, principles, & humanity. Each time,Israel's mask falls  & Palastine gains strength.",
        type: "video",
        src: v2,
      },

           //3
      
       {
         text: "Zionism is an ideological idea based on apartheid & has nothing to do with religion or Judaism.RabbiDovid Weiss, a leader in the @Neturei Jewish Movement asserts that the State of 'Israel' doesn't have the right to exist.",
         type: "video",
         src: v3,
      },
      
    
       //4
      
       {

         text: "The difference between a victim and an Occupier. So clearly What the occupation is doing is committing more crimes alongside the crime of occupation!",
         type: "video",
         src: v4,
      },
      
      //5
      
       {
  
        text: "Palestinians are living under the rubble of their houses, destroyed by Israeli airstrikes, yet they remain steadfast, determined not to leave their home & their homeland, just like this old women did.",
         type: "video",
        src: v5,
      },
      

       //6
      
       {
  
        text: "Ex-PM of Israel,Menachem Begin,was on British terror lists & sought by Palestinian police in 1946 for bombing the King David Hotel in Palestine,resulting in 90 deaths,including 28 British nationals.", 
        type: "image",
        src: p1,
      },

         //7
      {
  

      text: "Despite suffering, ongoing bombing, & a constant siege before the current genocide in Gaza, the original landowners endure & stay, unlike Israelis who returned to their home countries.",  
      type: "video",
      src: v6,
      },
    
      
          //8
      
       {
        text: "This is Rafah, the safe area as they claim",
        type: "video",
        src: v7,
      },


          //9
      
       {


         text: "Europe's double standards R beyond imagination! A Belgian Member of the European Parliament exposes the double standards in Europe's approach to the genocide of Gaza's people by the occupying Israeli entity",
         type: "video",
        src: v8,
      },
     
     
           //10
      
       {

        text: "Jewish-American professor Norman Finkelstein, the son of 2 Holocaust survivors, justifies Palestinian resistance and poses the crucial question – what were their options?", 
        type: "video",
        src: v9,
      },
    
      
        //11
      
       {

        text: "A British channel expels an American writer after defending the Palestinian cause, as an example of the double standards of the Western media, which has the slogan of Freedom of expression & Respect opinions.",
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
