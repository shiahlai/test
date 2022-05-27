import MapVue from "./Map.vue.js";

const { ref, reactive, onMounted, computed, inject } = Vue;
const { useRouter, useRoute } = VueRouter;
export default {
    name: 'Info',
    components: {
      'map-vue' : MapVue,
    },
    template: `
    <!-- Hero section start -->
    <div class="position-relative w-100 carousel-img mb-4">
      <img src="image/info-hero.jpg" class="w-100 h-100 obj-cover" alt="埔里鎮桃米社區休憩空間建置統包工程">
      <div class="position-absolute bg-black-opacity top-0 bottom-0 start-0 end-0 d-flex justify-content-center">
        <div class="row position-absolute px-5 bottom-0 start-0 end-0 hero-text fw-bolder text-white">
          <div class="col-xl-10 col-md-8 col-sm-6 text-start">
            <p class="fw-bolder text-start">108 年度案件 埔里鎮桃米社區休憩空間建置統包工程</p>
          </div>
          <div class="col-xl-2 col-md-4 col-sm-6 text-end">
            <a class="btn btn-green text-white" href="#/multiSearch" role="button" alt="回上一頁">
              回上一頁
            </a>
          </div>
        </div>
      </div>
    </div><!-- Hero section end -->

    <div class="bg-light">
      <div class="container">
        <div class="row g-2">

          <div class="col-xl-6 col-md-12 col-sm-12">
            <!-- 獎項start -->
            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-medal"></i>
                  獎項
                </p>
              </div>

              <div class="timeline">
                <div class="timeline-item">
                  <div class="content ps-2">
                    <p>109年度 園冶獎 (類別：公共建築景觀類 )</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <div class="content ps-2">
                    <p>110年度 台灣景觀大獎 (類別：特殊主題類 優質獎)</p>
                  </div>
                </div>
              </div>
            </div><!-- 獎項end -->

            <!-- 成效說明start -->
            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-file-alt"></i>
                  成效說明
                </p>
              </div>

              <ul class="content list-unstyled list-decimal">
                <li>竹空間多功能場域A=5m*15m</li>
                <li>竹空間休憩設施A=10m*15m</li>
                <li>環境綠美化改善A=20m*20m</li>
                <li>指示牌5處</li>
                <li>步道建置</li>
              </ul>
            </div><!-- 成效說明end -->

            <!-- 計畫效益start -->
            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-file-alt"></i>
                  計畫效益
                </p>
              </div>
              <div>
                <ul class="list-unstyled">
                  <li class="pb-3">(一)提供休憩與學習的空間
                    紙教堂屬於桃米生態區中重要活動的區域，西邊荷花田這區相對較少樹蔭，在此運用竹構設計，結合當代工藝，設置遮陽休憩的設施。
                  </li>
                  <li class="pb-3">
                    (二)深化人與自然的關聯
                    透過竹構設計的型態以及空間上與自然的融合，加深人們和自然環境的關係，進而促使人文活動得到自然的滋養，變得更加多采多姿。
                  </li>
                  <li class="pb-3">
                    (三)竹文化的展現
                    竹子在臺灣是各地易取得的素材，曾有過輝煌的年代，在亞洲文明也佔有一席之地。透過竹構造和竹工藝的呈現，訴說一個敬重土地的故事，喚醒社會大眾對資源保育的意識。
                  </li>
                  <li class="pb-3">
                    (四)發展成為人文藝術社區
                    竹編藝術空間與荷田農民市集的特色竹構建築將與鄰近的紙教堂形成桃米地標，成為將來大型的藝術活動創作基地，提供居民與參訪者更多學習互動的機會，提升人文藝術的涵養，發展桃米社區當地的特色藝術文化。
                  </li>
                  <li class="pb-3">
                    (五)串聯周邊人文與自然特色
                    除了提供藝術活動的場地，竹編藝術空間與農民市集也結合了當地農業與生態旅行等產業活動，提供外地訪客在整個社區參訪活動中一個展開學習或寧靜回顧的空間。除此之外也能提供整個社區互動的集會活動空間，增進社區情感與凝聚力。
                  </li>
                </ul>
              </div>
            </div><!-- 計畫效益end -->

            <!-- 參賽文件start -->
            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-file-alt"></i>
                  參賽文件
                </p>
              </div>
            </div><!-- 參賽文件end -->

            <!-- 成效簡報start -->
            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-file-alt"></i>
                  成效簡報
                </p>
              </div>
            </div><!-- 成效簡報end -->
          </div>

          <div class="col-xl-6 col-md-12 col-sm-12">
            <!-- 案件資訊start -->
            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-file-alt"></i>
                  案件資訊
                </p>
              </div>

              <div>
                <div class="row">
                  <div class="col-4">
                    <p class="content text-start">執行單位</p>
                  </div>
                  <div class="col-8">
                    <p class="content text-start">南投分局</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p class="content text-start">案件位置</p>
                  </div>
                  <div class="col-8">
                    <p class="content text-start">南投縣 埔里鎮 桃米里</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p class="content text-start">工程經費</p>
                  </div>
                  <div class="col-8">
                    <p class="content text-start">5000 (千元)</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p class="content text-start">工程內容</p>
                  </div>
                  <div class="col-8">
                    <ul class="content list-decimal">
                      <li>竹空間多功能場域A=5m*15m</li>
                      <li>竹空間休憩設施A=10m*15m</li>
                      <li>環境綠美化改善A=20m*20m</li>
                      <li>指示牌5處</li>
                    </ul>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p class="content text-start">設計監造單位</p>
                  </div>
                  <div class="col-8">
                    <p class="content text-start">鼎晟工程顧問有限公司</p>
                  </div>
                </div>

                <div class="row">
                  <div class="col-4">
                    <p class="content text-start">承包廠商</p>
                  </div>
                  <div class="col-8">
                    <p class="content text-start">悦山工坊</p>
                  </div>
                </div>
              </div>
            </div><!-- 案件資訊end -->

            <!-- 成果照片 start -->
            <div class="border bg-white p-3 mb-2">
              <div class="row">
                <div class="col-4">
                  <div class="d-flex align-items-center">
                    <p class="card-title fw-bolder">
                      <i class="icon-images"></i>
                      成果照片
                    </p>
                  </div>
                </div>
                <div class="col-6">
                  <p class="small-text text-secondary text-start">共三張，點擊展開照片瀏覽</p>
                </div>
              </div>

              <div id="resultSlide" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">

                  <div class="carousel-item active">
                    <div class="row">

                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-card1.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>


                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-hero.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>


                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-card2.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>

                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="row">

                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-card1.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>


                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-hero.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>


                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-card2.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>

                    </div>
                  </div>

                  <div class="carousel-item">
                    <div class="row">

                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-card1.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>


                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-hero.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>


                      <div class="col-4">
                        <!-- Button trigger modal -->
                        <button type="button" class="p-0 border-0 h-100" data-bs-toggle="modal" data-bs-target="#modal">
                          <img src="image/info-card2.jpg" class="info-img" alt="成果照片">
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#resultSlide" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">上一張</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#resultSlide" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">下一張</span>
                </button>
              </div>

            </div><!-- 成果照片 end -->

            <!-- 案件位置 start -->
            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-map-marked-alt"></i>
                  案件位置
                </p>
              </div>
              <div id="caseMap">
              <!-- 使用 map config 客製化 map 在這頁的行為 -->
              <map-vue :config="mapConfig"></map-vue>                
              </div>
            </div><!-- 案件位置 end -->

            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-file-alt"></i>
                  書籍成果
                </p>
              </div>
            </div>

            <div class="border bg-white p-3 mb-2">
              <div class="d-flex align-items-center">
                <p class="card-title fw-bolder">
                  <i class="icon-file-alt"></i>
                  附件或相關資料
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>


    <!-- Modal -->
    <div class="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" data-bs-pause="false"
        data-bs-ride="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
            <h5 class="modal-title fw-bolder">桃米1</h5>
            <button type="button" class="px-2" data-bs-dismiss="modal" aria-label="Close">
            <i class="icon-cancel"></i></button>
            </div>
            <div class="modal-body">


            <!-- Modal 內的輪播 start -->
            <div id="modalCarousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 carousel-img-modal" src="image/info-card1.jpg" alt="成果照片">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 carousel-img-modal" src="image/info-card2.jpg" alt="成果照片">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 carousel-img-modal" src="image/info-hero.jpg" alt="成果照片">
                </div>
                </div>
                <button type="button" class="carousel-control-prev" data-bs-target="#modalCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">上一張</span>
                </button>
                <button type="button" class="carousel-control-next" data-bs-target="#modalCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">下一張</span>
                </button>
            </div>
            <!-- Modal 內的輪播 end -->

            <div>內容</div>

            </div>
        </div>
        </div>
    </div>
    

    `,
    setup() {
        const mapConfig = reactive({
            point: {},
        });

        return {
            mapConfig,
        }
    }
};