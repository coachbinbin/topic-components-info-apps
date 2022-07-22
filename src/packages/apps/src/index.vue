<template>
    <div class="diamond-bar" >
        <div class="app-content-tags">
            <div
                v-for="(item,index) in appsData"
                :key="index"
                class="diamond-bar-item" 
                :style='{width: (100 / rowNumber ) + "%" }'
                @click="jumpApp(item)"
                :class="appTypes == 'normal' ? '':'imgs-diamonds-tags'">
                    <img :src="src" />
                    <p class="diamond-bar-text">{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'NtApps',
        props: {
            // appsData: {
            //     type: Array,
            //     default:() =>[]
            // },
            appTypes:{
            	type:String,
            	default:"normal"
            },
            rowApps:{
                type:Number,
                default:4	    	
            },
            api:{
                type:String,
                default:''	    
            },
            src: {
                type: String,
                default: ''
            },
        },
        data(){
            return{
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
        computed: {
            rowNumber(){
                let num=Number(this.rowApps)
                return num
            },
        },
        created(){
        },
        mounted() {
        },
        methods: { // 所有的方法编写处
            jumpApp(app){
                window.open(app.homePage,'_blank');
            },
        }
    
    }
</script>