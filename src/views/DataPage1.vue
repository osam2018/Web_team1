<template>
    <el-main class="카테고리" id="봄가을->">
        <br><br>
        <el-steps :active="3" align-center>
            <el-step title="Step 1" description="Feels"></el-step>
            <el-step title="Step 2" description="Seasons"></el-step>
            <el-step title="Step 3" description="Ages"></el-step>
            <el-step title="Step 4" description="Time"></el-step>
            <el-step title="Step 5" description="Finish"></el-step>
        </el-steps>
        <br><br>
             <h3>당신의 연령대는?</h3>
        <div class="container1">
        <a href="http://localhost:8080/#/datapage1_1" target="_parent"><img src="../../ex_img/teen.jpg" width="500" height="300"class="image"  align="center"> </a>
        </div> <div class="container1">
        <a href="http://localhost:8080/#/datapage1_1" target="_parent"><img src="../../ex_img/mug_obj_20150414112758262.jpg" width="500" height="300"class="image"  align="center"> </a>
    </div>  <div class="container1">
        <a href="http://localhost:8080/#/datapage1_2" target="_parent"><img src="../../ex_img/dsafaatw.jpg" width="500" height="300"class="image"  align="center"> </a>
    </div>          <div class="container1">
        <a href="http://localhost:8080/#/datapage1_2" target="_parent"><img src="../../ex_img/545100.jpg" width="500" height="300"class="image"  align="center"> </a>
    </div>
    </el-main>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {}
</script>

<style>
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