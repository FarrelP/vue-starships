import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    isLoading: true,
    page: 1,
    keyword: '',
    starship: [],
    detailStarship: {}
  },
  getters: {
  },
  mutations: {
    updatePage(state) {
      state.page++;
    },
    resetPage(state) {
      state.page = 1;
    },
    getStarshipsData(state, data) {
      state.starship = [];
      state.starship = data;
      state.isLoading = false;
    },
    getStarshipsDetailData(state, data) {
      state.detailStarship = [];
      state.detailStarship = data;
      state.isLoading = false;
    },
    getNextPage(state, data) {
      state.starship.push(...data);
      state.isLoading = false;
    },
    setLoading(state) {
      state.isLoading = true;
    }
  },
  actions: {
    getStarshipsData({ commit }) {
      commit('setLoading')
      commit('resetPage')
      axios('https://swapi.dev/api/starships').then(response => {
        commit('getStarshipsData', response.data.results)
      })
    },
    getStarshipsDetailData({ commit }, id) {
      commit('setLoading')
      axios('https://swapi.dev/api/starships/' + id).then(response => {
        commit('getStarshipsDetailData', response.data)
      })
    },
    getNextPage({ commit, state }) {
      if(state.page < 4) {
        commit('setLoading')
        commit('updatePage')
        axios('https://swapi.dev/api/starships/?page=' + state.page).then(response => {
          commit('getNextPage', response.data.results)
        })
      }
    },
    searchStarship({ commit, state }) {
      commit('setLoading')
      commit('resetPage')
      axios('https://swapi.dev/api/starships/?search=' + state.keyword).then(response => {
        commit('getStarshipsData', response.data.results)
      })
    }
  },
  getters: {
    numberFormat(state) {
      let cost = state.detailStarship.cost_in_credits
      let res = 'unknown';

      if(cost != 'unknown') {
        res = new Intl.NumberFormat().format(cost)
      }

      return res
    },
    checkPassengers(state) {
      let flag = true
      let passengers = state.detailStarship.passengers

      if(passengers === 'n/a' || passengers === '0') {
        flag = false
      }

      return flag;
    }
  },
  modules: {
  }
})
