import { createStore } from "vuex";

// import p1 from "./assets/static/p1.jpg";
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
  
        text: "Professor Norman,a researcher on the Israeli-Palestinian conflict,notes higher casualties among women & children in Gaza than the Allied bombing of Germany in WWII.Still,60% of Israelis say Israel isn't using enough force on Gaza",
        type: "video",
        src: v1,
      },
    
      //2
      {
  
        text: "What if the child 'Hend' was an American? The question posed by an American activist about the Palestinian girl, that has been reached after all members of her family was killed in their car in Gaza by the Israeli army.",
        type: "video",
        src: v2,
      },
      
      
          //3
      
       {

      
         text: "Moral bankruptcy displayed as they bomb sacred sites in frustration over battlefield failures,boasting afterward.Quran's truth revealed:their cowardice in facing battles&tendency 2 fight while hiding.",
         type: "video",
         src: v3,
      },
      
     
      //4
      {
 

        text: "They returned to the north after the occupation forces withdrew,only to find dozens of civilian bodies handcuffed & blindfolded – a heinous manifestation of Israeli terrorist gangs' acts of crime & genocide.",
        type: "video",
        src: v4,
      },
    
      //5
      {
 
        text: "Why have women's rights organizations done nth about Gaza's women who R arrested while passing through the supposedly safe crossing - according to Israel's claim - harassed, abused, insulted,& tortured?",
        type: "video",
        src: v5,
      },
      
          //6
      
       {
  
        text: "Most of Gaza was destroyed in full view of 'international humanitarian' laws and regulations.", 
        type: "image",
        src: p1,
      },
      
     
      //7
      {
  
      text: "Double standards spread like a contagious disease in the new media,politics,& decision-making circles. Certain social media platforms adopt & defend Israeli propaganda,revealing a selective use of freedom of expression.",  
      type: "video",
      src: v6,
      },
    
      
          //8
      
       {

        text: "Miko Peled,the son of an Israeli general, became 1 of the most famous Zionism critics,questions: R we irrational 2 condemn the resistance of a people have been oppressed,killed,& subjected 2 genocide for 75 years?",
        type: "video",
        src: v8,
      },
      
        //9
      
       {

        text: "Beyond the Headlines: Unseen Agony in Gaza, One of Millions of Heartbreaking Stories Before October 7. https://twitter.com/ARezeg/status/1754261225716813876?t=NHUeuR-VOECktXerr6Wzeg&s=19",
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
