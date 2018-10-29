<template>
    <el-main class="data-page" id="계절->">
        <br><br>
        <el-steps :active="2" align-center>
            <el-step title="Step 1" description="Feels"></el-step>
            <el-step title="Step 2" description="Seasons"></el-step>
            <el-step title="Step 3" description="Ages"></el-step>
            <el-step title="Step 4" description="Time"></el-step>
            <el-step title="Step 5" description="Finish"></el-step>
        </el-steps>
        <br><br>
        <h3>지금의 계절은 무엇인가요?</h3>

        <div class="container1">
        <a href="http://localhost:8080/#/datapage1" target="_parent"><img src="../../ex_img/spring-cover-2.jpg" width="500" height="300"class="image"  align="center"> </a>
        </div>    <div class="container1">
        <a href="http://localhost:8080/#/datapage2" target="_parent"><img src="../../ex_img/summer-vacation-777x437.jpg" width="500" height="300"class="image"  align="center"> </a>
    </div>     <div class="container1">
        <a href="http://localhost:8080/#/datapage1" target="_parent"><img src="../../ex_img/fall-1072821_1920_0.jpg" width="500" height="300"class="image"  align="center"> </a>
    </div>          <div class="container1">
        <a href="http://localhost:8080/#/datapage3" target="_parent"><img src="../../ex_img/winter.jpg" width="500" height="300"class="image"  align="center"> </a>
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

<style scoped>
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