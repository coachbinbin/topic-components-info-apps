import Aside from './packages/aside/index.js';
import Box from './packages/box/index.js';
import Button from './packages/button/index.js';
import CarouselItem from './packages/carousel-item/index.js';
import Carousel from './packages/carousel/index.js';
import Figure from './packages/figure/index.js';
import Header from './packages/header/index.js';
import Image from './packages/image/index.js';
import Layout from './packages/layout/index.js';
import ListItem from './packages/list-item/index.js';
import List from './packages/list/index.js';
import Message from './packages/message/index.js';
import Tree from './packages/tree/index.js';
import Apps from './packages/apps/index.js';
import Info from './packages/info/index.js';
import InfoGrid from './packages/infogrid/index.js';
import InfoSource from './packages/infosource/index.js';
import InfoSwiper from './packages/infoswiper/index.js';
import InfoTab from './packages/infotab/index.js';

const components = [
  Aside,
  Box,
  Button,
  Carousel,
  CarouselItem,
  Figure,
  Header,
  Image,
  Layout,
  ListItem,
  List,
  Message,
  Tree,
  Apps,
  Info,
  InfoGrid,
  InfoSource,
  InfoSwiper,
  InfoTab,
];

const install = function(Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = Message;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Aside,
  Box,
  Button,
  Carousel,
  CarouselItem,
  Figure,
  Header,
  Image,
  Layout,
  ListItem,
  List,
  Message,
  Tree,
  Apps,
  Info,
  InfoGrid,
  InfoSource,
  InfoSwiper,
  InfoTab,
};
