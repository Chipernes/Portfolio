<script setup lang="ts">
type Props = {
  title: string,
  text: string
}

defineProps<Props>()

</script>

<template>
<div class="heading">
  <h2 class="heading__title">{{ title }}</h2>
  <p class="heading__text">{{ text }}</p>
</div>
</template>

<style scoped lang="scss">
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  &__title {
    font-size: rem(34);
    font-family: $headingFont;
    font-weight: bold;
    color: #080808;
  }

  &__text {
    max-width: rem(570);
    line-height: rem(24);
    @include adaptiveValue('margin-top', 30, 15);
    @include adaptiveValue('margin-bottom', 30, 15);

    @include adaptiveValue('font-size', 16, 14);
    @include adaptiveValue('letter-spacing', 2.5, 1.5);
  }
}
</style>