<script setup lang="ts">
import {Icon} from "@iconify/vue";
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero__container">
      <div class="hero__inner">
        <h1 class="hero__title">Nikita Motytskyi</h1>
        <p class="hero__text">Hello! I'm Nikita, a Frontend Developer. I create user-friendly interfaces using JavaScript, TypeScript, and Vue.js.</p>
        <a download="" class="hero__button" href="/pdf/CV-Nikita-Motytskyi.pdf">
          Download CV
          <Icon icon="material-symbols:download" width="30" height="30" />
        </a>
      </div>
      <div>
        <img class="hero__photo" src="/photo.jpg" alt="photo">
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  @include adaptiveValue('padding-top', 150, 60);
  @include adaptiveValue('padding-bottom', 80, 20);
  background: #080808;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: rem(20);

    @media (max-width: rem(767)) {
      flex-direction: column;
      text-align: center;
    }
  }

  &__inner {
    @media (max-width: rem(767)) {
      order: 1;
    }
  }

  &__title {
    @include adaptiveValue('font-size', 44, 35);
    font-family: $headingFont;
    font-weight: bold;
    color: $headingColor;
  }

  &__text {
    max-width: rem(490);
    @include adaptiveValue('margin-top', 30, 15);
    @include adaptiveValue('margin-bottom', 30, 15);

    @include adaptiveValue('font-size', 16, 14);
    @include adaptiveValue('letter-spacing', 2.5, 1.5);
    line-height: rem(24);

    @media (max-width: rem(767)) {
      max-width: rem(600);
    }
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: rem(10);

    @include adaptiveValue('padding-top', 15, 10);
    @include adaptiveValue('padding-bottom', 15, 10);
    @include adaptiveValue('padding-left', 50, 25);
    @include adaptiveValue('padding-right', 50, 25);

    font-weight: bold;
    font-size: rem(20);
    font-family: $mainFont;
    color: $whiteColor;

    background: #3F8E00;
    border: 1px solid #61d704;
    border-radius: rem(4);
    box-shadow: 0 0 6px #61d704;
    transition: all 0.3s ease 0s;

    @media (max-width: rem(500)) {
      width: 100%;
      justify-content: center;
    }

    @media (hover:hover) {
      &:hover {
        background: #306b02;
        box-shadow: none;
      }
    }
  }

  &__icon {
    width: 20px;
    height: 20px;

    color: $whiteColor;
  }

  &__photo {
    @include adaptiveValue('width', 350, 300);

    border-radius: 50%;

    @media (max-width: rem(767)) {
      border-radius: 4px;
    }
  }
}
</style>