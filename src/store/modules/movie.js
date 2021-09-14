import API from '@/api';

const movieStore = {
  namespaced: true,
  state: {
    movies: [],
    movie: null,
    currentPage: 1,
    total: null,
  },
  mutations: {
    SET_MOVIE_LIST: (state, payload) => {
      state.movies = payload;
    },
    SET_MOVIE_DETAIL: (state, payload) => {
      state.movie = payload;
    },
    INCREMENT_CURRENT_PAGE: (state) => {
      state.currentPage += 1;
    },
    RESET_CURRENT_SEARCH: (state) => {
      state.currentPage = 1;
      state.total = null;
    },
    SET_TOTAL: (state, payload) => {
      state.total = payload;
    },
  },
  actions: {
    async fetchAllMovies({ commit, state }, params) {
      try {
        const res = await API.getAllMovies(params);
        if (state.currentPage === 1) {
          commit('SET_MOVIE_LIST', res.Search);
        } else {
          const newArr = state.movies.concat(res.Search);
          commit('SET_MOVIE_LIST', newArr);
        }
      } catch (e) {
        console.log(e);
        commit('SET_MOVIE_LIST', []);
        commit('SET_TOTAL', 0);
      }
    },
    async fetchMovieDetail({ commit }, id) {
      try {
        const res = await API.getMovieDetail(id);
        commit('SET_MOVIE_DETAIL', res);
      } catch (e) {
        console.log(e);
        commit('SET_MOVIE_DETAIL', {});
      }
    },
    incrementPage({ commit }) {
      commit('INCREMENT_CURRENT_PAGE');
    },
  },
  getters: {
    getTotal: (state) => state.total,
    getCurrentPage: (state) => state.currentPage,
    getMovies: (state) => state.movies,
    movieDetail: (state) => state.movie,
  },
};

export default movieStore;
