<script setup lang="ts">
import SectionHeading from "@/components/common/SectionHeading.vue";
import ProjectDescription from "@/components/main/projects/ProjectDescription.vue";
import ProjectImage from "@/components/main/projects/ProjectImage.vue";

const projects = [
  {
    id: 1,
    title: 'Cabby - taxi company website template',
    descriptionLink: 'https://github.com/Chipernes/Cabby',
    description: 'Cabby is a modern taxi company, offering reliable and efficient transportation services with a user-friendly booking system.',
    label: 'Web',
    imageLink: 'https://chipernes.github.io/Cabby/',
    imageName: 'cabby',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Jaboo - is an travel site',
    descriptionLink: 'https://github.com/Chipernes/Jaboo',
    description: 'Jaboo is a travel site offering comprehensive guides, tips, and booking options for your next adventure.',
    label: 'Web',
    imageLink: 'https://chipernes.github.io/Jaboo/',
    imageName: 'jaboo',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Tetris',
    descriptionLink: 'https://github.com/Chipernes/Tetris-ts',
    description: 'Tetris is a TypeScript-based version of the classic Tetris game, available for public use and enjoyment.',
    label: 'Front part (TS)',
    imageLink: 'https://tetris-beta-three.vercel.app',
    imageName: 'tetris',
    color: 'orange'
  },
  {
    id: 4,
    title: 'Sneakers Shop',
    descriptionLink: 'https://github.com/Chipernes/Sneakers-Shop',
    description: 'Sneakers Shop offers the latest and trendiest sneakers from top brands, ensuring quality, comfort, and style for every occasion.',
    label: 'Front part (VueJs)',
    imageLink: 'https://sneakers-shop-sage.vercel.app/',
    imageName: 'sneakers',
    color: 'green'
  },
  {
    id: 5,
    title: 'Hangman - guess the word',
    descriptionLink: 'https://github.com/Chipernes/Hangman',
    description: 'Hangman is a word-guessing game where players try to guess a hidden word letter by letter before completing a hangman figure.',
    label: 'Front part (VueJs)',
    imageLink: 'https://hangman-rosy-six.vercel.app/',
    imageName: 'hangman',
    color: 'green'
  },
  {
    id: 6,
    title: 'List of interviews',
    descriptionLink: 'https://github.com/Chipernes/List-of-interviews',
    description: 'List of Interviews is a website that allows users to organize, schedule, and track interviews with ease.',
    label: 'Front part (VueJs)',
    imageLink: 'https://list-of-interviews-roan.vercel.app/',
    imageName: 'list-of-interviews',
    color: 'green'
  }
];
</script>

<template>
  <section class="projects" id="projects">
    <div class="projects__container">
      <SectionHeading title="Projects" text="This section highlights projects I've completed, showcasing my frontend development experience." />
      <div class="projects__inner">
        <div class="projects__item" v-for="item in projects" :key="item.id">
          <ProjectDescription
              :style="item.id % 2 === 0 ? 'order: 1' : ''"
              class="projects__description"
              :title="item.title"
              :link="item.descriptionLink"
              :description="item.description"
              :label="item.label"
              :color="item.color"
          />
          <ProjectImage
              class="projects__link"
              :image="item.imageName"
              :link="item.imageLink"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  @include adaptiveValue('margin-top', 80, 50);

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
    margin: 0 auto;

    @include adaptiveValue('gap', 50, 30);
    @include adaptiveValue('margin-top', 30, 20);

    @media (max-width: rem(1000)) {
      width: 100%;
    }
  }

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    @include adaptiveValue('gap', 50, 20);

    @media (max-width: rem(600)) {
      flex-direction: column;
    }
  }

  &__description {
    width: 50%;

    @media (max-width: rem(600)) {
      width: 100%;
      order: -1 !important;
    }
  }

  &__link {
    width: 50%;

    @media (max-width: rem(600)) {
      width: 100%;
    }
  }
}
</style>