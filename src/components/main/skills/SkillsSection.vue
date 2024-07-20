<script setup lang="ts">
import SectionHeading from "@/components/common/SectionHeading.vue";
import {Icon} from "@iconify/vue";
import StarsRating from "@/components/main/skills/StarsRating.vue";

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
        <h3 class="description__title">Front-end</h3>
        <ul class="description__list">
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-html" />HTML</p>
            <StarsRating :stars-count="5"/>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-css" />CSS/SCSS</p>
            <StarsRating :stars-count="5"/>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-js-official" />JavaScript</p>
            <StarsRating :stars-count="4"/>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-typescript-official" />TypeScript</p>
            <StarsRating :stars-count="4"/>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-vue" />VueJs</p>
            <StarsRating :stars-count="3"/>
          </li>
        </ul>
      </div>
      <div class="description__inner">
        <h3 class="description__title">Other</h3>
        <ul class="description__list">
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-git" />Git</p>
            <StarsRating :stars-count="4"/>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="solar:figma-bold-duotone"  style="color: #f44c1c" />Figma</p>
            <StarsRating :stars-count="5"/>
          </li>
          <li class="description__item">
            <p class="description__technology"><Icon icon="vscode-icons:file-type-tailwind" />Tailwind</p>
            <StarsRating :stars-count="4"/>
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
  gap: rem(10);
  @include adaptiveValue('margin-top', 40, 15);

  @media (max-width: rem(600)) {
    flex-direction: column;
    text-align: center;
    gap: rem(40);
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