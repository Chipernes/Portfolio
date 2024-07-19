<script setup lang="ts">
import {Icon} from "@iconify/vue";

type Props = {
  label: string,
  title: string,
  description: string,
  link: string,
  color: 'blue' | 'orange' | 'green'
}

defineProps<Props>()
</script>

<template>
  <div :class="color" class="description">
    <p class="description__label">{{ label }}</p>
    <h3 class="description__title">{{ title }}</h3>
    <p class="description__description">{{ description }}</p>
    <a class="description__button" :href="link" target="_blank">View on GitHub <Icon class="hero__icon" icon="weui:arrow-filled" /></a>
  </div>
</template>

<style scoped lang="scss">
.description {
  &__label {
    display: inline-block;
    padding: rem(10);

    font-weight: bold;

    border-radius: rem(30);

    @include adaptiveValue('font-size', 16, 12);
  }

  &__title {
    font-size: rem(24);
    font-family: $headingFont;
    font-weight: bold;
    color: #080808;

    @include adaptiveValue('margin-top', 20, 15);
    @include adaptiveValue('margin-bottom', 20, 15);
  }

  &__description {
    line-height: rem(24);
    letter-spacing: 1px;

    @include adaptiveValue('margin-bottom', 40, 20);
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: rem(10);
    padding: rem(15) rem(25);

    font-weight: bold;
    font-family: $headingFont;
    color: #ffffff;
    border-radius: rem(5);
    transition: all 0.3s ease 0s;

    @media (max-width: rem(600)) {
      width: 100%;
      justify-content: center;
    }
  }

  .blue & {
    &__label {
      color: #000AFF;
      background: #D0E6FF;
    }

    &__button {
      background: #000AFF;

      @media (hover:hover) {
        &:hover {
          background: #0007bb;
          box-shadow: 0 0 5px #0007bb;
        }
      }
    }
  }

  .orange & {
    &__label {
      color: #FFA217;
      background: #FFF6E9;
    }

    &__button {
      background: #FFA217;

      @media (hover:hover) {
        &:hover {
          background: #e08c0f;
          box-shadow: 0 0 5px #e08c0f;
        }
      }
    }
  }

  .green & {
    &__label {
      color: #2AB090;
      background: #E0FFF8;
    }

    &__button {
      background: #2AB090;

      @media (hover:hover) {
        &:hover {
          background: #048d6b;
          box-shadow: 0 0 5px #048d6b;
        }
      }
    }
  }
}
</style>