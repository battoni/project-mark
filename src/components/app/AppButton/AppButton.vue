<script setup lang="ts">
import { computed } from 'vue';
import { ROLES_ENUM, TYPES_ENUM } from './types';
import BaseLoader from '../../base/BaseLoader/BaseLoader.vue';

interface Emit {
  (e: 'click'): void;
}

interface Props {
  disabled?: boolean;
  label?: string;
  loading?: boolean;
  outset?: boolean;
  role?: ROLES_ENUM;
  type?: TYPES_ENUM;
  wide?: boolean;
}

const emit = defineEmits<Emit>();

const props = withDefaults(defineProps<Props>(), {
  role: ROLES_ENUM.BUTTON,
  type: TYPES_ENUM.SUCCESS,
});

const dynamicClasses = computed(() => {
  return [
    `btn-${props.type}`,
    props.outset || props.loading ? 'outset' : '',
    props.wide ? 'wide' : '',
  ];
});
</script>

<template>
  <button
    :class="['btn', ...dynamicClasses]"
    :disabled="disabled"
    :title="label"
    :type="role"
    @click="emit('click')"
  >
    <BaseLoader
      v-if="loading"
      :type="props.type"
    />

    <template v-else>
      {{ label }}
    </template>
  </button>
</template>

<style scoped>
.btn {
  @apply border
    border-2
    cursor-pointer
    duration-[100ms]
    flex
    font-medium 
    h-[45px]
    items-center
    justify-center
    min-w-[85px]
    max-w-[170px]
    rounded-[20px]
    text-[16px]
    text-white
    transition-[box-shadow]
    transition-[transform];
}

.btn:active {
  @apply scale-95;
}

.btn:hover {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 1px 0px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.btn-success {
  @apply bg-background-success border-border-success;
}

.btn-error {
  @apply bg-background-error border-border-error;
}

.btn-warning {
  @apply bg-background-warning border-border-warning;
}

.btn-information {
  @apply bg-background-information border-border-information text-[var(--color-blue-2)];
}

.btn.outset {
  @apply bg-background-default text-black;
}

.btn.wide {
  @apply w-full max-w-full;
}

.btn:disabled,
.btn:disabled:hover,
.btn:disabled:active {
  @apply cursor-not-allowed shadow-none transform-none;
}

.btn-success:disabled {
  @apply bg-background-successInactive 
    border-border-successInactive 
    text-successInactive;
}

.btn-error:disabled {
  @apply bg-background-errorInactive 
    border-border-errorInactive 
    text-errorInactive;
}

.btn-warning:disabled {
  @apply bg-background-warningInactive 
    border-border-warningInactive 
    text-warningInactive;
}

.btn-information:disabled {
  @apply bg-background-informationInactive 
    border-border-warningInactive 
    text-inactive;
}
</style>
