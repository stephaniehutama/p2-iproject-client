const baseUrl = "http://localhost:3000";
import axios from "axios";
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return {
      isLogin: false,
    };
  },
  actions: {
    async logIn(email, password) {
      try {
        const response = await axios({
          url: `${baseUrl}/login`,
          method: "post",
          data: {
            email,
            password,
          },
        });
        localStorage.setItem("access_token", response.data.access_token);
        this.isLogin = true;
      } catch (err) {
        console.log(err);
      }
    },
    async register(username, name, email, password) {
      try {
        await axios({
          url: `${baseUrl}/register`,
          method: "post",
          data: {
            username,
            name,
            email,
            password,
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
});
