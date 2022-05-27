import App from './App.vue.js';
import router from './router.js';
const { ref, reactive, onMounted, computed, provide, readonly } = Vue;
const { useRouter, useRoute } = VueRouter;

Vue.createApp(App)
    .use(router)
    .mount('#app');


