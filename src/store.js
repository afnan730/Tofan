import { createStore } from "vuex";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import p4 from "./assets/static/p4.jpeg";
import p1 from "./assets/static/p1.jpeg";
import p3 from "./assets/static/p3.jpeg";
import p2 from "./assets/static/p2.jpeg";
import p5 from "./assets/static/p5.jpeg";
import p6 from "./assets/static/p6.jpeg";
import p7 from "./assets/static/p7.jpeg";
import p8 from "./assets/static/p8.jpeg";
import p9 from "./assets/static/p9.jpeg";
const store = createStore({
  state() {
    return {
      tweets: [
        {
          text: "Ilan pappe, Israeli historian refuted 10 Israeli myths:1-Palestine was an empty land: 'As per Yonatan Mendel about Ottoman records:a total population of 462,465 resided in Palestine in 1878. Of this no.  87% were Muslim, 10% Christians & 3% Jewish' #Slavery #Christmas #XRC20",
          type: "image",
          src: p7,
        },
        {
          text: "The 7th of Oct in Gaza wasn't the beginning of the Palestinians' struggle against the Zionist occupation it's an age-old war. Repression of the Palestinian Revolution by Britain helped the establishment of the occupying Power in 1948. #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
          type: "image",
          src: p4,
        },
        {
          text: "On behalf of the whole world, Gaza alone is facing the worst evil humanity ever known. #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
          type: "video",
          src: v1,
        },
        {
          text: "Israel's genocide on Gaza exposed the double standards and hypocrisy of human rights organizations, which are supposed to stand and protect the opressed not to abandon and neglect them. #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
          type: "image",
          src: p5,
        },

        {
          text: "Gaza's genocide reveals another ugly reality of the international policies: criminals that should be prescutd based on their war crimes,R let free if they'r deemed 2 be powerful or play an important rule on others players interests & benefits #Slavery #Christmas #Pamplona #XRC20",
          type: "image",
          src: p2,
        },
        {
          text: "Liberating Palestine is a liberation for the world. Peace will not occur until it is for everyone. #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
          type: "image",
          src: p6,
        },
        {
          text: "Palestinian Red Crescent spokesman: The Israeli occupation army does not stop targeting UNRWA schools that provide shelter for displaced persons. #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
          type: "image",
          src: p9,
        },
        {
          text: "'I'm not afraid of death but to be a captive', a Gazan said. The occupation kidnapped dozens of Gazans, who were sent back in body bags with no kidneys, hearts, etc. What level of inhumanity & cruelty is this? #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
          type: "image",
          src: p8,
        },
        {
          text: "If all these scenes won't make the world do something to end those children' suffering, what would? They're already facing death either by bombardment, diseases, starvation, fear & bad weather conditions. Ceasefire now 2 save them. #Slavery #Christmas #Pamplona #XRC20 #Nigeria",
          type: "video",
          src: v2,
        },
        {
          text: "Since Oct 7th, 110 ambulance&145 health establishments were bombed, 320 victims from medical staff as well as 25 hospitals were totally out of service & as a result of all this damages 2 health care system, hundered of wounded & patients r dying. #Slavery #Christmas #StormGerrit",
          type: "image",
          src: p3,
        },

        {
          text: "'A child is killed every 10 minutes in Gaza.'This is what the World Health Organization(WHO)stated,In light of a genocide that exceeded 1440 hours, in just over two months! #Slavery #StormGerrit #Christmas #Pamplona",
          type: "image",
          src: p1,
        },
        // {
        //   text: "فرحة الأطفال أعيادهم. إلى جانب جبرُ خاطرِ خليل وإسعاده، يظهر في هذا الفيديو إيثار الأسرة لخليل رغم كثرة عددهم وحاجتهم؛ لكنهم يثقون في عطاء الله الذي وسعت خزائنه السماوات والأرض. 'وَاللهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ'. رواه مسلم #ولعت #الهلال #ايران",
        //   type: "video",
        //   src: p1,
        // },
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
