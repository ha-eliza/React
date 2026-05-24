import { createApp } from "vue";
import App from "./App.vue";
import translatePlugin from "./translatePlugin";

const app = createApp(App)

const ru = {
  app: {
    title: 'Как работают плагины во Vue'
  }
}
const en = {
  app: {
    title: 'How plagins work in Vue'
  }
}

app.use(translatePlugin, {ru, en})
app.mount("#app");
