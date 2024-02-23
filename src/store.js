import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
import p2 from "./assets/static/p2.jpg";
import p3 from "./assets/static/p3.jpg";
import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
// import v5 from "./assets/static/v5.mp4";
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


    
    // 1

    {
      text: "'احنا جعانين.. ما ضل إلا القطط نأكلها'.. فلسطيني في شمال قطاع غزة يتحدث على المجاعة.",
      type: "video",
      path: v1,
    },

    //2
    {


      text: "Israeli soldier posts video demolishing Gaza's only cancer hospital, then wrote ' it broke accidentally'. The hospital served as an Israeli camp for 3 months; no official claims of findings inside.",
      type: "video",
      path: v2,
    },

    
    //   //	3
    {


      text: "من يخبر أهل الأردن أنّ نصف النصر رهين بيدهم الآن فقط ؟ من يخبرهم أن بيدهم إنقاذ 700 ألف نفس يرابطون في شمال غزة منذ 4 أشهر ونصف، والجوع ينهش لحومهم وعظامهم ؟ من يخبرهم أنهم لو أنقذوا هؤلاء، فلن يُكتب لإسرائيل النصر في هذه الحرب، ولو فعلت ما فعلت ؟!",
      type: "video",
     path: v3,
    },
    
    
    // 4
    
    {
      text: "The World Ignores Israel's War Crimes. It's time to question the narrative of 'self-defense.' Is this truly defense, or are we witnessing an ongoing cycle of oppression?",
      type: "video",
      path: v4,
      },
    
    //5

    // {
    //   text: "This is how the occupation deals with Muslims wanting to pray at Al-Aqsa Mosque, whether during Ramadan or throughout the year. Yet, some still hope to live in peace with a military raised on criminality.",
    //   type: "video",
    //   path: v5,
    // },

    //   //6
    {
      text: "هل تعلم ماذا يأكل الناس شمال غزة؟ - أعلاف الأرانب - التبن مخلوطًا بالشعير - خبزٌ عفن مغسولٌ بالماء - خضارٌ ملوّث بالفوسفور والذخائر- جذور النباتات - الخبيزة والسلق مخلوطة بالأعشاب.",
      type: "text",
     // path: ["v4.mp4"],
    },
    
    
    //  7
 
       {

         text: "Do you know what people in northern Gaza eat? -Rabbit feed -Straw mixed with barley, -Moldy bread washed with water, -Vegetables contaminated with phosphorus & bullets, -Plant roots -Wild plants mixed with herbs. #NorthernGazaStarving",
         type: "text",
        },

    
    //	8

      {
        text: "This represents true terrorism and the actions of deranged killers, not condemned by the world that claims to fight terrorism while oppressing peoples and occupying cities.",
        type: "image",
           path: p1,
       },
    

    //9

    {

      text: "Israeli soldiers not only engaged in sexual assault against women in Gaza but also shamelessly displayed their misconduct to the world.Meanwhile,Israeli propaganda wrongly accuses Hamas of assaulting women without evidence.",
      type: "image",
      path: p2,
    },

    // 10

    {
      text: "Hope for international justice endures globally despite decades of Palestinian suffering under a system rooted in colonization & oppression. Doubts arise about expecting justice from those perpetrating such actions.",
      type: "video",
      src: v6,
    },

   
    
    // 11

    {
      text: "Armed Israeli soldier violently arrests a child with a broken arm in the occupied West Bank in 2015",
      type: "image",
      path: p3,
    },

    
    //   //	12
    {
      text: "أمام المجاعة الحاصلة في غزة فإن الإغاثة المالية لأهلنا ضرورة واجبة، ومؤثرة، وخاصة في شمال غزة التي صبر سكانها صبراً شديداً أمام خطة التهجير. ومن حقهم علينا المساندة بكل ما يمكن، وهذا من أفضل الأعمال وأزكاها وأوجبها. وتحرى بأن تكون الجهة موثوقة. #خذلان_غزة_جريمة",
      type: "image",
      path: p4,
    },
    
    
	      

        
       
  
      ],
      arabic: {
        header: "🔻طُـوفَـان الـحَـقِـيـقَـة",
        command: "الخاصة بك API Keys أدخل معرّفات",
        contact: "تابعونا على",
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
        contact: "Follow us on",
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
