import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue';
const app=createApp(App);
app.use(
    createPinia()
).use(
    router
).mount("#app")
