import { createStore } from "vuex";

import p1 from "./assets/static/p1.jpg";
// import p2 from "./assets/static/p2.jpg";
// import p3 from "./assets/static/p3.jpg";
// import p4 from "./assets/static/p4.jpg";
// import p5 from "./assets/static/p5.jpg";
// import p6 from "./assets/static/p6.jpeg";

import v1 from "./assets/static/v1.mp4";
import v2 from "./assets/static/v2.mp4";
import v3 from "./assets/static/v3.mp4";
import v4 from "./assets/static/v4.mp4";
import v5 from "./assets/static/v5.mp4";
import v6 from "./assets/static/v6.mp4";
import v7 from "./assets/static/v7.mp4";
import v8 from "./assets/static/v8.mp4";
// import v9 from "./assets/static/v9.mp4";
import v10 from "./assets/static/v10.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";
// import v13 from "./assets/static/v13.mp4";
// import v14 from "./assets/static/v14.mp4";
// import v11 from "./assets/static/v11.mp4";
// import v12 from "./assets/static/v12.mp4";


const store = createStore({
  state() {
    return {
      tweets: [


    
    // 1

    {
	  text:"Israeli soldiers are seen planting bombs inside UNRWA Beit Hanoun medical clinic. Israeli army did not claim to have found any evidence of militant presence or tunnels under or inside the clinic whatsoever.",
	type: "image",
      src: p1,
    },

    //2
    {
      text : "Israeli military officer Major. Yossi Amar from the Israeli 55 Brigade wrote the following weeks ago. The briagde operated in Gaza city & Khan Younis.",
type: "image",
      src: p2,
    },

    
    //   //	3
    {
     text: "Biden & the EU supply Israel with extensive weapons,that they blow things up just for fun,treating it as a game & experimenting with explosives,leading to reckless acts. They R out-of-control individuals with deadly weapons", 

type: "image",
     src: p3,
    },
    
    
    // 4
    
    {
      text: "She waited for 11 years and made every effort to conceive a child, then only for the occupation to come and kill them, along with their father, in a barbaric bombing of their home in Rafah.", 
	    type: "video",
      src: v1,
      },
    
    //5

     {
      text: "Rabbi David Mivasair, a member of the Independent Jewish Voices organization, said: 'I am here outside a Jewish synagogue in Toronto, where they are selling properties built on land stolen from Palestinians in the West Bank.'",
	     type: "video",
       src: v2,
     },

    //   //6
    {

      text: "To erase a people, Israel targets education. Historian Manuel Marquez reveals deliberate killings, including 81 professors. Eliminating not just lives, but also the foundation of a community.",
	    type: "video",
      src: v3,
    },
    
    
    //  7
 
       {
         text: "The largest genocide documented in modern history, involving the biggest countries in the world, most of which claim to uphold human rights. An important report to understand the ongoing genocide in Palestine, specifically Gaza today.",
	       type: "video",
	       src: v4,
        },

	       // 8

    {
        text: "The Israeli occupation army films a shocking clip in which two men are targeted: one riding his bicycle and the other carrying a bag of flour. They depict the bicycle as a weapon to mask their direct and terrifying bombing of civilians.",
	    type: "video",
      src: v5,
    },
    
    //	9

      {
      text: "The blood cascades in the streets of Gaza foreshadow the ongoing massacre inflicted upon them by the Israeli occupation forces.",
	      type: "video",
           src: v6,
       },
    

    //10

    {
      text: "An Israeli soldier named Liam Israel posted this montage on TikTok on 3 January and captioned it 'having fun also in the West Bank'. It includes footage of abducted Palestinians, and soldiers shooting and throwing stun grenades in a Palestinian town during nighttime.",
	    type: "video",
      src: v7,
    },

   
    //   //11
    {
     text: "A Palestinian woman in North Gaza bursts into tears after seeing and tasting white bread for the first time in months amid the Israeli war of starvation.", 
	    type: "video",
      src: v8,
    },
    
       
    //   //12
    {


      text: "NY Times confirms Israel's role in the Feb 29 aid convoy attack, leaving 100+ casualties. Will the U.S. halt its involvement? Calls for justice at the International Court rise. The global community's conscience must act to stop this atrocity.",
	    type: "image",
      src: p4,
    },
       
    //   //13
    {
     text: "As a way of promoting IDF's morality to the world: an Israeli soldier at the military checkpoint along Gaza's coastal road films himself verbally abusing and cursing a Palestinian woman who is holding a white flag.", 
	    type: "video",
      src: v9,
    },


	        //   //14
    {
     text: "Daily life for Palestinian children under the Israeli Apartheid Occupation. It didn't start on October 7th.", 
	    type: "video",
      src: v10,
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
