<script setup lang="ts">
import { computed } from 'vue';
import { UI_COLORS } from '@Types';
import { FONTS_ENUM, TAGS_ENUM } from './types';

interface Props {
  color?: UI_COLORS;
  font?: FONTS_ENUM;
  size?: string;
  tag?: TAGS_ENUM;
}

const props = withDefaults(defineProps<Props>(), {
  color: UI_COLORS.DEFAULT,
  font: FONTS_ENUM.BODY,
  size: 'text-base',
  tag: TAGS_ENUM.P,
});

const classes = computed(() => {
  const { color, font, size } = props;

  return [`text-${color}`, font, size];
});
</script>

<template>
  <component
    :is="tag"
    :class="[...classes]"
  >
    <slot />
  </component>
</template>

<style scoped>
.text-extra-large {
  @apply text-5xl;
}
.text-large {
  @apply text-3xl;
}
.text-medium {
  @apply text-xl;
}
.text-regular {
  @apply text-lg;
}
.text-small {
  @apply text-sm;
}

.font-title {
  @apply font-['Murecho'] font-bold;
}

.font-body {
  @apply font-['Murecho'];
}
</style>
