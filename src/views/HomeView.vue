<template>
<div class='main'>
   <a class="btn btn-dark lang-btn"  @click=" this.$store.state.englishTest ?this.$store.state.englishTest =false:this.$store.state.englishTest =true">{{content.langButton}}</a>
      <div class="main d-flex align-items-center justify-content-center">
       
        <div>
          <div class="card">
            <div class="login-box">
              <h3 class="text-center login-label fw-bold mb-4">
                {{content.header}}
              </h3>
              <p  class=" text-center form-head-msg">
                {{content.command}}
              </p>
              <p class="text-light-emphasis text-center form-head-msg2" dir="rtl">
                 <a
                  href="https://www.youtube.com/watch?v=xFxL7Mvut6g"
                  target="_blank"
                  > {{content.clickHere}}</a
                >
                
              </p>
              
             <form
              class="ps-5 pt-1"
              id="tweet-form"
              @submit.prevent="checkTimeWindow()"
            >
              <label class="form-label" for="consumer_key">Consumer Key:</label>
              <input
                class="form-control"
                type="text"
                id="consumer_key"
                name="consumer_key"
                v-model="appKey"
              />

              <label class="form-label" for="consumer_secret"
                >Consumer Secret:</label
              >
              <input
                class="form-control"
                type="text"
                id="consumer_secret"
                name="consumer_secret"
                v-model="appSecret"
              />

              <label class="form-label" for="access_token">Access Token:</label>
              <input
                class="form-control"
                type="text"
                id="access_token"
                name="access_token"
                v-model="accessToken"
              />

              <label class="form-label" for="access_token_secret"
                >Access Token Secret:</label
              >
              <input
                class="form-control"
                type="text"
                id="access_token_secret"
                name="access_token_secret"
                v-model="accessSecret"
              />

              <label class="form-label" for="barerr_token"
                >Barerr Token:</label
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
            </form>

             

              <div v-if="error" class="alert alert-danger  mt-2 " role="alert">
              {{ error }}
            </div>
            <div v-if="message" class="alert alert-success mt-2" role="alert">
              {{ message }}
            </div>
            </div>
          </div>

          <div class="text-center">
            <router-link to="/tweets" class="btn btn-dark perview-btn mt-2">{{content.perviewButton}}</router-link>
            
           
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
      appKey: "vowAi6CPiU46od26plGTiJLEo",
      appSecret: "j9YsLwp1o21yhFotChUqHokfVQaiTA0X6qTANMWENsTT5BOHZ6",
      accessToken: "1734262174195843072-9OxZ4dtPAlS0Pi5nU9KO5TTH6SRcr0",
      accessSecret: "YjlJWVJ8thfht3QXcFfgSA7BzH81nDe4BDGZy4IGJ8mFy",
      bearerToken:
        "AAAAAAAAAAAAAAAAAAAAAMW%2BrQEAAAAATfMxRDWw9%2FVGTzPFRBJ0N6j5rXA%3DhuVXo5VboP09LUjRb5gcParm4VgIT7MgnoGKqYUwVbw0JaSjC6",
      message: null,
      error: null,
    };
  },
  methods: {
    checkTimeWindow() {
      
      // const d = new Date();
      // let hour = d.getHours();
      // console.log(hour);
      // if (hour != 19) {
      //   this.error = "It's not time";
      //   return;
      // }
      this.submit();
    },
    submit() {
      axios.post("http://localhost:3000/tweet", {
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
    }
  },
  computed: {
    content() {
      return this.$store.getters.Content;
    },
    }
};
</script>