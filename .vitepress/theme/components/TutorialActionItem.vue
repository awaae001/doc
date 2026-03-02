<template>
  <div class="tutorial-action-item">
    <el-button
      :type="type"
      :plain="plain"
      :disabled="disabled"
      :size="size"
      @click="handleClick"
    >
      <el-icon v-if="$slots.icon">
        <slot name="icon" />
      </el-icon>
      <span>{{ label }}</span>
    </el-button>
    <span class="tutorial-action-desc">{{ description }}</span>
  </div>
</template>

<script setup lang="ts">
import { ElButton, ElIcon } from 'element-plus';

interface Props {
  label: string;
  description: string;
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  plain?: boolean;
  disabled?: boolean;
  size?: 'large' | 'default' | 'small';
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  plain: false,
  disabled: false,
  size: 'default',
});

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
  emit('click');
};
</script>

<style scoped>
.tutorial-action-item {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.tutorial-action-desc {
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.6;
}
</style>
