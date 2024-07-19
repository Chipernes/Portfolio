<script setup lang="ts">
type Props = {
  link: string,
  image: string
}

defineProps<Props>()
</script>

<template>
  <div class="image">
    <a class="image__link" :href="link" target="_blank">
      <img class="image__photo" :src="`/projects/${image}.png`" :alt="image">
      <p class="image__tip">Click to view</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
.image {
  position: relative;

  border-radius: rem(10);
  box-shadow: 0 0 10px #9C9C9CFF;
  overflow: hidden;
  transition: all 0.3s ease 0s;

  @media (hover:hover) {
    &:hover {
      transform: scale(1.01);
    }
  }

  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__tip {
    position: absolute;
    top: 100%;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    @include adaptiveValue('font-size', 50, 30);
    font-weight: bold;
    color: #ffffff;

    background: rgba(8, 8, 8, 0.5);
    transition: all 0.3s ease 0s;

    @media (max-width: rem(600)) {
      top: 0;
    }
  }

  @media (hover:hover) {
    &:hover &__tip {
      top: 0;
    }
  }
}
</style>