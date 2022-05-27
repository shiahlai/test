const { ref, reactive, onMounted, computed, provide, inject } = Vue;
const { useRouter, useRoute } = VueRouter;

export default {
    name: 'AppHeader',
    template: `
    <header class="bd-header py-3 d-flex align-items-stretch bordertop">
        <div class="container-fluid d-flex align-items-center">
        <a href="/" alt="回主頁">
            <h1 class="d-flex align-items-center fs-4 mb-0 fw-bolder">
            <img src="image/logo.png" width="41" height="54" class="me-3" alt="農村再生執行及管理系統">
            農村再生執行及管理系統
            </h1>
        </a>
        </div>
    </header>
    `,
    setup() {
        return {
        }
    }
};