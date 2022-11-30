<template>
  <div class="starship-container">
    <div
      class="starship-card"
      v-for="item in $store.state.starship"
      :key="item.id"
    >
      <div class="starship-info-top">
        <p class="starship-class">{{ item.starship_class }}</p>
        <p class="starship-model">{{ item.model }}</p>
      </div>
      <p class="starship-name">{{ item.name }}</p>
      <p class="starship-manufacturer">
        Manufactured by <span>{{ item.manufacturer }}</span>
      </p>
      <router-link
        class="starship-detail"
        :to="'/starship/' + item.url.split('/').at(-2)"
        >View Starship's Detail &#8594;</router-link
      >
    </div>
  </div>
</template>