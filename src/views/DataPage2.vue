<template>
    <el-main class="data-page" id="여름->">>
        <br><br>
        <el-steps :active="3" align-center>
            <el-step title="Step 1" description="Feels"></el-step>
            <el-step title="Step 2" description="Seasons"></el-step>
            <el-step title="Step 3" description="Ages"></el-step>
            <el-step title="Step 4" description="Time"></el-step>
            <el-step title="Step 5" description="Finish"></el-step>
        </el-steps>
        <h3>당신의 연령대는?</h3>
        <div class="container1">
        <a href="http://localhost:8080/#/datapage2_1" target="_parent"><img src="../../ex_img/teen.jpg" width="500" height="300"class="image"  align="center"> </a>
        </div>   <div class="container1">
        <a href="http://localhost:8080/#/datapage2_1" target="_parent"><img src="../../ex_img/mug_obj_20150414112758262.jpg" width="500" height="300" class="image"  align="center"> </a>
            </div>   <div class="container1">
        <a href="http://localhost:8080/#/datapage2_2" target="_parent"><img src="../../ex_img/dsafaatw.jpg"width="500" height="300" class="image" align="center"> </a>
        </div>  <div class="container1">
        <a href="http://localhost:8080/#/datapage2_2" target="_parent"><img src="../../ex_img/545100.jpg"width="500" height="300" class="image" align="center"> </a>
        </div>
    </el-main>

</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({

    })
    export default class DataPage extends Vue {
        public $http:any;
        private list:string[]=[];
        async mounted(){
            let result  = await this.$http.get("./mockup_data/data1.json");
            console.log(result.data.list);
            this.list = result.data.list;
        }

    }
</script>

<style>
    .about{
        line-height: 50px;
    }


     .container1 {

     }

    .image {
        opacity: 1;
        display: block;
        width: 500px;
        height: 300px;
        transition: .5s ease;
        backface-visibility: hidden;
    }

    .container1:hover .image {
        opacity: 0.7;
    }



</style>