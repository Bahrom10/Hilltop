<template>
    <section class="dest">
        <h3 class="dest_title">Top Destinations</h3>
        <div class="dest_img" v-if="!tr">
            <div class="dest_img_col1">
                <img class="dest_img1" :src="`dest1.png`" alt="IMG">
                <img class="dest_img5" :src="`dest5.png`" alt="IMG">
            </div>
            <div class="dest_img_center">
            <div class="dest_img_row"><img class="dest_img2" :src="`dest2.png`" alt="IMG">
                <img class="dest_img3" :src="`dest3.png`" alt="IMG"></div>
            <div class="dest_img_row"><img class="dest_img6" :src="`dest6.png`" alt="IMG">
                <img class="dest_img7" :src="`dest7.png`" alt="IMG"></div>
            </div>
            <div class="dest_img_col2">
                <img class="dest_img4" :src="`dest4.png`" alt="IMG">
                <img class="dest_img8" :src="`dest8.png`" alt="IMG">
            </div>
        </div>
        <div class="dest_media" v-else>
            <img src="../assets/Img/dest1.png" alt="">
            <div class="dest_media_grid">
                <img src="../assets/Img/dest2.png" alt="">
                <img src="../assets/Img/dest3.png" alt="">
                <img src="../assets/Img/dest5.png" alt="">
                <img src="../assets/Img/dest6.png" alt="">
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const tr = ref(window.innerWidth <= 600)
</script>

<style lang="scss" scoped>

</style>
