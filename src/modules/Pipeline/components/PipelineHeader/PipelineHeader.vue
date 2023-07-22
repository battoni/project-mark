<script setup lang="ts">
import Logo from '@Assets/images/project-mark-logo-min.png';
import NewPipelineStep from './components/NewPipelineStep/NewPipelineStep.vue';

interface Emits {
  (e: 'nextStep'): void;
}

interface Props {
  step: number;
}

const emit = defineEmits<Emits>();

withDefaults(defineProps<Props>(), {
  step: 1,
});
</script>

<template>
  <header class="new-pipeline-header">
    <img :src="Logo" />

    <div class="steps">
      <NewPipelineStep
        description="Sales Pipeline Settings"
        :isActive="step === 1"
        :step="1"
      />

      <NewPipelineStep
        description="Opportunity Details Settings"
        :isActive="step === 2"
        :step="2"
      />
    </div>

    <AppButton
      class="next"
      label="Next"
      :type="$AppButtonProps.TYPES_ENUM.SUCCESS"
      @click="emit('nextStep')"
    />
  </header>
</template>

<style scoped>
.new-pipeline-header {
  @apply flex flex-col items-center justify-between pb-[25px] pt-[25px] w-full;
}

.steps {
  @apply flex gap-14 items-center justify-between mt-5 mb-5 text-center;
}

@media (min-width: 768px) {
  .new-pipeline-header {
    @apply flex-row;
  }

  .steps {
    @apply m-0;
  }

  .next {
    @apply mr-10;
  }
}
</style>
