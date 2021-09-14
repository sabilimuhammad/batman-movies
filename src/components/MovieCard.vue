<template>
  <law-card>
    <div class="d-flex cards">
      <div class="d-flex card">
        <img
          :src="detail.Poster"
          :alt="detail.Title"
          @click="$emit('poster-clicked', detail)"
        >
        <div class="movie-card--title">
          <router-link :to="`/${detail.imdbID}`">
            <h3>{{ detail.Title }} - {{ detail.Year }}</h3>
          </router-link>
          <p>{{ detail.Type }}</p>
        </div>
      </div>
    </div>
  </law-card>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
