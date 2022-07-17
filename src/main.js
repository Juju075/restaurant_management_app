import { createApp } from "vue";
import App from "./App.vue";

/**
 * 3. Create the router instance and pass the `routes` option
 */
import router from "./router";

// 4. Provide the history implementation to use. We are using the hash history for simplicity here.

// 5. Create and mount the root instance.
/**
 * const app = Vue.createApp({})
 * app.use(router)
 * app.mount('#app')
 */
createApp(App).use(router).mount("#app");
