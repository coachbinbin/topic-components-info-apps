<template>
  <div id="app">
    <!-- 布局组件 -->
    <nt-layout type="flex" :gap="[0, 20]">
      <nt-aside width="300px"></nt-aside>
      <nt-layout>
        <nt-header height="66px">
          
        </nt-header>
        <main>
          <section>
            <h2>apps组件</h2>
            <div class="container">
              <nt-apps :data="appsData"></nt-apps>
            </div>
            <h2>info组件</h2>
            <div class="container">
              <nt-info :data="infoData"></nt-info>
            </div>
            <h2>信息列表组件</h2>
            <div class="container">
              <nt-info-tab :data="infoData"></nt-info-tab>
            </div>
            <h2>图文列表1组件</h2>
            <div class="container">
              <nt-info-grid :data="infoData" ></nt-info-grid>
            </div>
            <h2>图文列表2组件</h2>
            <div class="container">
              <nt-info-swiper :data="infoData" ></nt-info-swiper>
            </div>
            <h2>信息列表3组件</h2>
            <div class="container">
              <nt-info-source :data="infoData" ></nt-info-source>
            </div>
          </section>
        </main>
        <footer></footer>
      </nt-layout>
    </nt-layout>
  </div>
</template>

<script>
import Vue from 'vue';
import BaiduImage from './assets/baidu.png';
import defaultImg from './assets/icon/default.png';
import defaultInfoImg from './assets/tag/none.jpg';

Vue.component('VList', {
  props: {
    order: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    const tag = this.order ? 'ol' : 'ul';
    return h(tag, this.$slots.default);
  }
});

