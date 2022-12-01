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

    const listElm = document.querySelector('.starship-container');
    listElm.addEventListener('scroll', e => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.$store.dispatch("getNextPage");
      }
    });
  },
};
</script>