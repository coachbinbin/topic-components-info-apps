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
    <div class="section gridtype">
      <ul v-if="data[0]">
        <li class="important-msg" @click="viewText(data[0])">
          <div class="important-img">
            <nt-image :width="'100px'" :height="'70px'" :src="data[0].imageResource"></nt-image>
          </div>
          <div class="important-info">
            <div class="important-title">
              <span :class="data[0].topAble ? 'top-able' : ''">{{
                data[0].topAble ? "置顶" : ""
              }}</span
              >{{ data[0].title }}
            </div>
            <div class="important-souce">
              <span>{{ data[0].source }}</span
              ><span class="important-souce-span"
                >{{ data[0].publishDate }}
              </span>
            </div>
            <ol>
              <li>
                <span class="icon star"></span
                >{{ data[0].collectionNum ? data[0].collectionNum : "0" }}
              </li>
              <li>
                <span class="icon good"></span
                >{{ data[0].thumbs ? data[0].thumbs : "0" }}
              </li>
              <li>
                <span class="icon eye"></span
                >{{ data[0].visitCount ? data[0].visitCount : "0" }}
              </li>
              <li>
                <span class="icon msg"></span
                >{{ data[0].commentNum ? data[0].commentNum : "0" }}
              </li>
            </ol>
          </div>
        </li>
        <li
          class="normsg"
          :class="item.topAble ? 'top-row' : ''"
          v-for="(item, index) in data.slice(1, msgLength)"
          :key="index"
          @click="viewText(item)"
        >
          <span :class="item.topAble ? 'top-able' : ''">{{
            item.topAble ? "置顶" : ""
          }}</span>
          <span class="no-img-title">{{ item.title }}</span>
          <div class="menu-time">{{ item.publishDate | splitTime }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NtInfoGrid',
  props: {
    caption: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: () => [],
    },
    api: {
      type: String,
      default: '',
    },
    msgLength: {
      type: String,
      default: '60',
    },
    grids: {
      type: String,
      default: 'true',
    },
    showCatalog: {
      type: String,
      default: 'info',
    },
  },
  data() {
    return {
      catalogId: '',
      // data:[
      //     {title:'好的',publishDate:'2021-08-20',topAble:true,imageResource:'1111'},
      //     {title:'好的',publishDate:'2021-08-20'},
      //     {title:'好的',publishDate:'2021-08-20'}
      // ]
    };
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
  created() {
  },
  mounted() {},
  methods: {
    viewText(row) {
      window.open(row.viewUrl, '_blank');
    },
    jumpMore() {
    },
    init(id) {},
  },
};
</script>