export default {
  name: 'App',

  data() {
    return {
      BaiduImage,
      defaultImg,
      defaultInfoImg,
      images: [
        'http://p0.qhimg.com/bdm/480_296_0/t01a75d0288dd00673a.jpg',
        'http://p1.qhimg.com/bdm/960_593_0/t01ab30fb7d486430a7.jpg',
        'http://p8.qhimg.com/bdm/480_296_0/t011b329f2e0b5232a8.jpg',
        'http://p4.qhimg.com/bdm/480_296_0/t012cde4a5058c156b7.jpg',
        'http://p4.qhimg.com/bdm/480_296_0/t01ea7e536d03740b30.jpg',
        'http://p7.qhimg.com/bdm/480_296_0/t013396c95cc389701e.jpg'
      ],
      treeData: [{
        label: '一级目录',
        children: [{
          label: '二级目录',
          children: [{
            label: '三级目录'
          }]
        }, {
          label: '一级目录'
        }]
      }],
      infoData: [
        {
            "collectionNum": 0,
            "publishDate": "2022-05-23",
            "topAble": false,
            "source": "政工办",
            "title": "基础功能升级完善技术要求",
            "imageResource": "/top.info/info/download/cover.nsp?entityId=38d0f62ce27849d096458cea9d7da2ad",
            "visitCount": 25,
            "infoType": 1,
            "viewUrl": "/cis.workspace4/new/info/view.nsp?id=38d0f62ce27849d096458cea9d7da2ad",
            "id": "2282e38aa30e4ff58b531950dab17edc",
            "moduleId": "319f841c551649e2aff9b9897a33c128",
            "contentType": 1,
            "author": "空军",
            "entityId": "38d0f62ce27849d096458cea9d7da2ad",
            "timeAxis": "/cis.workspace4/new/info/view.nsp?id=38d0f62ce27849d096458cea9d7da2ad",
            "commentNum": 0,
            "sequence": 10,
            "thumbs": 0
        },
        {
            "collectionNum": 0,
            "publishDate": "2022-05-16",
            "topAble": false,
            "source": "政工办",
            "title": "Netiler框架培训第一讲",
            "imageResource": "/top.info/info/download/cover.nsp?entityId=f1bb68e2a1454e16af7d2e89a36b6511",
            "visitCount": 7,
            "infoType": 1,
            "viewUrl": "/cis.workspace4/new/info/view.nsp?id=f1bb68e2a1454e16af7d2e89a36b6511",
            "id": "1a2600dd77184399a83711d03ca4a25a",
            "moduleId": "319f841c551649e2aff9b9897a33c128",
            "contentType": 1,
            "author": "宋江",
            "entityId": "f1bb68e2a1454e16af7d2e89a36b6511",
            "timeAxis": "/cis.workspace4/new/info/view.nsp?id=f1bb68e2a1454e16af7d2e89a36b6511",
            "commentNum": 0,
            "sequence": 20,
            "thumbs": 0
        },
        {
            "collectionNum": 0,
            "publishDate": "2022-05-16",
            "topAble": false,
            "source": "政工办",
            "title": "设备基本信息检查操作流程",
            "imageResource": "/top.info/info/download/cover.nsp?entityId=44e496bf0a7c4c2b9ab32d084a23eaa3",
            "visitCount": 31,
            "infoType": 1,
            "viewUrl": "/cis.workspace4/new/info/view.nsp?id=44e496bf0a7c4c2b9ab32d084a23eaa3",
            "id": "af16f50a15b449cb814664f3a54f62cc",
            "moduleId": "319f841c551649e2aff9b9897a33c128",
            "contentType": 1,
            "author": "宋江",
            "entityId": "44e496bf0a7c4c2b9ab32d084a23eaa3",
            "timeAxis": "/cis.workspace4/new/info/view.nsp?id=44e496bf0a7c4c2b9ab32d084a23eaa3",
            "commentNum": 0,
            "sequence": 10,
            "thumbs": 0
        },
        {
            "collectionNum": 0,
            "publishDate": "2022-05-13",
            "topAble": false,
            "source": "政工办",
            "title": "中国欧盟商会主席：如果中国赢了 我们也赢了",
            "imageResource": "/top.info/info/download/cover.nsp?entityId=2864739120dd4cb892646be50f650751",
            "visitCount": 9,
            "infoType": 1,
            "viewUrl": "/cis.workspace4/new/info/view.nsp?id=2864739120dd4cb892646be50f650751",
            "id": "b526217a54f54f3c83f587414bc06569",
            "moduleId": "319f841c551649e2aff9b9897a33c128",
            "contentType": 1,
            "author": "宋江",
            "entityId": "2864739120dd4cb892646be50f650751",
            "timeAxis": "/cis.workspace4/new/info/view.nsp?id=2864739120dd4cb892646be50f650751",
            "commentNum": 0,
            "sequence": 40,
            "thumbs": 0
        },
        {
            "collectionNum": 0,
            "publishDate": "2022-03-24",
            "topAble": false,
            "source": "安管办",
            "title": "关岛搞事？美军集训“新型跳岛战”",
            "imageResource": "/top.info/info/download/cover.nsp?entityId=a017d7ccbe0b441eb2eda3b35cfd73f4",
            "visitCount": 48,
            "infoType": 1,
            "viewUrl": "/cis.workspace4/new/info/view.nsp?id=a017d7ccbe0b441eb2eda3b35cfd73f4",
            "id": "a1b1f3c1f3644f53aeaa7d2e610c5571",
            "moduleId": "319f841c551649e2aff9b9897a33c128",
            "contentType": 1,
            "author": "root",
            "entityId": "a017d7ccbe0b441eb2eda3b35cfd73f4",
            "timeAxis": "/cis.workspace4/new/info/view.nsp?id=a017d7ccbe0b441eb2eda3b35cfd73f4",
            "commentNum": 0,
            "sequence": 20,
            "thumbs": 0
        },
        {
            "collectionNum": 2,
            "publishDate": "2022-03-17",
            "topAble": false,
            "source": "政工办",
            "title": "专用终端浏览器（升级）测试用例",
            "imageResource": "/top.info/info/download/cover.nsp?entityId=ed0a1422b1ba4805ae1807a45484657c",
            "visitCount": 48,
            "infoType": 1,
            "viewUrl": "/cis.workspace4/new/info/view.nsp?id=ed0a1422b1ba4805ae1807a45484657c",
            "id": "d3a23f150cea4003aa990a952b571cd2",
            "moduleId": "319f841c551649e2aff9b9897a33c128",
            "contentType": 1,
            "author": "root",
            "entityId": "ed0a1422b1ba4805ae1807a45484657c",
            "timeAxis": "/cis.workspace4/new/info/view.nsp?id=ed0a1422b1ba4805ae1807a45484657c",
            "commentNum": 0,
            "sequence": 10,
            "thumbs": 3
        }
    ],
    appsData:[
                        {
                        "userAuth": false,
                        "icon": true,
                        "type": 1,
                        "homePage": "/top.fencing/appConfig.nsp",
                        "serialVersionUID": "6806351729328087113",
                        "pingOK": false,
                        "alias": "app.top.fencing",
                        "id": "e47d9ec08936401d84085bf9a4fbd8ff",
                        "iconUrl": "/com.leadal.saloon.console/theme/images/default.png",
                        "architecture": 1,
                        "isIcon": true,
                        "helpUrl": "",
                        "broswerPath": "",
                        "isAdd": true,
                        "rocketName": "cookies",
                        "countUrl": "",
                        "name": "服务反馈",
                        "requireAuth": false,
                        "winMode": 1,
                        "configPage": "",
                        "categoryId": "927627e5473d48a3a64e4238457e38ed",
                        "autoFullscreen": true
                        },
                        {
                        "userAuth": false,
                        "icon": true,
                        "type": 1,
                        "homePage": "/kms.topic/",
                        "categoryName": "系统管理员",
                        "serialVersionUID": "6806351729328087113",
                        "pingOK": false,
                        "alias": "app.saloon.system",
                        "id": "22a406cfa63149528a4f7f192322f00b",
                        "iconUrl": "/com.leadal.saloon.console/theme/images/default.png",
                        "architecture": 1,
                        "isIcon": true,
                        "helpUrl": "",
                        "broswerPath": "",
                        "isAdd": true,
                        "rocketName": "cookies",
                        "countUrl": "",
                        "name": "专题工具",
                        "requireAuth": false,
                        "winMode": 1,
                        "configPage": "",
                        "categoryId": "927627e5473d48a3a64e4238457e38ed"
                        },
                        {
                        "userAuth": false,
                        "icon": true,
                        "type": 1,
                        "homePage": "/top.info/catalog/main.nsp",
                        "categoryName": "系统管理员",
                        "serialVersionUID": "6806351729328087113",
                        "pingOK": false,
                        "alias": "app.saloon.config",
                        "id": "025331364a104e91897c3729dbce3fb8",
                        "iconUrl": "/com.leadal.saloon.console/theme/icon/config.png",
                        "architecture": 1,
                        "isIcon": true,
                        "helpUrl": "",
                        "broswerPath": "",
                        "isAdd": true,
                        "rocketName": "cookies",
                        "countUrl": "",
                        "name": "栏目信息",
                        "requireAuth": false,
                        "winMode": 1,
                        "configPage": "/saloon.console/config/index.nsp",
                        "categoryId": "927627e5473d48a3a64e4238457e38ed"
                        },
                        {
                        "userAuth": false,
                        "icon": true,
                        "type": 1,
                        "homePage": "/saloon.console/config/index.nsp",
                        "categoryName": "系统管理员",
                        "serialVersionUID": "6806351729328087113",
                        "pingOK": false,
                        "alias": "app.saloon.config",
                        "id": "025331364a104e91897c3729dbce3fb8",
                        "iconUrl": "/com.leadal.saloon.console/theme/icon/config.png",
                        "architecture": 1,
                        "isIcon": true,
                        "helpUrl": "",
                        "broswerPath": "",
                        "isAdd": true,
                        "rocketName": "cookies",
                        "countUrl": "",
                        "name": "门户配置",
                        "requireAuth": false,
                        "winMode": 1,
                        "configPage": "/saloon.console/config/index.nsp",
                        "categoryId": "927627e5473d48a3a64e4238457e38e1"
                        }
                        ],
    }
  },

  methods: {
    handleBtnClick(type) {
      const direction = 'right';
      const offset = 100;
      const str = {
        success: '成功',
        error: '错误',
        warning: '警告',
        info: '信息'
      };
      this.$message({
        message: `这是一条${str[type]}提示！`,
        type,
        direction,
        offset
      });
    },
    handleMoreClick() {
      alert('more-click');
    },
    handleListItemClick(index) {
      alert(index);
    },
    handleCarouselChange(idx, oldIdx) {
    //   if (idx === oldIdx) {
    //     this.$message.warning('已经是最后一张了！');
    //   }
    },
    handleCarouselEnd(activedIndex) {
      this.$message.warning(`兄弟，你到头了啊！(${activedIndex})`);
    }
  }
};
</script>

