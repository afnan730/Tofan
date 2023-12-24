<template>
<div class='main'>
   <button class="btn btn-dark lang-btn"  @click=" this.$store.state.arabicTest ?this.$store.state.arabicTest =false:this.$store.state.arabicTest =true">{{content.langButton}}</button>
      <div class="main d-flex align-items-center justify-content-center">
       
        <div>
          <div class="card">
            <div class="login-box">
              <h3 class="text-center login-label fw-bold mb-2 ">
                {{content.header}}
              </h3>
              <p  class=" text-center form-head-msg ms-4">
                {{content.command}}
              </p>
              <p class="text-light-emphasis ms-4 youtubeLink" dir="rtl">
                 <!-- <a
                  href="https://www.youtube.com/watch?v=9VdE7Ce9Rbo"
                  target="_blank"
                  class="fw-semibold"
                  > {{content.clickHere}}</a
                >   -->
                 <a
                  href="https://youtu.be/ljJyZh-u2a4"
                  target="_blank"
                  class="fw-semibold"
                  > {{content.clickHere}}</a
                >              
              </p>            
             <form
              class="ps-2 "
              id="tweet-form"
              @submit.prevent="checkTimeWindow()"
            >
              <label class="form-label" for="consumer_key">1. Consumer Key</label>
              <input
                class="form-control"
                type="text"
                id="consumer_key"
                name="consumer_key"
                v-model="appKey"
              />
              <label class="form-label" for="consumer_secret"
                >2. Consumer Secret</label
              >
              <input
                class="form-control"
                type="text"
                id="consumer_secret"
                name="consumer_secret"
                v-model="appSecret"
              />
              <label class="form-label" for="access_token">3. Access Token</label>
              <input
                class="form-control"
                type="text"
                id="access_token"
                name="access_token"
                v-model="accessToken"
              />
              <label class="form-label" for="access_token_secret"
                >4. Access Token Secret</label
              >
              <input
                class="form-control"
                type="text"
                id="access_token_secret"
                name="access_token_secret"
                v-model="accessSecret"
              />
              <label class="form-label" for="barerr_token"
                >5. Bearer Token</label
              >
              <input
                class="form-control"
                type="text"
                id="barerr_token"
                name="barerr_token"
                v-model="bearerToken"
              />
             

              <button type="submit" class="btn btn-dark post-btn">
                {{content.postButton}}
              </button>
              
              <div class="note">
                <p class="mt-1">{{content.note}}</p>
                <div v-if="isLoading" > <p >{{content.LoadingMsg}}</p>
              <div  class="spinner-border" role="status">
                <span class="sr-only"></span>
                
              </div>
              </div>
              </div>
              
              
            </form>

  
            <div v-if="checkError" class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content"> 
                  <div class="modal-body text-danger text-center">
                    <i class="bi bi-info-circle-fill" style="font-size: 2rem;"></i>
                  <h5 class="mt-2">{{ error }}</h5> 
                  </div>
                  <div class="text-center mb-3">
                    <button type="button" class="btn btn-dark" @click="clearError">{{content.modalButton}}</button>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="success" class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  
                  <div class="modal-body text-success text-center">
                    <i class="bi bi-check-circle-fill " style="font-size: 2rem;"></i>
                  <h5 class="mt-2">{{ message }}</h5> 
                  </div>
                  <div class=" text-center mb-3">
                    <button type="button" class="btn btn-dark" @click="clearMessage">{{content.modalButton}}</button>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div v-if="message" class="alert alert-success mt-2" role="alert">
              {{ message }}
            </div> -->
            </div>
          </div>

          <div class="text-center">
            <router-link to="/tweets" class="btn btn-dark perview-btn my-1">{{content.perviewButton}}</router-link>
            
           
          </div>
        </div>
      </div>
    </div>  
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      
      appKey:null,
      appSecret:null,
      accessToken:null,
      accessSecret:null,
      bearerToken:null,
      message: null,
      error: null,
      isLoading:false,
    };
  },
  methods: {
    checkTimeWindow() {
       
      console.log(this.$store.state.arabicTest);
      this.isLoading = true;
      // const now = new Date();
      // const currentHour = now.getHours();

      // if (currentHour >= 21 || currentHour < 0) {
      //   console.log("Posting is allowed.");
   // this.submit();
      // } else {
      //   console.log("The allowed posting hours are 9 PM to 12 AM");
      //    this.error="The allowed posting hours are from 9 PM to 12 AM"
      // }
        if(this.$store.state.arabicTest){
          this.error="تم إيقاف النشر حتى الساعة 9 مساءً. نتطلّع لرؤيتكم"
        }
        else{
           this.error="Posting tweets has been suspended until 9 p.m. We look forward to seeing you."
         }
      
    },
    submit() {
      axios.post("https://www.thetufan.com/api/tweet", {
        appKey: this.appKey,
        appSecret: this.appSecret,
        accessToken: this.accessToken,
        accessSecret: this.accessSecret,
        bearerToken: this.bearerToken,
      }).then((resp) => {
        console.log(resp.data)
        if(this.$store.state.arabicTest){
        this.message = resp.data.arabic;
        }else{
          this.message = resp.data.english;
        }
        
      }).catch(e => {
        console.log(e.response.data)
        if(this.$store.state.arabicTest){
        this.error = e.response.data.arabic;
        }else{
          this.error = e.response.data.english;
        }

        }).finally(() => {    
          this.isLoading = false;
        });
    },
    clearError(){
      this.error=null;
    },
    clearMessage(){
      this.message=null;
    }
  },
   watch: {
    error(newValue) {
      // Update isLoading based on the presence of an error
      this.isLoading = !!newValue;
    },
    message(newValue) {
      // Update isLoading based on the presence of a message
      this.isLoading = !!newValue;
    },
  },
  computed: {
    content() {
      return this.$store.getters.Content;
    },
    checkError(){
      return this.error;
    },
    success(){
      return this.message;
    }
    
    }
};
</script>
