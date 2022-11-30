<template>
  <!-- Loader -->
  <div class="loader" v-if="$store.state.isLoading"></div>

  <!-- Starship Detail -->
  <CardDetailStarship />
</template>

<script>
export default {
  name: "HomeView",
  components: {
    CardDetailStarship: require("@/components/CardDetailStarship.vue").default
  },
  mounted() {
    this.$store.dispatch("getStarshipsDetailData", this.$route.params.id);
  },
};
</script>