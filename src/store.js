import { createStore } from "vuex";

import img3 from "./assets/static/66.jpeg";
import video1 from "./assets/static/video1.mp4";
import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import p1 from "./assets/static/p1.jpeg";
import p4 from "./assets/static/p3.jpeg";
import p5 from "./assets/static/44.jpeg";


import k1 from "./assets/static/k1.jpeg";
import k2 from "./assets/static/k2.jpeg";
import k3 from "./assets/static/k3.jpeg";
import k4 from "./assets/static/k4.jpeg";
import k5 from "./assets/static/k5.jpeg";
import k6 from "./assets/static/k6.jpeg";





import vk1 from "./assets/static/vk1.mp4";
import vk2 from "./assets/static/vk2.mp4";
import vk3 from "./assets/static/vk3.mp4";
import vk4 from "./assets/static/vk4.mp4";





const store = createStore({
  state() {
    return {
      tweets: [
        //1
        // {
        //   text: "Killed, with 2 shots, only because he stood up against the genocide. However, truth will always be louder no matter what criminals do to silence it.#Chelsea #Christmas #Sterling #Santa #Wilder",
        //   type: "image",
        //   src: k1,
        // },
        
      
        
        //3
        {
          text: "The major world players have to stop providing immunity to Israeli occupations. This political protection made it an above law entity & allowed it to torture Palestinians, steal their land, kill & displace them for over 75 years. #Chelsea #Christmas #Sterling #Santa #Wilder",
          type: "image",
          src: k2,
        },
        
        // {
        //   text: "You can't achieve peace with an apartheid antity that would do anything to steal your land, torture, murder, destruction, etc. The 2 states solution is the only clear path to peace.#Christmas #Trump New Year",
        //   type: "video",
        //   src: v1,
        // },

        //4
        {
          text: "احفظوا الشركات التي تظهر أسماؤها مطبوعة على مأكولات أو مشروبات بأيدي الجنود الصهاينة أو على طاولات الساسة، وعاقبوها بالمقاطعة. أروهم قوة سلاحنا الذي يستهينوا به. اجعلوا تجاراتهم تنهار عليهم كما جعلوا غزة تنهار على ساكنيها. #غزه_تنتصر #Chelsea #Christmas #Liverpool",
          type: "image",
          src: k3,
        },

         //8
         {
          text: "تعيد المقاومة تصنيع الأسلحة التي تتساقط على غزة ولا تنفجر، فتضرب بها الصهاينة بعد أن تردها للخدمة بطريقة أفضل مما كانت عليه وهي بأيديهم، فيُقتَلون بأسلحتهم التي قتلوا بها الأبرياء ظلما، مغلفة بعبارة: ذوقوا من نفس الكأس الذي تجرعونه غيركم. #غزه_تنتصر #Chelsea #Christmas #Liverpool",
          type: "image",
          src: k4,
        },

         {
          text: "Resistance recycle bombs debris and turned them into weapons used in their defense against the occupation's soldiers. Resistance is giving them a taste of their own medicine. #Chelsea #Christmas #Sterling #Santa #Wilder",
          type: "image",
          src: k5,
        },

          {
          text: "إن من يمسك مقود المفاوضات والسيطرة الميدانية هو المنتصر، والواقع يخبرنا أن المقاومة متمسكة بشروطها، وتجبر الأطراف على قبولها وعلى رأسها وقف الحرب كليا، ثم تبييض السجون الصهيونية، وإعادة إعمار غزة، في حين يتنازل الصهاينة عن شروطهم تدريجيا. #غزه_تنتصر #Chelsea #Christmas #Liverpool",
          type: "image",
          src: k6,
        },
        

          //2
        {
          text:"\"I'll remain steadfast on my land,ready to defend till the last drop of my blood\" She isn't just a little girl;she represents all Palestinians steadfast in protecting their homeland until the very last drop of their blood. #Chelsea #Christmas #Sterling #Santa #Wilde",
          type: "video",
          src: vk1,
        },
        
        //5
        {
          text: "Look out 4 all food/beverage companies that the occupation's soldiers & world politicians appear consuming/holding. Boycot is the answer 2 their arrogance & underestimatation of the mass power. Hit them where it hurts: their pockets. #Chelsea #Christmas #Sterling #Santa #Wilder",
          type: "video",
          src: vk2,
        },

        //6
        {
          text: "Gaza's situation's disastrous: lack of infrastructure, healthcare, life necessities & people R killed, injured&kidnapped. Moreover, civilians suffer from pollution due 2 bombing&diseases due 2 lack of water. Urgent ceasefire's a must. #Chelsea #Christmas #Sterling #Santa #Wilder",
          type: "video",
          src: vk3,
        },

        //7
        {
          text: "Khaled story, The Soul of My Soul, touches millions of hearts worldwide. People memorize his late granddaughter & his BD &send him their best wishes. He helped correct the global misconception of Islam &show how tolerant & noble it is. #Chelsea #Christmas #Sterling #Santa #Wilder",
          type: "video",
          src: vk4,
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
