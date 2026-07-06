<script>
import TheHeader from "./components/layout/TheHeader.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
  },
};
</script>
<template>
    <the-header></the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component" :key="slotProps.route.fullPath" />
      </transition>
    </router-view>
</template>
