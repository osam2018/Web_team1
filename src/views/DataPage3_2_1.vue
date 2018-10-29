<template>
    <el-main class="카테고리" id="winter->old->아">
        <br><br>
        <el-steps :active="5" align-center>
            <el-step title="Step 1" description="Feels"></el-step>
            <el-step title="Step 2" description="Seasons"></el-step>
            <el-step title="Step 3" description="Ages"></el-step>
            <el-step title="Step 4" description="Time"></el-step>
            <el-step title="Step 5" description="Finish"></el-step>
        </el-steps>
        <br><br>
             <h3>따뜻한 유자차 한잔에 약과 하나의 여유^^</h3>

        <a href="http://localhost:8080/#/home" target="_parent"><img src="../../ex_img/tis101j15120049.jpg" width="500" height="300" align="center"> </a>



    </el-main>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {}
</script>

