import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
//import p2 from "./assets/static/p2.jpg";
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
      text: "ELDERLY MAN ASSAULTED AND THE ISRAELI SOLDIER STANDS ON HIS NECK",
      type: "media",
      src: ["v1.mp4"],
    },
    
   
    //2
    {

      text: "Children R the primary victims in the ongoing Israeli attack on Gaza. In the video, you witness one of many daily efforts to rescue children from rubble,accepting whatever outcome may follow.",
      type: "video",
      src: v2,
    },
	
    //3
    {

      text: "Al Jazeera reported live,(Next to their white flags!! Israeli soldiers shot a child & his brother after they went out holding two white flags to inspect the road for evacuating their family.",
      type: "image",
      src: p1,
    },
    
    //4
    {

      text: "This Palestinian man logically & calmly exposed soldiers to their apartheid regime via their unfair treatment to Palestinians. Peace can only be achieved by equality & justice for all.",
      type: "video",
      src: v3,
    },
    
    
    
    //5
    
     {

      text: "Documentation of 710 Combat Engineering Corps in the Israeli army bombing a residential building—an apparent war crime, part of Israel's daily series of such acts.", 
      type: "video",
      src: v4,
    },
    
   
    //6
    {

      text: "Children's rights are violated in Zionist prisons,facing severe psychological& physical abuses, including sexual harassment, defying international law.",
      type: "video",
      src: v5,
    },
	
    //7
    {

      text: "Don't expect much from the International Court of Justice. The global system, with its organizations and laws, has morally collapsed, evident daily in Gaza's tragic scenes on our screens.",
      type: "video",
      src: v6,
    },
    
    //8
    {

      text: "Despite clear evidence of Gaza's destruction,international law & courts R still seeking proof 4 urgent ceasefire.Perhaps they R waiting 4 complete annihilation to comically judge it decades later.",
      type: "video",
      src: v7,
    },
    
    
       //9
    {

      text: "Is it possible for children to live in a place like this?! In developed nations, kids enjoy rights to life &safety. In Gaza, these rights're denied, supported by leaders of specific developed countries!",
      type: "image",
      src: p2,
    },
    
       //10
    {

      text: "Despite harsh weather, a child sells homemade food to feed a family displaced by Israeli genocide. In a world claiming children's protection & welfare, it seems selective based on skin color!",
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
