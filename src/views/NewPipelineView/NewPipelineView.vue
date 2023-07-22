<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import { UI_COLORS } from '@/types';
import {
  PipelineColumns,
  PipelineHeader,
  PipelineTypeSelector,
  type PipelineOption,
} from '@PipelineModule';

const selectedPipeType = ref('Basic');
const pipelines = reactive<PipelineOption[]>([
  {
    label: 'Basic',
    columns: [
      {
        id: 1,
        label: 'LEAD',
        color: UI_COLORS.PURPLE,
      },
      {
        id: 1,
        label: 'WON',
        color: UI_COLORS.GREEN,
      },
      {
        id: 1,
        label: 'LOST',
        color: UI_COLORS.PINK,
      },
    ],
  },
  {
    label: 'Advanced',
    columns: [
      {
        id: 1,
        label: 'LEAD',
        color: UI_COLORS.PURPLE,
      },
      {
        id: 2,
        label: 'SUBMITTED',
        color: UI_COLORS.SKY,
      },
      {
        id: 3,
        label: 'WON',
        color: UI_COLORS.GREEN,
      },
      {
        id: 4,
        label: 'LOST',
        color: UI_COLORS.PINK,
      },
      {
        id: 5,
        label: 'CLOSED',
        color: UI_COLORS.GRAY,
      },
    ],
  },
  {
    label: 'Expert',
    columns: [
      {
        id: 1,
        label: 'LEAD',
        color: UI_COLORS.PURPLE,
      },
      {
        id: 2,
        label: 'RFP IN PROGRESS',
        color: UI_COLORS.ORANGE,
      },
      {
        id: 3,
        label: 'SUBMITTED',
        color: UI_COLORS.SKY,
      },
      {
        id: 4,
        label: 'WON',
        color: UI_COLORS.GREEN,
      },
      {
        id: 5,
        label: 'LOST',
        color: UI_COLORS.PINK,
      },
      {
        id: 6,
        label: 'CLOSED',
        color: UI_COLORS.GRAY,
      },
    ],
  },
  {
    label: 'Custom',
    columns: [
      {
        id: 1,
        label: 'ADD NAME',
        color: UI_COLORS.PURPLE,
      },
      {
        id: 2,
        label: 'ADD NAME',
        color: UI_COLORS.ORANGE,
      },
      {
        id: 3,
        label: 'ADD NAME',
        color: UI_COLORS.SKY,
      },
      {
        id: 4,
        label: 'ADD NAME',
        color: UI_COLORS.GREEN,
      },
      {
        id: 5,
        label: 'ADD NAME',
        color: UI_COLORS.PINK,
      },
      {
        id: 6,
        label: 'ADD NAME',
        color: UI_COLORS.GRAY,
      },
    ],
  },
]);

const selectedColumns = computed(
  () =>
    pipelines.filter(({ label }) => label === selectedPipeType.value)[0].columns
);
</script>

<template>
  <div class="new-pipeline-view">
    <PipelineHeader :step="1" />

    <main class="pipeline-selector">
      <AppText
        class="mb-10"
        size="text-3xl"
        :font="$AppTextProps.FONTS_ENUM.TITLE"
        :tag="$AppTextProps.TAGS_ENUM.H1"
      >
        Please select the type of sales pipeline that best fits to your company
      </AppText>

      <PipelineTypeSelector
        v-model="selectedPipeType"
        class="mb-16"
        :options="pipelines"
      />

      <PipelineColumns :columns="selectedColumns" />
    </main>
  </div>
</template>

<style scoped>
.new-pipeline-view {
  @apply bg-background-default min-h-full p-5 w-full;
}

.pipeline-selector {
  @apply bg-background-white
    flex
    flex-col
    h-full
    items-center
    justify-start
    p-10
    rounded-[20px]
    text-center
    w-full;
}
</style>
