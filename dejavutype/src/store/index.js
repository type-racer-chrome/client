import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    socket: io('http://localhost:3000'),
    players: []
  },
  mutations: {
    ADD_PLAYERS (state, player) {
      state.players.push(player)
    }
  },
  actions: {

  },
  modules: {
  }
})
