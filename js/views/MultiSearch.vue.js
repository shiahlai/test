import MapVue from './Map.vue.js'

const { ref, reactive, onMounted, computed, inject } = Vue;
const { useRouter, useRoute } = VueRouter;

export default {
    name: 'MultiSearch',
    components: {
      'map-vue' : MapVue,
    },
    template: `
    <!-- Hero section start -->
    <div class="position-relative w-100 carousel-img mb-4">
      <img src="image/hero1.jpg" class="w-100 h-100 obj-cover" alt="成果交流專區">
      <div class="position-absolute bg-black-opacity top-0 bottom-0 start-0 end-0 d-flex justify-content-center">
        <p
          class="position-absolute px-5 bottom-0 start-0 text-white hero-text d-md-block fw-bolder">
          成果交流專區</p>
      </div>
    </div><!-- Hero section end -->

    <div class=" bg-white">
      <div class="row gx-1">
        <!-- Left column -->
        <div class="col-xl-2 col-md-12 col-sm-12 bg-white px-5">
          <div class="d-flex align-items-center">
            <p class="small-text fw-bolder">
              <i class="icon-menu"></i>
              篩選
            </p>
          </div>

          <div class="pt-5">
            <p class="card-title fw-bolder">得獎年度</p>
            <select class="select-light">
              <option>全選</option>
            </select>
          </div>

          <div class="pt-5">
            <p class="card-title fw-bolder">執行單位</p>
            <select class="select-light">
              <option>全選</option>
            </select>
          </div>

          <div class="py-5">
            <p class="card-title fw-bolder">獎項</p>
            <div class="grid-form-check">
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label" for="flexCheckChecked">
                  全部獎項
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  金質獎
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  優良農建
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  園治獎
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  金安獎
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  台灣景觀大獎
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  國家卓越建設獎
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  工程環境與美化獎
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  優良工程展示
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  跨域亮點成效
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  僱工購料
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  其他軟體計畫
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  區域整合
                </label>
              </div>
              <div class="form-check content">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  成果書籍
                </label>
              </div>
            </div>

          </div>


        </div>

        <!-- Middle column -->
        <div class="col-xl-5 col-md-12 col-sm-12 bg-white">
          <div class="container">

            <div class="row d-flex bd-highlight mb-3">
              <div class="col subtitle p-2 bd-highlight">共103筆</div>
              <div class="col ms-auto p-2 bd-highlight">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-end">
                    <li class="page-item">
                      <a class="page-link text-info" href="#" aria-label="Previous" alt="上一頁">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link text-info" href="#" alt="第1頁">1</a></li>
                    <li class="page-item"><a class="page-link text-info" href="#" alt="第2頁">2</a></li>
                    <li class="page-item"><a class="page-link text-info" href="#" alt="第3頁">3</a></li>
                    <li class="page-item">
                      <a class="page-link text-info" href="#" aria-label="Next" alt="下一頁">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3 mb-5 overflow-auto mid-col-h">
              <!-- 案件 start -->
              <div class="col">
                <div class="card shadow-sm">

                  <div class="position-relative w-100 h-200 bd-placeholder-img">
                    <img src="image/info-hero.jpg" class="w-100 h-100 obj-cover card-img-top" alt="埔里鎮桃米社區休憩空間建置統包工程">
                    <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 top-0 d-flex justify-content-center">
                      <div class="d-flex align-items-start flex-column text-white content">
                        <div class="p-2 bd-highlight">
                          <ul class="list-unstyled">
                            <li>108 年度案件</li>
                            <li>埔里鎮桃米社區休憩空間建置統包工程</li>
                          </ul>
                        </div>
                        <div class="position-absolute bottom-0 px-2 bd-highlight">#園冶獎 #台灣景觀大獎</div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">
                        <ul class="list-unstyled fw-bolder small-text">
                          <li>執行單位： 南投分局</li>
                          <li>案件位置： 南投縣 埔里鎮 桃米里</li>
                        </ul>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight">
                        <a href="#/info" alt="點撃至資訊頁">
                            <i class="icon-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- 案件 end -->

              <!-- 案件 start -->
              <div class="col">
                <div class="card shadow-sm">

                  <div class="position-relative w-100 h-200 bd-placeholder-img">
                    <img src="image/card2.jpg" class="w-100 h-100 obj-cover card-img-top" alt="埔里鎮桃米社區休憩空間建置統包工程">
                    <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 top-0 d-flex justify-content-center">
                      <div class="d-flex align-items-start flex-column text-white content">
                        <div class="p-2 bd-highlight">
                          <ul class="list-unstyled">
                            <li>108 年度案件</li>
                            <li>埔里鎮桃米社區休憩空間建置統包工程</li>
                          </ul>
                        </div>
                        <div class="position-absolute bottom-0 px-2 bd-highlight">#園冶獎 #台灣景觀大獎</div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">
                        <ul class="list-unstyled fw-bolder small-text">
                          <li>執行單位： 南投分局</li>
                          <li>案件位置： 南投縣 埔里鎮 桃米里</li>
                        </ul>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight">
                        <a href="#/info" alt="點撃至資訊頁">
                            <i class="icon-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- 案件 end -->

              <!-- 案件 start -->
              <div class="col">
                <div class="card shadow-sm">

                  <div class="position-relative w-100 h-200 bd-placeholder-img">
                    <img src="image/card3.jpg" class="w-100 h-100 obj-cover card-img-top" alt="埔里鎮桃米社區休憩空間建置統包工程">
                    <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 top-0 d-flex justify-content-center">
                      <div class="d-flex align-items-start flex-column text-white content">
                        <div class="p-2 bd-highlight">
                          <ul class="list-unstyled">
                            <li>108 年度案件</li>
                            <li>埔里鎮桃米社區休憩空間建置統包工程</li>
                          </ul>
                        </div>
                        <div class="position-absolute bottom-0 px-2 bd-highlight">#園冶獎 #台灣景觀大獎</div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">
                        <ul class="list-unstyled fw-bolder small-text">
                          <li>執行單位： 南投分局</li>
                          <li>案件位置： 南投縣 埔里鎮 桃米里</li>
                        </ul>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight">
                        <a href="#/info" alt="點撃至資訊頁">
                            <i class="icon-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- 案件 end -->

              <!-- 案件 start -->
              <div class="col">
                <div class="card shadow-sm">

                  <div class="position-relative w-100 h-200 bd-placeholder-img">
                    <img src="image/hero1.jpg" class="w-100 h-100 obj-cover card-img-top" alt="埔里鎮桃米社區休憩空間建置統包工程">
                    <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 top-0 d-flex justify-content-center">
                      <div class="d-flex align-items-start flex-column text-white content">
                        <div class="p-2 bd-highlight">
                          <ul class="list-unstyled">
                            <li>108 年度案件</li>
                            <li>埔里鎮桃米社區休憩空間建置統包工程</li>
                          </ul>
                        </div>
                        <div class="position-absolute bottom-0 px-2 bd-highlight">#園冶獎 #台灣景觀大獎</div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">
                        <ul class="list-unstyled fw-bolder small-text">
                          <li>執行單位： 南投分局</li>
                          <li>案件位置： 南投縣 埔里鎮 桃米里</li>
                        </ul>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight">
                        <a href="#/info" alt="點撃至資訊頁">
                            <i class="icon-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- 案件 end -->

              <!-- 案件 start -->
              <div class="col">
                <div class="card shadow-sm">

                  <div class="position-relative w-100 h-200 bd-placeholder-img">
                    <img src="image/excute_thumbnail4.jpg" class="w-100 h-100 obj-cover card-img-top" alt="埔里鎮桃米社區休憩空間建置統包工程">
                    <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 top-0 d-flex justify-content-center">
                      <div class="d-flex align-items-start flex-column text-white content">
                        <div class="p-2 bd-highlight">
                          <ul class="list-unstyled">
                            <li>108 年度案件</li>
                            <li>埔里鎮桃米社區休憩空間建置統包工程</li>
                          </ul>
                        </div>
                        <div class="position-absolute bottom-0 px-2 bd-highlight">#園冶獎 #台灣景觀大獎</div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">
                        <ul class="list-unstyled fw-bolder small-text">
                          <li>執行單位： 南投分局</li>
                          <li>案件位置： 南投縣 埔里鎮 桃米里</li>
                        </ul>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight">
                        <a href="#/info" alt="點撃至資訊頁">
                            <i class="icon-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- 案件 end -->

              <!-- 案件 start -->
              <div class="col">
                <div class="card shadow-sm">

                  <div class="position-relative w-100 h-200 bd-placeholder-img">
                    <img src="image/card4.jpg" class="w-100 h-100 obj-cover card-img-top" alt="埔里鎮桃米社區休憩空間建置統包工程">
                    <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 top-0 d-flex justify-content-center">
                      <div class="d-flex align-items-start flex-column text-white content">
                        <div class="p-2 bd-highlight">
                          <ul class="list-unstyled">
                            <li>108 年度案件</li>
                            <li>埔里鎮桃米社區休憩空間建置統包工程</li>
                          </ul>
                        </div>
                        <div class="position-absolute bottom-0 px-2 bd-highlight">#園冶獎 #台灣景觀大獎</div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">
                        <ul class="list-unstyled fw-bolder small-text">
                          <li>執行單位： 南投分局</li>
                          <li>案件位置： 南投縣 埔里鎮 桃米里</li>
                        </ul>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight">
                        <a href="#/info" alt="點撃至資訊頁">
                            <i class="icon-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- 案件 end -->

              <!-- 案件 start -->
              <div class="col">
                <div class="card shadow-sm">
                  <div class="position-relative w-100 h-200 bd-placeholder-img">
                    <img src="image/info-hero.jpg" class="w-100 h-100 obj-cover card-img-top" alt="埔里鎮桃米社區休憩空間建置統包工程">
                    <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 top-0 d-flex justify-content-center">
                      <div class="d-flex align-items-start flex-column text-white content">
                        <div class="p-2 bd-highlight">
                          <ul class="list-unstyled">
                            <li>108 年度案件</li>
                            <li>埔里鎮桃米社區休憩空間建置統包工程</li>
                          </ul>
                        </div>
                        <div class="position-absolute bottom-0 px-2 bd-highlight">#園冶獎 #台灣景觀大獎</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">
                        <ul class="list-unstyled fw-bolder small-text">
                          <li>執行單位： 南投分局</li>
                          <li>案件位置： 南投縣 埔里鎮 桃米里</li>
                        </ul>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight">
                        <a href="#/info" alt="點撃至資訊頁">
                            <i class="icon-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- 案件 end -->

              <!-- 案件 start -->
              <div class="col">
                <div class="card shadow-sm">
                  <div class="position-relative w-100 h-200 bd-placeholder-img">
                    <img src="image/excute_thumbnail1.jpg" class="w-100 h-100 obj-cover card-img-top" alt="埔里鎮桃米社區休憩空間建置統包工程">
                    <div class="position-absolute bg-black-opacity bottom-0 start-0 end-0 top-0 d-flex justify-content-center">
                      <div class="d-flex align-items-start flex-column text-white content">
                        <div class="p-2 bd-highlight">
                          <ul class="list-unstyled">
                            <li>108 年度案件</li>
                            <li>埔里鎮桃米社區休憩空間建置統包工程</li>
                          </ul>
                        </div>
                        <div class="position-absolute bottom-0 px-2 bd-highlight">#園冶獎 #台灣景觀大獎</div>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <div class="d-flex bd-highlight">
                      <div class="p-2 w-100 bd-highlight">
                        <ul class="list-unstyled fw-bolder small-text">
                          <li>執行單位： 南投分局</li>
                          <li>案件位置： 南投縣 埔里鎮 桃米里</li>
                        </ul>
                      </div>
                      <div class="p-2 flex-shrink-1 bd-highlight">
                        <a href="#/info" alt="點撃至資訊頁">
                            <i class="icon-file-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div><!-- 案件 end -->

            </div>
          </div>
        </div>

        <!-- Map column start-->
        <div id="mapColumn" class="col-xl-5 col-md-12 col-sm-12 bg-white h-100">
          <map-vue :config="mapConfig"></map-vue>
        </div><!-- Map column end-->

      </div>
    </div>

    `,
    setup() {
        const mapConfig = reactive({
            clusters: {},
        });

        return {
            mapConfig,
        }
    }
};