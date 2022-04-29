import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";

import {
  applyPolyfills,
  defineCustomElements,
} from "stencil-components/loader";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig);

applyPolyfills().then(() => {
  defineCustomElements();
});

app.mount("#app");
