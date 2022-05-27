const { ref, reactive, onMounted, computed, provide, inject } = Vue;
const { useRouter, useRoute } = VueRouter;

export default {
    name: 'AppMain',
    template: `
    <main>
    <router-view></router-view>
    </main>
    `,
    setup() {
        return {
        }
    }
};