import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: io('http://localhost:3000'),
    players: [],
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
    finished: false,
    highScore: [],
    tableScore: []
  },
  mutations: {
    next: function (state, payload) {
      state.tableScore = payload
      state.playerScore += state.arrayOfWords[state.wordIndex].length
      state.wordIndex++
      if (state.wordIndex >= state.arrayOfWords.length) {
        state.finished = true
      }
    },
    insertPlayer: function (state, name) {
      state.player = name
    },
    ADD_PLAYERS (state, player) {
      state.players.push(player)
    },
    LOGOUT (state, payload) {
      state.players.filter((el, index) => {
        if (el === payload) {
          const test = state.players.slice(0, index)
          state.players = test
        }
      })
    },
    SET_HIGHSCORE (state, payload) {
      console.log('AKU MASUK YEEY')
      state.highScore.push({
        name: payload.name,
        highScore: payload.score
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
