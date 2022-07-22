import InfoGrid from './src/index.vue';

InfoGrid.install = function(Vue) {
  Vue.component(InfoGrid.name, InfoGrid);
};

export default InfoGrid;
