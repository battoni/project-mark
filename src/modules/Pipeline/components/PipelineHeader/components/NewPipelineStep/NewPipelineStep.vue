<script setup lang="ts">
import { computed } from 'vue';
import { styleFromStateHelper } from '@Helpers';

interface Props {
  step: number;
  description: string;
  isActive?: boolean;
}

const props = defineProps<Props>();

const { activeClass } = styleFromStateHelper();

const dynamicClasses = computed(() => {
  return ['pipeline-step', activeClass(props.isActive)];
});
</script>

<template>
  <div :class="dynamicClasses">
    <div class="step">
      {{ step }}
    </div>

    <AppText
      class="description"
      size="text-[12px]"
    >
      {{ description }}
    </AppText>
  </div>
</template>

<style scoped>
.pipeline-step {
  @apply flex flex-col items-center;
}

.pipeline-step .step {
  @apply bg-background-white
    border-2
    border-[var(--color-ice-4)]
    flex
    h-[60px]
    items-center
    justify-center
    mb-1
    rounded-[22px]
    text-xl
    text-default
    w-[60px];
}

.pipeline-step.is-active .step {
  @apply bg-background-blueStrong
    border-border-gray
    text-white;
}

.pipeline-step .description {
  @apply text-default font-semibold;
}
</style>
