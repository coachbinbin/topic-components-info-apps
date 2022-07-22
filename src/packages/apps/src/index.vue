<template>
    <div class="diamond-bar" >
        <div class="app-content-tags">
            <div
                v-for="(item,index) in data"
                :key="index"
                class="diamond-bar-item" 
                :style='{width: (100 / rowNumber ) + "%" }'
                @click="jumpApp(item)"
                :class="appTypes == 'normal' ? '':'imgs-diamonds-tags'">
                    <nt-image :width="'96px'" :height="'96px'" :src="item.iconUrl"></nt-image>
                    <p class="diamond-bar-text">{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'NtApps',
        props: {
            data: {
                type: Array,
                default:() =>[]
            },
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
        },
        data(){
            return{
                
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