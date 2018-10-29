<template>
    <el-menu
            default-active="sidepage1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @select="handleSelect"
            @close="handleClose">
        <el-menu-item index="sidepage1">
            <i class="el-icon-phone-outline"></i>
            <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1. 전화번호&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
        </el-menu-item>
        <el-menu-item index="sidepage2">
            <i class="el-icon-bell"></i>
            <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2. 예약하기&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
        </el-menu-item>
        <el-menu-item index="sidepage3">
            <i class="el-icon-info"></i>
            <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3. 정보&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
        </el-menu-item>
        <el-menu-item index="sidepage4">
            <i class="el-icon-location"></i>
            <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp4. 위치&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class SideMenu extends Vue {
        public activePage:string ="SidePage1";

        handleOpen(key:string, keyPath:string) {
            console.log("open ", key, keyPath);
        }

        handleClose(key:string, keyPath:string) {
            console.log("close", key, keyPath);
        }

        handleSelect(key:string, keyPath:string){
            console.log("select", key, keyPath);
            this.$router.replace("/sidepage/"+key);
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #F56C6C;
    }
</style>
