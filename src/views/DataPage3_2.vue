<template>
    <el-main class="카테고리" id="winter->old->">
        <br><br>
        <el-steps :active="4" align-center>
            <el-step title="Step 1" description="Feels"></el-step>
            <el-step title="Step 2" description="Seasons"></el-step>
            <el-step title="Step 3" description="Ages"></el-step>
            <el-step title="Step 4" description="Time"></el-step>
            <el-step title="Step 5" description="Finish"></el-step>
        </el-steps>
        <br><br>
             <h3>현재 시간은?</h3>
        <div class="container1">
        <a href="http://localhost:8080/#/datapage3_2_1" target="_parent"><img src="../../ex_img/mo.jpg" width="500" height="300"class="image"  align="center"> </a>
        </div>    <div class="container1">
        <a href="http://localhost:8080/#/datapage3_2_2" target="_parent"><img src="../../ex_img/noon.jpg" width="500" height="300"class="image"  align="center"> </a>
        </div>
        <div class="container1">
        <a href="http://localhost:8080/#/datapage3_2_3" target="_parent"><img src="../../ex_img/din.jpg" width="500" height="300"class="image"  align="center"> </a>
        </div>
        <div class="container1">
        <a href="http://localhost:8080/#/datapage3_2_4" target="_parent"><img src="../../ex_img/mid.jpg" width="500" height="300"class="image"  align="center"> </a>
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