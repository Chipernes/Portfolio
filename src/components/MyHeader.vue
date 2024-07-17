<script setup lang="ts">
import MenuSocials from "@/components/MenuSocials.vue";
import {ref} from "vue";

const isMenuOpen = ref(false);
const toggleMenuOpen = () => {
  return isMenuOpen.value = !isMenuOpen.value;
}
</script>

<template>
  <header class="header">
    <nav class="header__menu menu">
      <div class="menu__body" :class="{'menu-open': isMenuOpen}">
        <ul class="menu__list">
          <li class="menu__item"><a href="#" class="menu__link">Home</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Knowledge</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Projects</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Get In Touch</a></li>
        </ul>
        <div v-if="isMenuOpen" class="menu__socials">
          <MenuSocials/>
        </div>
      </div>

      <div class="menu__socials">
        <MenuSocials/>
      </div>
      <button @click="toggleMenuOpen" :class="{'menu-open': isMenuOpen}" class="icon-menu" type="button"><span></span></button>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  justify-content: space-between;
  color: $mainColor;
  background: #1B1B1B;

  @include adaptiveValue('padding-top', 25, 15);
  @include adaptiveValue('padding-bottom', 25, 15);
  @include adaptiveValue('padding-left', 95, 15);
  @include adaptiveValue('padding-right', 95, 15);

  @media (min-width: rem(1110)) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &__body {
    @media (max-width: rem(600)) {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      width: 100%;
      height: 100%;

      background: rgba(27, 27, 27, 0.8);

      transition: all 0.3s ease 0s;
      opacity: 0;
    }

    &.menu-open {
      opacity: 1;
    }
  }

  &__list {
    display: flex;
    @include adaptiveValue('gap', 70, 10);

    @media (max-width: rem(600)) {
      flex-direction: column;
      align-items: center;
      padding-top: 100px;

      font-size: 24px;
      color: $whiteColor;
    }
  }
  
  &__link {
    transition: all 0.3s ease 0s;
    @media (hover: hover) {
      &:hover {
        color: $whiteColor;
      }
    }
  }

  &__socials {
    display: flex;
    gap: 20px;
  }

  @media (max-width: rem(600)) {
    color: $whiteColor;
  }
}

//Burger
.icon-menu {
  display: none;
  @media (max-width: rem(600)) {
    position: relative;
    z-index: 5;

    display: block;
    width: rem(30);
    height: rem(18);

    cursor: pointer;

    span,
    &::before,
    &::after {
      content: "";
      position: absolute;
      right: 0;

      width: 100%;
      height: rem(2);

      background-color: $whiteColor;
      transition: all 0.3s ease 0s;
    }

    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
    span {
      top: calc(50% - 1px);
    }

    &.menu-open {
      span {
        width: 0;
      }

      span,
      &::before,
      &::after {
        background-color: $whiteColor;
      }

      &::before {
        top: calc(50% - 1px);
        transform: rotate(-45deg);
      }

      &::after {
        bottom: calc(50% - 1px);
        transform: rotate(45deg);
      }
    }
  }
}
</style>