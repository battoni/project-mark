<script setup lang="ts">
import Logo from '@Assets/images/project-mark-logo.png';
import { TheCentralizedLayout } from '@Layouts';
</script>

<template>
  <TheCentralizedLayout class="home">
    <section class="welcome">
      <img
        class="logo"
        title="Project Mark Logo"
        alt="An image that represents Project Mark"
        :src="Logo"
      />

      <AppText
        size="text-3xl"
        :font="$AppTextProps.FONTS_ENUM.TITLE"
        :tag="$AppTextProps.TAGS_ENUM.H1"
      >
        Welcome!
      </AppText>

      <AppText
        class="description"
        size="text-xl"
        :font="$AppTextProps.FONTS_ENUM.BODY"
        :tag="$AppTextProps.TAGS_ENUM.H2"
      >
        Click bellow to test the last version of our new sales pipeline
        manageament system.
      </AppText>

      <AppButton
        wide
        label="New Pipeline"
        :type="$AppButtonProps.TYPES_ENUM.SUCCESS"
        @click="$router.push('/pipeline/create')"
      />
    </section>
  </TheCentralizedLayout>
</template>

<style scoped>
.home {
  @apply bg-background-default;
}

.logo {
  @apply max-w-[100px];
}

.welcome {
  @apply flex flex-col gap-5 items-center justify-center w-[300px];
}

.description {
  @apply mb-5 text-center;
}
</style>
