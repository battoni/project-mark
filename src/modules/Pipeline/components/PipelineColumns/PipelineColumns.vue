<script setup lang="ts">
import type { PipelineColum } from '../../types';

interface Props {
  columns: PipelineColum[];
}

defineProps<Props>();

function getColor(color: string, type: string) {
  const scale = {
    bg: `background-color: var(--color-${color}-1)`,
    border: `border-color: var(--color-${color}-2)`,
    tag: `background-color: var(--color-${color}-2)`,
    tagInner: `background-color: var(--color-${color}-3)`,
    text: `color: var(--color-${color}-4)`,
  };

  return scale[type];
}
</script>

<template>
  <div class="columns">
    <div
      v-for="{ id, label, color } in columns"
      class="column"
      :key="id"
      :style="getColor(color, 'bg')"
    >
      <AppText
        class="label"
        :font="$AppTextProps.FONTS_ENUM.TITLE"
        :style="getColor(color, 'text')"
      >
        {{ label }}
      </AppText>

      <div
        class="tag"
        :style="getColor(color, 'tag')"
      >
        <div
          class="tag-inner"
          :style="getColor(color, 'tagInner')"
        />
      </div>

      <div
        class="content"
        :style="getColor(color, 'border')"
      />
    </div>
  </div>
</template>

<style scoped>
.columns {
  @apply flex flex-row gap-4;
}
.column {
  @apply flex
    flex-col
    px-2
    py-3
    items-start
    relative
    rounded-[10px]
    min-h-[450px]
    w-[250px];
}

.column:after {
  @apply absolute
   bottom-0
   content-['']
   h-[150px]
   left-0
   pointer-events-none
   w-full
   z-10;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 90%
  );
}

.label {
  @apply uppercase mb-3;
}

.tag {
  @apply h-[20px]
    relative
    mb-2
    rounded-[20px]
    w-[110px];
}

.tag-inner {
  @apply absolute bg-[var(--color-purple-3)] h-[20px] rounded-[20px] w-[40px];
}

.content {
  @apply border border-[var(--color-purple-2)] h-[200px] rounded-[20px] w-full;
}
</style>
