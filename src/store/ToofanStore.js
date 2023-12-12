import { defineStore } from "pinia";
import axios from 'axios';

// const URL = "";

export const useToofanStore = defineStore('toofanStore', {
  state: () => ({
    categories:"",
  }),
  actions: {
    // async getCategories() {
    //   try {
    //     const response = await axios.get(`${URL}/`);
    //     this.categories = response.data.docs;
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    async getCategories() {
        try {
          this.categories ="response.data.docs";
        } catch (error) {
          console.error(error);
        }
      }
  }
});

export default useToofanStore;