<template>
<div class='main'>
   <button class="btn btn-dark lang-btn"  @click=" this.$store.state.englishTest ?this.$store.state.englishTest =false:this.$store.state.englishTest =true">{{content.langButton}}</button>
      <div class="main d-flex align-items-center justify-content-center">
       
        <div>
          <div class="card">
            <div class="login-box">
              <h3 class="text-center login-label fw-bold mb-2">
                {{content.header}}
              </h3>
              <p  class=" text-center form-head-msg ">
                {{content.command}}
              </p>
              <p class="text-light-emphasis ms-4  youtubeLink" dir="rtl">
                 <a
                  href="https://www.youtube.com/watch?v=9VdE7Ce9Rbo"
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
              <!-- <p id="tweet-message" class="text-body-secondary pt-2">
                يمكنك النشر في التاسعة مساءا
              </p> -->

              <button type="submit" class="btn btn-dark post-btn">
                {{content.postButton}}
              </button>
              <div class="note">
                <p class="mt-1">{{content.note}}</p>
              </div>
            </form>

             
<!-- 
              <div v-if="error" class="alert alert-danger  mt-2 " role="alert">
              {{ error }}
            </div> -->
            <div v-if="checkError" class="modal fade show" tabindex="-1" role="dialog" style="display: block;">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content"> 
                  <div class="modal-body text-danger text-center">
                    <i class="bi bi-info-circle-fill" style="font-size: 2rem;"></i>
                  <h5 class="mt-2">{{ error }}</h5> 
                  </div>
                  <div class="modal-footer">
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
                  <div class="modal-footer">
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
            <router-link to="/tweets" class="btn btn-dark perview-btn mt-1">{{content.perviewButton}}</router-link>
            
           
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
      
    };
  },
  methods: {
    checkTimeWindow() {
      // const now = new Date();
      // const currentHour = now.getHours();

      // if (currentHour >= 21 || currentHour < 0) {
      //   console.log("Posting is allowed.");
      //   // this.submit();
      // } else {
      //   console.log("The allowed posting hours are 9 PM to 12 AM");
      //    this.error="The allowed posting hours are from 9 PM to 12 AM"
      // }
       this.error="تم تعليق النشر إلى حين موعد الإطلاق. متطلعون لانضمامكم إلى مجموعاتنا على مواقع التواصل الاجتماعي وتفاعلكم معنا"
    },
    submit() {
      axios.post("https://thetufan.com/api/tweet", {
        appKey: this.appKey,
        appSecret: this.appSecret,
        accessToken: this.accessToken,
        accessSecret: this.accessSecret,
        bearerToken: this.bearerToken,
      }).then((resp) => {
        console.log(resp.data)
        this.message = resp.data;
      }).catch(e => {
        console.log(e.response.data)
        this.error = e.response.data
        });
    },
    clearError(){
      this.error=null;
    },
    clearMessage(){
      this.message=null;
    }
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
