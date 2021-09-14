<template>
  <div class="about">
    <h1>{{ movie.Title }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    movie() {
      return this.$store.getters['movie/movieDetail'];
    },
  },
  created() {
    this.fetchMovieDetail();
  },
  methods: {
    async fetchMovieDetail() {
      await this.$store.dispatch('movie/fetchMovieDetail', this.$route.params.id);
    },
  },
};
</script>
