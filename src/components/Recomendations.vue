<template>
  <section class="rec">
    <h3 class="rec_title">Recommended for you</h3>
    <div class="rec_cards">
      <div class="rec_card" v-for="(item, index) in initialCards" :key="index">
        <img :src="`${item.type}.svg`" alt="" class="rec_card_type" />
        <img
          :src="item.link"
          alt="Image cannot be displayed"
          class="rec_card_img"
        />
        <div class="rec_card_descri">
          <h3 class="rec_card_title">{{ item.name }}</h3>
          <p class="rec_card_text">{{ item.text }}</p>
        </div>
      </div>

      <div class="rec_card_inner">
        <button class="rec_btn" @click="change" v-if="!tr">More</button>
      </div>

      <TransitionGroup name="x">
        <div
          class="rec_card"
          v-show="trigger"
          v-for="(item, index) in remainingCards"
          :key="index"
        >
          <img :src="`${item.type}.svg`" alt="" class="rec_card_type" />
          <img
            :src="item.link"
            alt="Image cannot be displayed"
            class="rec_card_img"
          />
          <div class="rec_card_descri">
            <h3 class="rec_card_title">{{ item.name }}</h3>
            <p class="rec_card_text">{{ item.text }}</p>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const tr = ref(false);
const trigger = ref(false);
const cards = ref([]);

onMounted(() => {
  fetch("https://tourism-express.onrender.com/cards")
    .then((res) => res.json())
    .then((data) => (cards.value = data.cards));
});

const initialCards = computed(() => cards.value.slice(0, 3));
const remainingCards = computed(() => cards.value.slice(3));

const change = () => {
  tr.value = true;
  setTimeout(() => {
    trigger.value = true;
  }, 200);
};
</script>

<style lang="scss" scoped>
.x-enter-active,
.x-leave-active {
  transition: opacity 0.5s ease;
}

.x-enter-from,
.x-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
