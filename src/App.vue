<script setup>
import "animate.css";
</script>
<template>
  <div class="flex justify-between px-16 pt-10">
    <div class="text-white text-2xl justroT">Portfolio</div>
    <div class="text-xl space-x-7 h-20">
      <router-link to="/" class="text-white hov">About</router-link>
      <router-link to="/experiences" class="text-white hov"
        >Experiences</router-link
      >
      <router-link to="/projects" class="text-white hov">Projects</router-link>
    </div>
  </div>
  <router-view v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.hov:hover {
  border-top: 4px solid #ffffff;
  border-bottom: 4px solid #ffffff;
  padding: 6px 0;
}
.hov {
  transition: 0.3s ease;
}

a.router-link-active,
.justroT {
  text-shadow: 0 0 5px #1ab4e7, 0 0 10px #1ab4e7, 0 0 30px #18a2d0,
    0 0 45px #18a2d0, 0 0 60px #18a2d0;
  font-weight: bolder;
}

.page {
  position: absolute;
}
</style>
