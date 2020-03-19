import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrayOfWords: [
      'JavaScript',
      'Machinist',
      'Safety',
      'Coronavirus',
      'Wochkrautzenmach',
      'Purgatoriumexcretum',
      'Purwadhika',
      'Hacktiv8'
    ],
    wordIndex: 0,
    wordScore: 0,
    playerScore: 0,
    player: '',
    // currentWord: 0
    finished: false
  },
  mutations: {
    next: function (state) {
      state.playerScore += state.wordScore
      state.wordIndex++
      if (state.wordIndex >= state.arrayOfWords.length) {
        state.finished = true
      }
    },
    insertPlayer: function (state, name) {
      state.player = name
    }
  },
  actions: {
  },
  modules: {
  }
})
