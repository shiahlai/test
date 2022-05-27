const { ref, reactive, onMounted, computed, provide, inject } = Vue;
import ClusterData from "../json/fake.cluster-data-tw.js";

export default {
    name: 'MapClusters',
    template: `
    
    <section id="mapClusters">
    <button @click="showClusters" class="bg-slate-800/60 py-1 rounded text-white text-xl px-1">
    <i class="icon-pin"></i>
    </button>
    </section>  

    `,
    setup() {

        let map = ref();

        const setMap = (instance) => {
            map = instance;
            map.addLayer(clusters);
        }

        // //隨機產生座標
        // //建立要素的數量
        // var count = 1500;
        // //建立一個要素陣列
        // var features = new Array(count);
        // //座標偏移量
        // var e = 8500000;
        // for (var i = 0; i < count; i++) {
        //     //要素座標
        //     var coordinates = [3 * e * Math.random() - e, 2 * e * Math.random() - e];              
        //     //新建點要素
        //     features[i] = new ol.Feature(new ol.geom.Point(coordinates));
        // }

        //座標引入自fake.cluster-data.js
        const position = ClusterData;
        const features = Array(position.coordinates.length);
        position.coordinates.forEach((coordinate, index) => {
            const feature = new ol.Feature(new ol.geom.Point(ol.proj.fromLonLat(coordinate)));
            features[index] = feature;
        })



        //初始化向量資料來源
        var source = new ol.source.Vector({
            //要素
            features: features
        });

        //初始化聚合標註資料來源
        var clusterSource = new ol.source.Cluster({
            //標註元素之間的間距
            distance: 20,
            //資料來源
            source: source,
        });

        //樣式快取
        var styleCache = {};
        //初始化向量圖層
        var clusters = new ol.layer.Vector({
            //資料來源
            visible: false,
            source: clusterSource,
            //樣式
            style: function (feature, resolution) {
                //當前聚合標註資料來源的要素大小
                var size = feature.get('features').length;
                //定義樣式
                var style = styleCache[size];
                //如果當前樣式不存在則建立
                if (!style) {
                    style = [
                        //初始化樣式
                        new ol.style.Style({
                            //點樣式
                            image: new ol.style.Circle({
                                //點的半徑
                                radius: 10,
                                //筆觸
                                stroke: new ol.style.Stroke({
                                    color: '#fff'
                                }),
                                //填充
                                fill: new ol.style.Fill({
                                    color: '#3399cc'
                                })
                            }),
                            //文字樣式
                            text: new ol.style.Text({
                                //文字內容
                                text: size.toString(),
                                //填充
                                fill: new ol.style.Fill({
                                    color: '#fff'
                                })
                            })
                        })
                    ];
                    styleCache[size] = style;
                }
                return style;
            }
        });
        //將聚合標註圖層新增到map中
        // map.addLayer(clusters);

        //獲取新增聚合標註按鈕
        let toggle = false;
        const showClusters = function () {
            //獲取聚合標註資料來源中的要素
            var currentFeatures = clusterSource.getSource().getFeatures();
            toggle = !toggle;
            clusters.setVisible(toggle);
            //如果當前資料來源中沒有任何要素則新增
            if (currentFeatures.length == 0) {
                clusterSource.getSource().addFeatures(features);
                clusters.setSource(clusterSource);
                // map.addLayer(clusters);
            }
        };

        //獲取移除聚合標註的按鈕
        const removeClusters = function () {
            //清除聚合標註資料來源中的所有元素
            clusterSource.getSource().clear();
            //從map中移除聚合標註圖層
            map.removeLayer(clusters);
        };



        return {
            setMap,
            showClusters,
            removeClusters,
        }
    }
};