<template>
  <div class="searchbox">
    <input
      v-model="$store.state.keyword"
      type="text"
      placeholder="Search your Starship here"
    />
    <button
      type="submit"
      class="submit-search"
      @click="$store.dispatch('searchStarship', $store.state.keyword)"
    >
      Search
    </button>
  </div>
</template>