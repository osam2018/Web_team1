<template>
    <el-main class="카테고리" id="봄가을->젊음->점">
        <br><br>
        <el-steps :active="5" align-center>
            <el-step title="Step 1" description="Feels"></el-step>
            <el-step title="Step 2" description="Seasons"></el-step>
            <el-step title="Step 3" description="Ages"></el-step>
            <el-step title="Step 4" description="Time"></el-step>
            <el-step title="Step 5" description="Finish"></el-step>
        </el-steps>
        <br><br>
             <h3>선선한 날씨에 스시 한줄 뚝딱!</h3>

        <a href="http://localhost:8080/#/home" target="_parent"><img src="../../ex_img/luch1.jpeg" width="500" height="300" align="center"> </a>



    </el-main>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {}
</script>