<style>
body {
  --newtab-background-color: #F9F9FA;
  --newtab-border-primary-color: #B1B1B3;
  --newtab-border-secondary-color: #D7D7DB;
  --newtab-element-active-color: rgba(215,215,219,0.6);
  --newtab-element-hover-color: #EDEDF0;
  --newtab-icon-primary-color: rgba(12,12,13,0.8);
  --newtab-icon-secondary-color: rgba(12,12,13,0.6);
  --newtab-icon-tertiary-color: #D7D7DB;
  --newtab-inner-box-shadow-color: rgba(0,0,0,0.1);
  --newtab-inner-box-shadow-color-nte: rgba(9,32,77,0.12);
  --newtab-tile-shadow-secondary: rgba(29,17,51,0.2);
  --newtab-link-primary-color: #0060DF;
  --newtab-link-secondary-color: #008EA4;
  --newtab-text-conditional-color: #4A4A4F;
  --newtab-text-primary-color: #0C0C0D;
  --newtab-text-secondary-color: #737373;
  --newtab-textbox-background-color: #fff;
  --newtab-textbox-border: rgba(12,12,13,0.2);
  --newtab-textbox-focus-color: #0060DF;
  --newtab-textbox-focus-boxshadow: 0 0 0 1px #0060DF,0 0 0 4px rgba(0,96,223,0.3);
  --newtab-background-button-color: rgba(223,223,223,0.5);
  --newtab-background-button-text-color: #484848;
  --newtab-background-button-hover-color: rgba(196,196,196,0.5);
  --newtab-background-button-active-color: rgba(151,151,151,0.5);
  --newtab-button-primary-color: #0060DF;
  --newtab-button-secondary-color: inherit;
  --newtab-feed-button-background: #EDEDF0;
  --newtab-feed-button-text: #0C0C0D;
  --newtab-feed-button-background-faded: rgba(237,237,240,0.6);
  --newtab-feed-button-text-faded: rgba(12,12,13,0);
  --newtab-feed-button-spinner: #737373;
  --newtab-contextmenu-background-color: #F9F9FA;
  --newtab-contextmenu-button-color: #fff;
  --newtab-modal-color: #fff;
  --newtab-overlay-color: rgba(237,237,240,0.8);
  --newtab-section-header-text-color: #737373;
  --newtab-section-navigation-text-color: #737373;
  --newtab-section-active-contextmenu-color: #0C0C0D;
  --newtab-search-border-color: transparent;
  --newtab-search-dropdown-color: #fff;
  --newtab-search-dropdown-header-color: #F9F9FA;
  --newtab-search-header-background-color: rgba(249,249,250,0.95);
  --newtab-search-icon-color: rgba(12,12,13,0.4);
  --newtab-search-wordmark-color: #363959;
  --newtab-topsites-background-color: #fff;
  --newtab-topsites-icon-shadow: inset 0 0 0 1px var(--newtab-inner-box-shadow-color);
  --newtab-topsites-label-color: inherit;
  --newtab-topsites-outer-card-hover: rgba(0,0,0,0.05);
  --newtab-topsites-context-menu-hover: rgba(0,0,0,0.05);
  --newtab-card-active-outline-color: #D7D7DB;
  --newtab-card-background-color: #fff;
  --newtab-card-hairline-color: rgba(0,0,0,0.1);
  --newtab-card-placeholder-color: #D7D7DB;
  --newtab-card-shadow: 0 1px 4px 0 rgba(12,12,13,0.1);
  --newtab-snippets-background-color: #fff;
  --newtab-snippets-hairline-color: transparent;
  --newtab-background-primary-text-color: #151515;
  --newtab-focus-outline: rgba(0,96,223,0.25);
  --newtab-focus-border: #0060DF;
  --newtab-focus-border-selected: rgba(0,0,0,0.15);
  --newtab-seperator-line-color: #E1E0E6;
  --newtab-primary-action-background: #0060DF;
  --newtab-primary-action-background-off: #E9E9E9;
  --customize-menu-primary-text-color: #20123A;
  --customize-menu-check-fill: #fff;
  --customize-menu-background: #fff;
  --customize-menu-secondary-action-background: #F9F9FA;
  --customize-menu-secondary-action-background-hover: #EDEDF0;
  --customize-menu-secondary-action-background-active: #E2E2E6;
  --customize-menu-seperator-line-color: #E1E0E6;
  --customize-menu-first-shadow: rgba(9,32,77,0.12);
  --customize-menu-second-shadow: rgba(29,17,51,0.12);
  --customize-menu-primary-action-text: #fff;
  --customize-menu-line-color: #716F87;
  --newtab-search-first-shadow: rgba(9,32,77,0.12);
  --newtab-search-second-shadow: rgba(29,17,51,0.12);
  --newtab-search-text-color: #585165;
  --newtab-card-first-shadow: rgba(9,32,77,0.12);
  --newtab-card-second-shadow: rgba(29,17,51,0.12);
  --newtab-wordmark-color: #20123A;
}

