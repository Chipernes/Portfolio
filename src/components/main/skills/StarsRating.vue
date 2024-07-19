<script setup lang="ts">
import {Icon} from "@iconify/vue";

type Props = {
  starsCount: number
}

defineProps<Props>();
</script>

<template>
  <div class="stars">
    <Icon v-for="num in 5" :key="num" icon="material-symbols:star" :color="num <= starsCount ? '#080808' : '' " />
  </div>
</template>

<style scoped lang="scss">
.stars {
  white-space: nowrap;
}
</style>