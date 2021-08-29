import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import store from "./store/index";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

axios.defaults.baseURL = process.env.VUE_APP_API || 'http://localhost:3001'

createApp(App)
    .use(router)
    .use(store)
    .use(axios)
    .use(dotenv)
    .mount("#app");
