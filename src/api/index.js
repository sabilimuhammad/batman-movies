import Vue from 'vue';

async function getAllMovies(params) {
  const response = await Vue.axios({
    url: '/',
    params,
  });

  return response.data;
}

async function getMovieDetail(id) {
  const response = await Vue.axios({
    url: '',
    params: {
      i: id,
    },
  });

  return response.data;
}

export default {
  getAllMovies,
  getMovieDetail,
};
