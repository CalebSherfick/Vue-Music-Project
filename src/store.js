import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: { //commit is referencing the mutations
    setResults(state, data) {
      state.results = data
    }
  },
  actions: {//dispatch is referencing the actions
    getMusicByArtist({ commit }, query) {
      var url = 'https://itunes.apple.com/search?callback=?&term=' + query;
      // @ts-ignore
      $.getJSON(url)
        .then(res => {
          console.log(res)
          commit('setResults', res.results)
        })
        .catch(err => console.log(err))
    }
  }
})