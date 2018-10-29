<template>
    <el-container class="home">
        <el-main>

            <br><br><br><br>
            <h1>Have a good meal</h1><br>

            <div class="container">
            <a href="http://localhost:8080/#/about" target="_parent"><img src="../../ex_img/babsang2.jpg"  align="center" class="image1" > </a>
            </div>
        </el-main>
    </el-container>
</template>


<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({
        components: {
            HelloWorld
        }
    })
    export default class Home extends Vue {}
</script>
<style>
    .container {
        position: absolute;
        width: 100%;
    }

    .image1 {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
    }

    .container:hover .image1 {
        opacity: 0.7;
    }

</style>
