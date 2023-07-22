import type { UI_COLORS } from '@/types';

interface PipelineColum {
  id: number;
  label: string;
  color: UI_COLORS;
}

interface PipelineOption {
  label: string;
  columns: PipelineColum[];
}

export type { PipelineOption, PipelineColum };
