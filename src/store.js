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

            text: "The US delivered the israelis 25,000 tonnes of weaponry through 280 aircraft to enable the israeli genocide",
            type: "image",
            src: p1,
          },
          
         
          //2
          {
      
            text: "While Washington swiftly responds with sanctions & military actions to less severe crises,Gaza genocide receives only empty speeches.The unconditional support 4 Israel's criminal regime by USA is appalling",
            type: "video",
            src: v1,
          },
        
          //3
          {
      
            text: "This is the true face of Israeli ideology: pride in mass killing & brutal destruction. This blood thirst has to be stopped.",
            type: "video",
            src: v2,
          },
          
          
              //4
          
           {
    
            text: "Depsite Israel's claims of their 'most moral & ethical army',videos circulating in the media reveal the real ugly,immoral,brutal & terroristic natur of this so-called army,exposing a group of sadistic gangers",
            type: "video",
            src: v3,
          },
          
         
          //5
          {
     
            text: "Explore & use all necessary means to inform the world about the war crimes against children & civilians of Gaza. U r the voice they need & the hope they got.",
            type: "video",
            src: v4,
          },
        
          //6
          {
     
            text: "Zionist forces breached norms,infiltrated Jenin's Ibn Sina Hospital disguised as civilians,executed a patient & 2 companions. World Leaders' support empower the criminal occupation in its despicable actions",
            type: "video",
            src: v5,
          },
          
              //7
          
           {
      
            text: "How is the infamous #EpsteinClientList related to #Mossad?", 
            type: "video",
            src: v6,
          },
          
         
          //8
          {
      
          text: "Israel is committing the same crimes,even more violently now. This state,claiming liberalism & peace, engages in terrorism that didn't start on Oct 7th but dates back to 1948,repeating over the years.",
          type: "video",
          src: v7,
          },
        
          
              //9
          
           {
            text: "#Israeli Politician Daniella Weiss talks about the need to 'brainwash' people into accepting the idea of Israel 'from the Euphrates to the Nile'!", 
            type: "video",
            src: v8,
          },
          
            //10
          
           {
    
            text: "They are proudly enjoying their achievements: murdering children & civilians, torture, theft, etc. Is this the self-defense the world is talking about?!", 
            type: "video",
            src: v9,
          },
         
          //11
          {
            text: "The secrets behind Gazans' strength, patience, steadfastness, resilience, hope and faith by Prof. Eyad Qunaibi. https://twitter.com/Dr_EyadQun/status/1736084880830660991?t=AsBIrnE_CpEhehd3Ep2n-g&s=19",
            type: "text",
            //path: ['v10.mp4'],
          },
        
          //12
          {
            text: "Global Campaign Urges Activists and free people to Join French Parliament Members in Rafah, Egypt, to Break Gaza Siege. https://twitter.com/Esralshikh/status/1752667112512819276?t=s_ZiTkQ4geTIWP20wEpS0A&s=19",
            type: "text",
           // path: ['v10.mp4'],
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
