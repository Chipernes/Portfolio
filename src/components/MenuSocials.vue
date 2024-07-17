<script setup lang="ts">
import {Icon} from "@iconify/vue";
</script>

<template>
  <a class="menu__link" href="https://github.com/Chipernes" target="_blank">
    <Icon icon="mingcute:github-fill"
          class=""
          width="20px"
    />
  </a>
  <a class="menu__link" href="https://t.me/Chipernes" target="_blank">
    <Icon icon="mingcute:telegram-fill"
          class=""
          width="20px"
    />
  </a>
  <a class="menu__link" href="https://www.linkedin.com/in/nikita-motytskyi-598210284/" target="_blank">
    <Icon icon="ri:linkedin-fill"
          class=""
          width="20px"
    />
  </a>
  <a class="menu__link" href="https://www.instagram.com/chipernes/" target="_blank">
    <Icon icon="mdi:instagram"
          class=""
          width="20px"
    />
  </a>
</template>

<style scoped lang="scss">
.menu__link {
  transition: all 0.3s ease 0s;

  &:hover {
    color: white;
  }
}
</style>