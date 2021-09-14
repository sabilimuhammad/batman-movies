<template>
  <law-button
    v-show="isVisible"
    @click="backToTop"
    class="law-backtop--btn"
  >
    <slot></slot>
  </law-button>
</template>

<script>
export default {
  props: {
    target: {
      type: String,
      default: '',
    },
    threshold: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      isVisible: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.scrollWatcher);
  },
  methods: {
    scrollWatcher() {
      this.isVisible = this.threshold <= window.scrollY;
      console.log(this.isVisible);
    },
    backToTop() {
      let top = 0;
      if (this.target !== '') {
        top = document.querySelector(this.target).getBoundingClientRect().top;
      }
      window.scrollTo({ top, behavior: 'smooth' });
    },
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollWatcher);
  },
};
</script>
