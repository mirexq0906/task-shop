import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import MyImage from './components/UI/MyImage.vue'
const app = createApp(App);

app.component("my-image", MyImage)
app.use(store).use(router).mount('#app');