body {
  padding: 0px;
	background: -moz-radial-gradient(circle,#042754,#01091a);
}

h2 {
  color: #fff;
}

.container {
  width: 500px;
  margin: 10px;
}

.t-align-center {
  text-align: center;
}
</style>

<style scoped>
/* Carousel - std */
.nt-demo__carousel {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
/* Carousel - end */


.box-container {
  margin: 0 10px;
  width: 360px;
}

.nt-button + .nt-button {
  margin-left: 6px;
}

.nt-box {
  border: 1px solid #000;
}

.nt-list >>> .nt-list__item {
  padding: 10px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.imgs-box .nt-image {
  margin: 0 10px;
  box-shadow: 0 3px 8px var(--newtab-inner-box-shadow-color-nte),
              0 0 2px var(--newtab-tile-shadow-secondary);
}

.nt-figure {
  padding: 16px;
  border-radius: 8px;
  box-sizing: border-box;
}

.nt-figure >>> img {
  background-color: #F9F9FA;
  border-radius: 8px;
  box-shadow: 0 3px 8px var(--newtab-inner-box-shadow-color-nte),
              0 0 2px var(--newtab-tile-shadow-secondary);
}

.nt-figure:hover {
  background-color: var(--newtab-topsites-outer-card-hover);
}
</style>
