<template>

    <el-container id="app">
        <el-header class="header">
            <div id="nav">

                <div class="line"></div>
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        @select="handleSelect"
                        background-color="#ffffff"
                        text-color="#000000"
                        active-text-color="#000000">
                    <el-menu-item index="home" align="center">결정장애의 골목식당</el-menu-item>

                </el-menu>

            </div>
        </el-header>
        <router-view/>



    </el-container>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    @Component({

    })
    export default class Home extends Vue {
        public activePage:string ="home";
        handleSelect(key:string, keyPath:string) {
            this.$router.replace("/"+key);
        }
    }
</script>

<style >
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #ffffff;
    }
    .el-header, .el-footer {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #F56C6C;
        color: #333;
    }

    .el-main {
        color: #333;
        text-align: center;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

</style>

