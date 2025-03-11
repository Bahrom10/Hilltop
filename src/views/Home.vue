<template>
  <main class="main">
    <div class="main_inner">
      <nav class="nav">
        <h3 class="nav_title">
          <img src="../assets/Img/Logo.png" alt="" class="nav_logo"> HillTop
        </h3>
        <ul class="nav_list">
          <li class="nav_link"><a href=""><img src="../assets/Img/tripe.svg" alt="">My Tripe</a></li>
          <li class="nav_link"><a href=""><img src="../assets/Img/headphone.png" alt="">Customer Care </a></li>
          <li class="nav_link"><a href=""><img src="../assets/Img/account.png" alt="">Account</a></li>
        </ul>
        <div class="hamburger-menu">
          <div class="hamburger" :class="{ 'is-active': isActive }" @click="toggleActive">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
          <Transition name="slide-fade">
            <ul class="nav_list" v-if="isActive">
              <li class="nav_link"><a href=""><img src="../assets/Img/tripe.svg" alt="">My Tripe</a></li>
              <li class="nav_link"><a href=""><img src="../assets/Img/headphone.png" alt="">Customer Care </a></li>
              <li class="nav_link"><a href=""><img src="../assets/Img/account.png" alt="">Account</a></li>
            </ul>
          </Transition>
        </div>

      </nav>
      <div class="main_content">
        <h2 class="main_content_title">
          Peace of mind
          <span>Find your destiny</span>
        </h2>

        <div class="main_content_booking">
          <div class="main_content_booking_btns">
            <button 
              v-for="(label, i) in bookingButtons"
              :key="i"
              :class="['main_content_booking_btn', { active: activeButtonIndex === i && tr }]"
              @click="change(i)"
            >
              {{ label }}
            </button>
          </div>
          <Transition name="slide-fade">
            <form action="" class="main_content_booking_form" v-if="tr">
              <div class="main_content_booking_form_div">
                <label for="check-in">Check-in</label>
                <input type="date" class="main_content_booking_form_input" id="check-in" required>
              </div>
              <div class="main_content_booking_form_div">
                <label for="check-out">Check-out</label>
                <input type="date" class="main_content_booking_form_input" id="check-out" required>
              </div>
              <div class="main_content_booking_form_div">
                <label for="rooms">Rooms</label>
                <input type="number" class="main_content_booking_form_input" id="rooms" min="1" value="1">
              </div>
              <div class="main_content_booking_form_div">
                <label for="adults">Adults</label>
                <input type="number" class="main_content_booking_form_input" id="adults" min="1" value="1">
              </div>
              <div class="main_content_booking_form_div">
                <label for="child">Children</label>
                <input type="number" class="main_content_booking_form_input" id="child" min="0" value="0">
              </div>
              <button class="main_content_booking_form_btn" @click.prevent="tr=false">Find Rooms</button>
            </form>
          </Transition>
        </div>
      </div>
    </div>
    <div class="main_bottom">
      <p class="main_bottom_text">
        <img src="../assets/Img/globe.png" alt=""> 30,000+ Things to do
      </p>
      <p class="main_bottom_text">
        <img src="../assets/Img/shield.png" alt=""> 3,000+ Tour operators
      </p>
      <p class="main_bottom_text">
        <img src="../assets/Img/graduation-cap.png" alt=""> Certified agents
      </p>
    </div>
    <TopDeals />
    <Why />
    <Recomendations />
    <TopDestinations/>
    <Reviews/>
    <Footer/>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Recomendations from "@/components/Recomendations.vue";
import TopDeals from "@/components/TopDeals.vue";
import Why from "@/components/Why.vue";
import TopDestinations from '../components/TopDestinations.vue';
import Reviews from '../components/Reviews.vue';
import Footer from '../components/Footer.vue';

const isActive = ref(false);
const activeButtonIndex = ref(null);
const bookingButtons = ['FLIGHTS', 'HOTELS', 'CARS', 'CRUISES', 'PACKAGES'];
const tr = ref(false)

const change = (i) => {
  tr.value = !tr.value;
  activeButtonIndex.value = i;
};

const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>
