<template>
  <div>
<!--     <Navbar/> -->
    <div class="container">
      <div class="d-flex items-end">
      <law-input label="Search Movie" v-model="searchVal"></law-input>
      <law-button @click="performSearch">
        Search
      </law-button>
    </div>
    <MovieCard
      v-for="movie in movies"
      :key="movie.imdbID"
      :detail="movie"
      @poster-clicked="showDialog"
    />
    <law-dialog
      v-model="dialogVisible"
      :title="currentMovie.Title"
    >
      <img :src="currentMovie.Poster" :alt="currentMovie.Title">
    </law-dialog>
    <law-back-to-top>
      Back To Top
    </law-back-to-top>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
// import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    MovieCard,
  },
  data() {
    return {
      searchVal: 'Batman',
      dialogVisible: false,
      currentMovie: {},
    };
  },
  computed: {
    isInfiniteScrollDisabled() {
      return this.total === this.movies.length;
    },
    movies() {
      return this.$store.getters['movie/getMovies'] || [];
    },
    total() {
      return this.$store.getters['movie/getTotal'];
    },
    currentPage() {
      return this.$store.getters['movie/getCurrentPage'];
    },
  },
  created() {
    this.fetchAllMovies();
    window.addEventListener('scroll', this.scrollHandler);
  },
  methods: {
    scrollHandler() {
      const pageHeight = Math.abs(Number(document.body.getBoundingClientRect().height.toFixed(0)));
      const scrollAmount = window.scrollY + window.innerHeight;
      if (pageHeight === scrollAmount) {
        this.$store.dispatch('movie/incrementPage');
        this.fetchAllMovies();
      }
    },
    async fetchAllMovies() {
      if (!this.isInfiniteScrollDisabled) {
        const params = {
          s: this.searchVal,
          page: this.currentPage,
        };
        await this.$store.dispatch('movie/fetchAllMovies', params);
      }
    },
    performSearch() {
      this.$store.commit('movie/RESET_CURRENT_SEARCH');
      this.fetchAllMovies();
    },
    showDialog(movie) {
      this.dialogVisible = true;
      this.currentMovie = movie;
    },
  },
};
</script>
