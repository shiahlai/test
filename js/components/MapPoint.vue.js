const { ref, reactive, onMounted, computed, provide, inject, nextTick } = Vue;

export default {
  name: 'MapPoint',
  template: `
  <section id="mapPoint">
  </section>
    `,
  setup() {
    let map = ref()

    const setMap = (instance) => {
        map = instance;
        map.addLayer(vectorLayer) 
    }    

  
    

      // const view = map.getView();

      const iconFeature = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([120.91, 23.94])),
      });

      const iconStyle = new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 46],
          anchorXUnits: 'fraction',
          anchorYUnits: 'pixels',
          src: '../icon/map-pin-solid.svg',
        }),
      });

      iconFeature.setStyle(iconStyle);

      const vectorSource = new ol.source.Vector({
        features: [iconFeature],
      });

      const vectorLayer = new ol.layer.Vector({
        source: vectorSource,
      });

      // map.addLayer(vectorLayer)     

   




    return {
      setMap,
      
    }
  },


};