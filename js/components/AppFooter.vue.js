const { ref, reactive, onMounted, computed, provide, inject } = Vue;
const { useRouter, useRoute } = VueRouter;

export default {
    name: 'AppFooter',
    template: `
    <footer class="bg-light">
        <div class="text-center p-3 bg-footer">
        <div class="d-flex justify-content-center align-items-center align-middle">
            <img class="col-md-4 mb-0 w-s-100" src="image/logo-gov.png" alt="行政院農業委員會水土保持局">
            <p class="footer-text text-start text-white align-middle pt-2 ps-3">行政院農業委員會水土保持局版權所有©2022 All Rights
            Reserved<br>
            最佳瀏覽狀態：Edge、Google Chrome 5+、FireFox 5+ 版本以上之瀏覽器 /最佳瀏覽解析度1366*768</p>
        </div>
        </div>
    </footer>

    `,
    setup() {
        return {
        }
    }
};