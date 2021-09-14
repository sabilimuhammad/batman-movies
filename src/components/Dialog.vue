<template>
  <div v-show="inputVal" class="law-dialog--container">
    <law-card class="law-dialog--content">
      <law-button @click="inputVal = false" class="law-dialog--close-btn">X</law-button>
      <div class="law-dialog--header">
        <h2>{{ title }}</h2>
      </div>
      <hr />
      <slot></slot>
    </law-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [String, Number],
      required: false,
      default: '',
    },
    value: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
