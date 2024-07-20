<script setup lang="ts">

</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__text">Made with ❤️</p>
      <p class="footer__copyright">© <a class="footer__link" href="mailto:nikonprofiz@gmail.com">Chipernes</a>. 2024. All rigths reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  padding: rem(25) 0;

  text-align: center;
  font-size: rem(14);
  background: #1B1B1B;

  &__text{
    margin-bottom: rem(10);
  }

  &__link {
    @media (hover:hover) {
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>