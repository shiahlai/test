import mapInit from '../utils/map-init.js'
import MapControlMousePosition from '../components/MapControlMousePosition.vue.js'
import MapChangeBasemap from '../components/MapChangeBasemap.vue.js'
import MapInfo from '../components/MapInfo.vue.js'
import MapGeolocation from '../components/MapGeolocation.vue.js'
import MapTaiwanPosition from '../components/MapTaiwanPosition.vue.js'
import MapClear from '../components/MapClear.vue.js'
import MapClusters from '../components/MapClusters.vue.js'
import MapPoint from '../components/MapPoint.vue.js'


const { ref, reactive, onMounted, computed, provide, inject } = Vue;
const { useRouter, useRoute } = VueRouter;

export default {
    name: 'MapVue',
    components: {
        'map-control-mouse-position': MapControlMousePosition,
        'map-change-basemap': MapChangeBasemap,
        'map-info': MapInfo,
        'map-geolocation': MapGeolocation,
        'map-taiwan-position': MapTaiwanPosition,
        'map-clear': MapClear,
        'map-clusters' : MapClusters,
        'map-point' : MapPoint,
    },
    template: `
    <!-- main -->
    <main id="mapPage" class="bg-white">
        <article 
        id="map"
         tabindex="0">
            <div 
            class="rt-block" 
            v-if="olMap.rtBlock">
                <map-change-basemap :map="olMap.map"></map-change-basemap>
                <map-clusters ref="clusters" v-if="config.clusters"></map-clusters>
                <map-point ref="point" v-if="config.point"></map-point>

              
            </div>
            
            <div 
            class="rm-block" 
            v-if="olMap.rmBlock">
                <section id="mapZoomInOut"></section>
              
                <map-taiwan-position ref="twp"></map-taiwan-position>
                
                <map-geolocation ref="geo"></map-geolocation>

                <map-clear ref="clear"></map-clear>
                

            </div>

            <div 
            class="rb-block" 
            v-if="olMap.rbBlock">
                <map-info></map-info>

                <map-control-mouse-position></map-control-mouse-position>
                
                <section id="mapScaleLine"></section>
            </div>

        </article>
    </main>
    `,

    // 增加一個 attribute 提供外部定義 map 的行為的方法
    props: ['config'],

    setup(props) {

        const geo = ref();
        const twp = ref();
        const clear = ref();
        const clusters = ref();
        const point = ref();

        let olMap = reactive({
            rtBlock: true,
            rbBlock: true,
            rmBlock: true,
        });

        provide('olMap', olMap);

        onMounted(() => {
            olMap.map = mapInit();

            geo.value.drawIcon(olMap.map)
            twp.value.setMap(olMap.map)
            clear.value.setMap(olMap.map)

            if(props.config.clusters) {
                clusters.value.setMap(olMap.map)
            }

            if(props.config.point) {
                point.value.setMap(olMap.map)
            }

        })

        return {
            olMap,
            geo,
            twp,
            clear,
            clusters,
            point,
        }
    }
};