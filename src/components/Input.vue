<template>
  <div class="input-wrapper">
    <label v-if="label !== ''" class="input-label">{{ label }}</label>
    <input
      class="input-control"
      :type="type"
      :placeholder="placeholder"
      v-model="inputVal"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [String, Number],
      required: false,
      default: '',
    },
    type: {
      type: [String],
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
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
