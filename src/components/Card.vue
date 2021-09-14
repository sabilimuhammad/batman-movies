<template>
  <div class="law-card" :class="actionable && 'is-actionable'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    actionable: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
