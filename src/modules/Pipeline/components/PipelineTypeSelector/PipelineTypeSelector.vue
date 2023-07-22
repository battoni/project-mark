<script setup lang="ts">
import { computed } from 'vue';
import CheckSvg from '@Assets/svgs/check.svg';
import { styleFromStateHelper } from '@Helpers';
import type { PipelineOption } from '../../types';

interface Emits {
  (e: 'update:modelValue', value: string): void;
}

interface Props {
  options: PipelineOption[];
  modelValue: string;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const { activeClass } = styleFromStateHelper();

const selectedOption = computed({
  get: () => props.modelValue,
  set: (state) => emit('update:modelValue', state),
});
</script>

<template>
  <div class="pipeline-selectors">
    <label
      v-for="{ label } in options"
      :class="['pipeline-option', activeClass(label === selectedOption)]"
      :for="label"
      :key="label"
    >
      <label
        class="pipeline-radio"
        :for="label"
      >
        <CheckSvg class="check" />
      </label>

      <div class="arrow" />

      <input
        v-model="selectedOption"
        class="hidden"
        name="pipeline-type"
        type="radio"
        :id="label"
        :selected="label === selectedOption"
        :value="label"
      />

      <AppText
        class="mt-[-2px]"
        size="text-md"
      >
        {{ label }}
      </AppText>
    </label>
  </div>
</template>

<style scoped>
.pipeline-selectors {
  @apply flex gap-3;
}

.pipeline-option {
  @apply border
    border-border-gray
    flex
    flex-row
    gap-3
    h-[50px]
    items-center
    justify-start
    px-3
    relative
    rounded-[10px]
    w-[200px];
}

.pipeline-option.is-active {
  @apply border-2 border-border-success;
}

.pipeline-option.is-active .pipeline-radio {
  @apply border-2 border-border-success bg-background-success;
}

.pipeline-option.is-active .check {
  @apply flex;
}

.pipeline-option.is-active .arrow {
  @apply absolute bg-background-white
    block
    border-2
    border-border-success
    bottom-[-7px]
    h-[12px]
    w-[12px]
    left-[50%]
    translate-x-[-50%]
    rounded-r-[3px]
    rotate-[45deg]
    border-l-0
    border-t-0;
}

.pipeline-option:not(.is-active):hover {
  @apply bg-background-default;
}

.pipeline-radio {
  @apply bg-background-white
    border-[3px]
    border-border-gray
    flex
    h-[18px]
    items-center
    justify-center
    rounded-[5px]
    w-[18px];
}

.pipeline-radio:not(.is-active):hover {
  @apply bg-[var(--color-gray-1)] cursor-pointer;
}

.arrow {
  @apply hidden;
}

.check {
  @apply fill-white text-[14px];
}
</style>
