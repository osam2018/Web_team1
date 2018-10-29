<template>
    <el-main >
        <h2>2.</h2>
        <el-time-picker
                v-model="value2"
                :picker-options="{
        selectableRange: '18:30:00 - 20:30:00'
        }"
                placeholder="Arbitrary time">
        </el-time-picker>
        <el-time-picker
                arrow-control
                v-model="value3"
                :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
                placeholder="Arbitrary time">
        </el-time-picker>
    </el-main>

</template>

<script>
    export default {
        data() {
            return {
                value2: new Date(2018, 10, 26, 10, 10),
                value3: new Date(2018, 10, 26, 22, 40)
            };
        }
    }
</script>

<style scoped>
    .about{
        line-height: 30px;
    }
</style>