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
      'Hacktiv8',
      'Tamara',
      'Bottlecap',
      'Ubermensch',
      'Blitzkrieg',
      'Azcapotzalco'
    ],
    wordIndex: 0,
    wordScore: 0,
    playerScore: 0,
    player: '',
    round: 1,
    finished: false,
    highScore: [],
    tableScore: [],
    liveScore: []
  },
  mutations: {
    next: function (state, payload) {
      state.tableScore.push(payload)
      state.playerScore += state.arrayOfWords[state.wordIndex].length
      state.wordIndex = Math.floor(Math.random() * state.arrayOfWords.length)
      state.round++
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
    },
    LIVE_SCORE (state, payload) {
      console.log(payload)
      state.liveScore.push({
        name: payload.name,
        highScore: payload.score
      })
    },
    DELETE_USER (state, index) {
      state.players.splice(index, 1)
      console.log(state.players)
      console.log('DELET DATA AAAAA', index)
    },
    RESET_PLAYER (state) {
      state.players = []
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    sortScore: state => {
      return state.highScore.reverse()
    }
  }
})
