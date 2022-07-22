## NetilerUI

1. 安装依赖

```bash
npm install
```

2. 构建组件

```bash
npm build
```

3. 运行 example

```bash
npm run serve
```

4. main.js 引入本地工程全局 注册组件

```bash
import Vue from 'vue';
import NetilerUI from 'topic-components-info-apps/lib';
import 'topic-components-info-apps/lib/theme-chalk/index.css';
Vue.use(NetilerUI);
```

5.组件列表 组件名称

```bash
1. apps 组件

<nt-apps></nt-apps>

2.info组件

<nt-info></nt-info>

3.信息列表组件

<nt-info-tab></nt-info-tab>

4.图文列表1组件

<nt-info-grid></nt-info-grid>

5.信息列表3组件

<nt-info-source></nt-info-source>

6.图文列表2组件

<nt-info-swiper></nt-info-swiper>


```

6. 组件接收 props

```bash
组件标题
caption: {
    type: String,
    default: '',
}
组件数据源
data: {
    type: Array,
    default: () => [],
},
```
