import AppHeader from './components/AppHeader.vue.js';
import AppFooter from './components/AppFooter.vue.js';
import AppMain from './components/AppMain.vue.js';

const { ref, reactive, onMounted, computed, inject } = Vue;
const { useRouter, useRoute } = VueRouter;

export default {
    name: 'Home',
    components: {
        'app-header' : AppHeader,
        'app-footer' : AppFooter,
        'app-main' : AppMain,
    },
    template: `
    <app-header></app-header>
    
    <app-main></app-main>
    
    <app-footer></app-footer>
    `,
    setup() {
        return {
        }
    }
};