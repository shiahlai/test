const { ref, reactive, onMounted, computed, inject } = Vue;
const { useRouter, useRoute } = VueRouter;

export default {
    name: 'Home',
    template: `
    <!-- Hero start -->
    <div id="carouselHero" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselHero" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="position-relative w-100 carousel-item carousel-img-index active">
          <img src="image/hero1.jpg" class="w-100 h-100 obj-cover" alt="成果交流專區">
          <div class="position-absolute bg-black-opacity top-0 bottom-0 start-0 end-0 d-flex justify-content-center">
            <p
              class="pt-4 top-50 start-50 translate-middle text-white carousel-text carousel-caption d-md-block fw-bolder ">
              成果交流專區</p>
          </div>
        </div>

        <div class="position-relative w-100 carousel-item carousel-img-index">
          <img src="image/hero2.jpg" class="w-100 h-100 obj-cover" alt="成果交流專區">
          <div class="position-absolute bg-black-opacity top-0 bottom-0 start-0 end-0 d-flex justify-content-center">
            <p
              class="pt-4 top-50 start-50 translate-middle text-white carousel-text carousel-caption d-md-block fw-bolder ">
              成果交流專區</p>
          </div>
        </div>

        <div class="position-relative w-100 carousel-item carousel-img-index">
          <img src="image/hero3.jpg" class="w-100 h-100 obj-cover" alt="成果交流專區">
          <div class="position-absolute bg-black-opacity top-0 bottom-0 start-0 end-0 d-flex justify-content-center">
            <p
              class="pt-4 top-50 start-50 translate-middle text-white carousel-text carousel-caption d-md-block fw-bolder ">
              成果交流專區</p>
          </div>
        </div>

      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselHero" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselHero" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div><!-- Hero end -->

    <!-- 快速查詢 Start -->
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10 text-white searchbackground d-flex align-items-center justify-content-center rounded">
          <p>快速查詢</p>
        </div>
      </div>

      <div class="row searchbox position-relative d-flex justify-content-center row-cols-lg-4 g-2 g-lg-3 search-bar">
        <div class="col-xl-3 col-md-12 col-sm-12">
          <select class="select-light">
            <option>得獎年度</option>
          </select>
        </div>
        <div class="col-xl-3 col-md-12 col-sm-12">
          <select>
            <option>執行單位</option>
          </select>
        </div>
        <div class="col-xl-3 col-md-12 col-sm-12">
          <select>
            <option>獎項</option>
          </select>
        </div>
        <div class="col-xl-3 col-md-12 col-sm-12">
          <a class="btn btn-green text-white" href="#!" role="button">
            <i class="icon-search"></i>
            查詢
          </a>
        </div>
      </div>
    </div>
    <!-- 快速查詢 Start -->


    <!-- 執行單位 Start -->
    <div class="bg-light p-25">
      <div class="container thumbnail-container">
        <div class="row subtitle">執行單位</div>
        <div class="row g-2 grid-thumbnail">
          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail1.jpg" class="w-100 h-100 obj-cover" alt="南投分局">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">南投分局</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail2.jpg" class="w-100 h-100 obj-cover" alt="臺中分局">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">臺中分局</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail3.jpg" class="w-100 h-100 obj-cover" alt="臺北分局">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">臺北分局</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail4.jpg" class="w-100 h-100 obj-cover" alt="臺南分局">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">臺南分局</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail5.jpg" class="w-100 h-100 obj-cover" alt="花蓮分局">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">花蓮分局</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail6.jpg" class="w-100 h-100 obj-cover" alt="臺東分局">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">臺東分局</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div><!-- 執行單位 End -->

    <!-- 獎項分類 Start -->
    <div class="bg-light p-25">
      <div class="container thumbnail-container">
        <div class="row subtitle">獎項分類</div>
        <div class="row g-2 grid-thumbnail">
          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail1.jpg" class="w-100 h-100 obj-cover" alt="金質獎">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">金質獎</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail2.jpg" class="w-100 h-100 obj-cover" alt="優良農建">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">優良農建</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail3.jpg" class="w-100 h-100 obj-cover" alt="園冶獎">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">園冶獎</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail4.jpg" class="w-100 h-100 obj-cover" alt="國家卓越建設獎">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">國家卓越建設獎</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail5.jpg" class="w-100 h-100 obj-cover" alt="台灣景觀大獎">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">台灣景觀大獎</p>
              </div>
            </a>
          </div>

          <div class="col">
            <a href="#/multiSearch" alt="點擊至複合式查詢頁" class="position-relative d-block w-100 h-100">
              <img src="image/excute_thumbnail6.jpg" class="w-100 h-100 obj-cover" alt="工程環境與美化獎">
              <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 d-flex justify-content-center">
                <p class="text-white mb-0">工程環境與美化獎</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </div><!-- 獎項分類 End -->
    `,
    setup() {
        return {
        }
    }
};