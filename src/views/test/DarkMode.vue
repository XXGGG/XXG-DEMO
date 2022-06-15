<template>
    <div class="box">
       DARKMODE.JS
    </div>
</template>


<script setup >
import Darkmode from 'darkmode-js';

new Darkmode().showWidget();
</script>

<style scoped>
.box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    font-size: 30px;
}
</style>