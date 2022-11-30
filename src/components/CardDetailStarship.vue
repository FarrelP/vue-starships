<template>
  <div class="starship-detail-card" v-if="!$store.state.isLoading">
    <!-- Brief Explanation -->
    <h1>{{ $store.state.detailStarship.name }}</h1>
    <p class="starship-description">
      Manufactured by <span class="starship-point">{{ $store.state.detailStarship.manufacturer }}</span>, 
      and this is one of the <span class="starship-point">{{ $store.state.detailStarship.model }}</span> starship model.
      The ship itself <span v-if="$store.getters.numberFormat != 'NaN'">cost <span class="starship-point">{{ $store.getters.numberFormat }}</span> in Galactic Credit Standard and</span> can hold up to
      <span v-if="$store.getters.checkPassengers">
        <span class="starship-point">{{ $store.state.detailStarship.passengers }}</span> passengers and 
      </span> <span class="starship-point">{{ $store.state.detailStarship.crew }}</span> crew. You can find more about this starship down below.
    </p>

    <!-- Other Points -->
    <div class="point-items">
      <div class="point-items__left">
        <ul>
          <li><span class="pi-title">Name:</span> {{ $store.state.detailStarship.name }}</li>
          <li><span class="pi-title">Model:</span> {{ $store.state.detailStarship.model }}</li>
          <li><span class="pi-title">Manufacturer:</span> {{ $store.state.detailStarship.manufacturer }}</li>
          <li><span class="pi-title">Starship Class:</span> {{ $store.state.detailStarship.starship_class }}</li>
          <li><span class="pi-title">Cost:</span> {{ $store.getters.numberFormat }} (Galactic Credit)</li>
          <li><span class="pi-title">Max Atmosphering Speed:</span> {{ $store.state.detailStarship.max_atmosphering_speed }}</li>
          <li><span class="pi-title">Length:</span> {{ $store.state.detailStarship.length }}</li>
        </ul>
      </div>
      <div class="point-items__right">
        <ul>
          <li><span class="pi-title">Crew:</span> {{ $store.state.detailStarship.crew }}</li>
          <li><span class="pi-title">Passengers:</span> {{ $store.state.detailStarship.passengers }}</li>
          <li><span class="pi-title">Cargo Capacity:</span> {{ $store.state.detailStarship.cargo_capacity }} kilograms</li>
          <li><span class="pi-title">Consumables:</span> {{ $store.state.detailStarship.consumables }}</li>
          <li><span class="pi-title">Hyperdrive Rating:</span> {{ $store.state.detailStarship.hyperdrive_rating }}</li>
          <li><span class="pi-title">MGLT:</span> {{ $store.state.detailStarship.MGLT }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>