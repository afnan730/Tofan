import { createStore } from "vuex";


import p1 from "./assets/static/p1.jpg";

// import p2 from "./assets/static/p2.jpeg";
// import p3 from "./assets/static/p3.jpeg";
// import p4 from "./assets/static/p4.jpeg";
// import p6 from "./assets/static/p6.jpeg";
// import p5 from "./assets/static/p5.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
// import v7 from "./assets/static/v7.mp4";
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
      text: "In this war, deliberate starvation rivals intentional killing.4 kids died of hunger in Gaza. Surprisingly, the issue isn't money, but a shortage of goods despite a massive accumulation at the crossing! #Trump #Davos #Pakistan #Argentina #GazaGenocide",
      type: "image",
      src: p1.jpg,
    },

    //2
    {
      text: "How daring Zionists&their allying r 2 attempt 2 legitimise crimes in lawyers' face who reveal them by virtue of laws they themselves have enacted.If law justifies their actions,do humanity justify their brutality? #Trump #Davos #Pakistan #Argentina  Metro #GazaGenocide",
      type: "video",
      src: ["v1.mp4"],
    },
	
    //3
    {
      text: "Media figures should be neutral & respect guests. But the Zionist media bully guests with different opinions, interrupt & attack them. There's no freedom of speech & the media is a tool in the hands of the powerful & rich. #Trump #Davos #Pakistan #Argentina  Metro #GazaGenocide",
      type: "video",
      src: ["v2.mp4"],
    },
    
    //4
    {
      text: "Rather than being safe & happy at school, he cries in desperation,unable to feed his starving family. In Gaza,+100k person lack life necessities as Israel delays aid deliveries,stored just meters away at the Rafah crossing! #Trump #Davos #Pakistan #Argentina  Metro #GazaGenocide",
      type: "video",
      src: ["v3.mp4"],
    },
    
    //5
    {

      text: "Occupation aggression has no boundaries, targeting even the small children. This 5 aged child's detained by israeli soldiers. A simple question rises:What could a child this age possibly do to be treated in such brutality? #Trump #Davos #Pakistan #Argentina  Metro #GazaGenocide",
      type: "video",
      src: ["v4.mp4"],
    },

    //6
    {
      text:"Gaza faces an escalation in amputation cases unless the conflict ceases&the blockade's lifted.Beyond indiscriminate shelling&intentional targeting of limbs,resources shortage compels the adoption of limb removal 2 save the wounded #Trump #Davos #Pakistan #Argentina #GazaGenocide",
      type: "video",
      src: ["v5.mp4"],
    },

    //7
    {

      text: "Zionists instill (Traumatization and Revenge) in Israelis through education and media,portraying Arabs as (New Nazis) dehumanizing Palestinians, and promoting genocide as the solution to prevent a (New Holocaust.)  #Trump #Davos #Pakistan #Argentina Metro  #GazaGenocide",
      type: "video",
      src: ["v6.mp4"],
    },
    
    //8
    {
      text: "The West manipulates laws to serve its interests. Isreal bought most of the U.S.  legislators to criminalize anti Zionists critics. But what about +1000k of Americans jews who R anti-zionists? What about the freedom of speech?! #Trump #Davos #Pakistan #Argentina #GazaGenocide",
      type: "video",
      src: ["v8.mp4"],
    },
    
    //9
    {
      text: "To justify robbinng the land and killing its indinigeous, Isreal tries to erase Palastine's history. However, Western museums show otherwise. Besides, even if this is true, it never justifies genocides. #Trump #Davos #Pakistan Metro #Argentina #GazaGenocide",
      type: "video",
      src: ["v9.mp4"],
    },
    
    //10
    {
      text: "Israel is starving Palestinians in Gaza and just opened fire on a larger crowd of Palestinians simply trying to get food. #Trump #Davos #Pakistan Metro #Argentina #GazaGenocide",
      type: "video",
      src: ["v10.mp4"],
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
