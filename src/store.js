import { createStore } from "vuex";

import video1 from "./assets/static/video1.mp4";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import p4 from "./assets/static/p4.jpeg";
import p1 from "./assets/static/p1.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p2 from "./assets/static/p2.jpeg";
const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "According 2 the Palestinian Prisoner's Society, 4695 were detained since  October 7th in the West Bank & the raids R still going on, during  which whole families R threatened &some of their members R severely  beaten #Inoue Boxing Day #Christmas",
          type: "image",
          src: p1,
        },
        {
          text: "تعيد المقاومة تصنيع الأسلحة التي تتساقط على غزة ولا تنفجر، فتضرب بها الصهاينة بعد أن تردها للخدمة بطريقة أفضل مما كانت عليه وهي بأيديهم، فيُقتَلون بأسلحتهم التي قتلوا بها الأبرياء ظلما، مغلفة بعبارة: ذوقوا من نفس الكأس الذي تجرعونه غيركم.#رساله_اليوم #غزه_تنتصر #Christma",
          type: "image",
          src: p3,
        },
        {
          text: "If you still believe that the occupying entity Israel is 'the only democratic country in the Middle East' please listen to this.#Inoue Boxing Day #Christma",
          type: "video",
          src: v1,
        },
        {
          text: "إسرائيل تعتقل أكثر من 4695 فلسطينيا في الضفة الغربية، منذ 7 أكتوبر، وفق آخر الإحصائيات الرسمية الصادرة عن جمعية نادي الأسير الفلسطيني، وتواصل عمليات الاقتحام وتهديد العوائل والضرب المبرّح وعمليات التنكيل الواسعة خلال الاعتقال.#رساله_اليوم #غزه_تنتصر #Christma",
          type: "image",
          src: p1,
        },
        {
          text: "After only 6 hrs of traveling from Jerusalem to Ramallah & witnessing  the apartheid regime's treatment 2 Palestinians,this is his answer when asked about his reaction if he were to endure what they've been suffering 4 decades #Inoue Boxing Day #Christma",
          type: "video",
          src: video1,
        },
        {
          text: "Western influencers use holidays 2 raise awareness about Zionist actions in Palestine, urging continued boycotts that effectively pressure rule-breakers, & enforce some brands to close some branches,change their names or back down! #Inoue Boxing Day #Christma",
          type: "video",
          src: v2,
        },

        {
          text: "These war crimes occurred moments after Biden's announcement that he didn't request a ceasefire,& a few weeks ago,the U.S also vetoed against a ceasefire. What Gazans endure is a genocide by American weapons,while the UN & the whole world is watching #Inoue Boxing Day #Christma",
          type: "image",
          src: p2,
        },
        {
          text: "After 80+ days of continuous bombardment of civilians, Gazans either killed,  injured, or homeless facing the threat of death from bombs,infectious diseases,starvation, etc. How much must they endure before the world may react? #Inoue Boxing Day #Christmas",
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
