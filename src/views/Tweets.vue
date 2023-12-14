<template>
  <div class='container'>
      <h3 class="my-2 title text-center mt-4">{{content.tweetsHeader}}</h3>
    
    <div class="row ms-2">
      <div v-for="tweet in tweets" :key="tweet" class="card col-6 col-md-3 col-lg-4 " style="width: 18rem;">
        <img  v-if="tweet.type=='image'" :src="tweet.src" class="card-img-top img-fluid imgs mx-1" alt="..." >
         <video v-else style="height: 18rem;" controls>
          <source src="../assets/static/video1.mp4" type="video/mp4" class="card-img-top"></video>
        <div class="card-body">
          <p class="card-text text-start">{{ tweet.text }}
            </p>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  computed: {
    tweets() {
      return this.$store.getters.Tweets;
    },
    content() {
      return this.$store.getters.Content;
    },
    }
  
};
</script>
<style scoped>
.imgs{
    height: 18rem;
}
@media only screen and (max-width: 766px) {
  .container {
    padding-left: 20%;
  }
}
@media only screen and (max-width: 445px) {
  .container {
    padding-left: 10%;
  }
}
@media only screen and (max-width: 365px) {
  .container {
    padding-left: 1rem;
  }
}

</style>
