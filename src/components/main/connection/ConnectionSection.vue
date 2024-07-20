<script setup lang="ts">
import SectionHeading from "@/components/common/SectionHeading.vue";
import {Icon} from "@iconify/vue";
</script>

<template>
<section class="connection">
  <div class="connection__container">
    <SectionHeading color="white" title="Get In Touch" text="In this section, you'll find ways to contact me for any inquiries, collaborations, or project discussions. Feel free to reach out!" />
    <div class="connection__socials">
      <a class="connection__link" href="https://t.me/Chipernes" target="_blank"><Icon icon="mingcute:telegram-fill" />Telegram</a>
      <a class="connection__link" href="https://www.linkedin.com/in/nikita-motytskyi-598210284/" target="_blank"><Icon icon="jam:linkedin" />LinkedIn</a>
      <a class="connection__link" href="mailto:nikonprofiz@gmail.com"><Icon icon="ic:outline-email" />Email(nikonprofiz@gmail.com)</a>
      <a class="connection__link" href="https://www.instagram.com/chipernes/" target="_blank"><Icon icon="mdi:instagram" />Instagram</a>
      <a class="connection__link" href="https://github.com/Chipernes" target="_blank"><Icon icon="mingcute:github-fill" />GitHub</a>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.connection {
  background: #080808;

  @include adaptiveValue('margin-top', 80, 50);
  @include adaptiveValue('padding-top', 80, 50);
  @include adaptiveValue('padding-bottom', 80, 50);

  &__socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: rem(15);
    margin-top: rem(15);

    @include adaptiveValue('font-size', 20, 14);
  }

  &__link {
    display: flex;
    align-items: center;
    gap: rem(10);
    transition: all 0.3s ease 0s;

    @media (hover:hover) {
      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>