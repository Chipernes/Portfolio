<script setup lang="ts">
import SectionHeading from "@/components/common/SectionHeading.vue";
import {Icon} from "@iconify/vue";

</script>

<template>
<section class="skills" id="skills">
  <div class="skills__container">
    <div class="skills__heading">
      <SectionHeading
          title="Skills"
          text="This section highlights my technical skills and expertise in Frontend development." />
    </div>
    <div class="skills__description description">
      <div class="description__inner">
        <h3 class="description__title">Programming Languages</h3>
        <ul class="description__list">
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-js-official" />JavaScript</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-typescript-official" />TypeScript</p>
          </li>
        </ul>

        <h3 class="description__title">JS Frameworks</h3>
        <ul class="description__list">
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-vue" />Vue.js (Vuetify, Vite)</p>
          </li>
        </ul>

        <h3 class="description__title">Languages</h3>
        <ul class="description__list">
          <li class="description__item">
            <p class="description__technology"><Icon icon="uil:english-to-chinese" style="color: #4c8bf5" />English (upper intermediate)</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="uil:english-to-chinese" style="color: #4c8bf5" />Ukrainian (native)</p>
          </li>
        </ul>
      </div>
      <div class="description__inner">
        <h3 class="description__title">Others</h3>
        <ul class="description__list">
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-html" />HTML</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-css" />CSS/SCSS</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-tailwind" />Tailwind</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="akar-icons:php-fill"  style="color: #777bb3" />PHP</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-git" />Git</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="mdi:eslint"  style="color: #4a31c3" />ESLint</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="solar:figma-bold-duotone"  style="color: #f44c1c" />Figma</p>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="mage:photoshop"  style="color: #001e36" />Photoshop</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
</template>

<style scoped lang="scss">
.skills {
  @include adaptiveValue('margin-top', 80, 40);
}

.description {
  display: flex;
  justify-content: space-evenly;
  @include adaptiveValue('margin-top', 40, 15);

  @media (max-width: rem(600)) {
    flex-direction: column;
    text-align: center;
  }

  &__inner {
    @media (max-width: rem(600)) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__title {
    font-size: rem(30);
    font-family: $headingFont;
    font-weight: bold;
    color: #080808;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: rem(15);
    margin-top: rem(20);
    margin-bottom: rem(30);

    @media (max-width: rem(600)) {
      align-items: center;
    }
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: rem(40);
    font-size: rem(20);
  }

  &__technology {
    display: flex;
    gap: rem(5);
  }
}
</style>