<template>
  <div class="widget-wrapper border1">
    <div class="widget-header-wrapper">
      <h2 class="header-text">{{ caption }}</h2>
      <slot name="header">
        <div class="readmore" @click="jumpMore()">
          更多<span class="more">>></span>
        </div>
      </slot>
    </div>
    <div class="main-section-tags">
      <div class="main-scroll">
        <div
          class="main-section-item"
          v-for="(item, index) in data.slice(0, msgLength)"
          :key="index"
          @click="viewText(item)"
        >
          <div class="item-title">
            {{ item.title }}
          </div>
          <div class="item-center">
            <img
            :src="src"
              alt="infor img"
            />
            <div class="item-detail">
              <div class="item-detail-content">
                {{ item.summry ? item.summry : "暂无描述" }}
              </div>
              <div class="item-detail-bottom">
                <span>{{ item.date }}</span>
                <div class="item-detail-bottom-right">
                  <div>
                    <span class="icon star"></span>
                    {{ item.collectionNum ? item.collectionNum : "0" }}
                  </div>
                  <div>
                    <span class="icon good"></span>
                    {{ item.thumbs ? item.thumbs : "0" }}
                  </div>
                  <div>
                    <span class="icon eye"></span>
                    {{ item.visitCount ? item.visitCount : "0" }}
                  </div>
                  <div>
                    <span class="icon msg"></span>
                    {{ item.commentNum ? item.commentNum : "0" }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NtInfoSource',
  props: {
    data: {
      type: Array,
      default: () => [],
    },

    api: {
      type: String,
      default: '',
    },
    grids: {
      type: String,
      default: 'true',
    },
    caption: {
      type: String,
      custom: {
        name: '标题',
        type: 'INPUT',
      },
    },
    msgLength: {
      type: String,
      default: '60',
    },
    showCatalog: {
      type: String,
      default: 'info',
    },
    src: {
        type: String,
        default: ''
    },
  },
  data() {
    return {};
  },
  created() {
  },
  filters: {
    splitTime(val) {
      if (val) {
        return val.split(' ')[0];
      } else {
        return '';
      }
    },
  },
  methods: {
    getData() {
      this.data.forEach((item) => {
        item.summary = this.getSubstr(item.summary, 48);
      });
    },
    viewText(row) {
      window.open(row.viewUrl, '_blank');
    },
    jumpMore() {
    },
    getSubstr(para, length) {
      var count = 0,
        center = '';
      var regNum = /\d+/;
      var resStr = /[a-zA-Z]+/;
      for (let j = 0, l = para.length; j < l; j++) {
        if (count >= length - 1) {
          return center + '...';
        }
        center += para[j];
        if (regNum.test(para[j]) || resStr.test(para[j])) count += 0.5;
        else count++;
      }
      return center;
    },
  },
};
</script>

