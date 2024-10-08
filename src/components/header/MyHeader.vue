<script setup lang="ts">
import MenuSocials from "@/components/header/MenuSocials.vue";
import {ref} from "vue";

const isMenuOpen = ref(false);
const toggleMenuOpen = () => {
  if (isMenuOpen.value) {
    closeMenu();
  } else {
    openMenu();
  }
}

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}

const openMenu = () => {
  isMenuOpen.value = true;
  document.body.style.overflow = 'hidden';
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <nav class="header__menu menu">
        <div @click="closeMenu" class="menu__body" :class="{'menu-open': isMenuOpen}">
          <ul class="menu__list">
            <li class="menu__item"><a href="#hero" class="menu__link">Home</a></li>
            <li class="menu__item"><a href="#skills" class="menu__link">Skills</a></li>
            <li class="menu__item"><a href="#projects" class="menu__link">Projects</a></li>
            <li class="menu__item"><a href="#connection" class="menu__link">Get In Touch</a></li>
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
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  z-index: 10;
  width: 100%;

  &__container {
    padding: 0;
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  color: $mainColor;
  background: #1B1B1B;

  @include adaptiveValue('padding-top', 25, 15);
  @include adaptiveValue('padding-bottom', 25, 15);
  @include adaptiveValue('padding-left', 95, 15, $containerWidth, 600, 1);
  @include adaptiveValue('padding-right', 95, 15, $containerWidth, 600, 1);

  @media (min-width: rem(1110)) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &__body {
    @media (max-width: rem(600)) {
      position: absolute;
      top: 0;
      left: 50%;
      z-index: -1;
      transform: translateX(-50%);

      display: none;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      width: 100%;
      height: 100vh;

      background: rgba(27, 27, 27, 0.99);
    }

    &.menu-open {
      display: flex;
      z-index: 5;
    }
  }

  &__list {
    display: flex;
    @include adaptiveValue('gap', 70, 20, $containerWidth, 600, 1);

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