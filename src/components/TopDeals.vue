<template>
    <section class="deals">
        <h3 class="deals_title">
            Today’s Top Deals
            <span></span>
        </h3>
        <div class="deals_cards">
            <div class="deals_card" v-for="(item, index) in tops" :key="index">
                <img :src="`${item.type}.svg`" alt="" class="deals_card_type">
                <img :src="item.link" alt="" class="deals_card_img">
                <div class="deals_card_descri">
                    <h3 class="deals_card_title">{{ item.title }}</h3>
                    <p class="deals_card_text">{{ item.text }}</p>
                </div>
            </div>
            <div class="deals_card">
                <img src="../assets/Img/plane.svg" alt="" class="deals_card_type">
                <img src="../assets/Img/planecard.png" alt="" class="deals_card_img">
                <div class="deals_card_descri">
                    <h3 class="deals_card_title">Royal caribbean transatlantic cruise</h3>
                    <p class="deals_card_text">Royal Caribbean Group, formerly known as Royal Caribbean Cruises Ltd., is a global cruise holding company incorporated in Liberia and based in Miami, Florida, US. It is the world's second-largest cruise line operator, after Carnival Corporation & plc.  </p>
                </div>
            </div>
            <div class="deals_card">
                <img src="../assets/Img/boat.svg" alt="" class="deals_card_type">
                <img src="../assets/Img/boarcard.png" alt="" class="deals_card_img">
                <div class="deals_card_descri">
                    <h3 class="deals_card_title">Royal caribbean transatlantic cruise</h3>
                    <p class="deals_card_text">Royal Caribbean Group, formerly known as Royal Caribbean Cruises Ltd., is a global cruise holding company incorporated in Liberia and based in Miami, Florida, US. It is the world's second-largest cruise line operator, after Carnival Corporation & plc.  </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const tops = ref([]);

onMounted(() => {
  fetch("https://tourism-express.onrender.com/tops")
    .then((res) => res.json())
    .then((data) => (tops.value = data.cards));
});
</script>

<style lang="scss" scoped>

</style>