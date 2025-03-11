<template>
    <section class="reviews">
        <h3 class="reviews_title">Our clients experence</h3>
        <div class="reviews_inner">
            <swiper :modules="[Keyboard]" :loop="true" :spaceBetween="30"
            class="swiper">
            <swiper-slide>
                <div class="reviews_card">
                    <img src="../assets/Img/travellers.png" alt="" class="reviews_card_img">
                    <p class="reviews_descr">
                        If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to.
                        <span>Anthony Bourdain</span>
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews_card">
                    <img src="../assets/Img/travellers.png" alt="" class="reviews_card_img">
                    <p class="reviews_descr">
                        If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to.
                        <span>Anthony Bourdain</span>
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews_card">
                    <img src="../assets/Img/travellers.png" alt="" class="reviews_card_img">
                    <p class="reviews_descr">
                        If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to.
                        <span>Anthony Bourdain</span>
                    </p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="reviews_card">
                    <img src="../assets/Img/travellers.png" alt="" class="reviews_card_img">
                    <p class="reviews_descr">
                        If you’re twenty-two, physically fit, hungry to learn and be better, I urge you to travel – as far and as widely as possible. Sleep on floors if you have to.
                        <span>Anthony Bourdain</span>
                    </p>
                </div>
            </swiper-slide>
        </swiper>
        <img src="../assets/Img/knife.png" alt="Knife" class="reviews_knife">
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
</script>

<style lang="scss" scoped></style>