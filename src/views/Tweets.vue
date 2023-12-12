<template>
  <div class='container'>
      <h3 class="m-2 title">{{content.tweetsHeader}}</h3>
    
    <div class="row justify-content-center">
      <div v-for="tweet in tweets" :key="tweet" class="card col-6 col-md-3 col-lg-4 " style="width: 18rem;">
        <img  v-if="tweet.type=='image'" :src="tweet.src" class="card-img-top img-fluid imgs ms-2" alt="..." >
         <video v-else style="height: 18rem;" controls>
          <source src="../assets/static/video1.mp4" type="video/mp4" class="card-img-top"></video>
        <div class="card-body">
          <p class="card-text">{{ tweet.src }}Some quick example text to build on the card title and make up the bulk of the
            card's content.</p>
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

</style>
