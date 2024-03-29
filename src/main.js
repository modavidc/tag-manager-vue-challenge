import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./index.css";

require("./plugins/axios");
require("./plugins/interceptors");

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
