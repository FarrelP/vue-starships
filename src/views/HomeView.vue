<template>
  <div class="home">
    <!-- Searchbox -->
    <SearchBox />

    <!-- List of Starships -->
    <CardStarships />

    <!-- Loader -->
    <div class="loader" v-if="$store.state.isLoading"></div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {
    SearchBox: require("@/components/Searchbox.vue").default,
    CardStarships: require("@/components/CardStarships.vue").default,
  },
  mounted() {
    this.$store.dispatch("getStarshipsData");

    window.onscroll = () => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight == document.documentElement.offsetHeight;

      if (bottomOfWindow) {
        this.$store.dispatch("getNextPage");
      }
    };
  },
};
</script>