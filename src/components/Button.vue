<template>
  <div>
    <button
      type="button"
      class="law-btn"
      @click="$emit('click')"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>
