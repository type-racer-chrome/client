<template>
  <div class="page-row">
    <div class="left">
      <i @click="redirToLandingPage" class="fas fa-angle-left fa-8x"></i>
    </div>
    <div class="main">
      <div class="upper">
        <p class="blinking">...waiting for another player to join...</p>
        <p>players joined:</p>
      </div>
      <div class="middle">
        <div
          v-for="player in playersReady"
          :key="player.id">
          <div class="players">
            <h5>{{player}}</h5>
          </div>
        </div>
      </div>
      <div class="bottom">
        <button @click="redirToGamePage" class="my-btn">start</button>
      </div>
    </div>
    <div class="right">
    </div>
  </div>
</template>

<script>
// import Player from '../components/Player.vue'
import socket from '../config/socket'

export default {
  name: 'WaitingRoom',
  methods: {
    redirToGamePage: function () {
      socket.emit('startGame', 'game mulaaaaii')
    },
    redirToLandingPage: function () {
      socket.emit('backToLandingPage', localStorage.username)
      this.$router.push('/')
      localStorage.clear()
    }
  },
  computed: {
    // socket () {
    //   return this.$store.state.socket
    // },
    playersReady () {
      return this.$store.state.players
    }
  },
  created () {
    // socket.on('joinGame', (name) => {
    //   this.$store.commit('ADD_PLAYERS', name)
    //   console.log(this.$store.state.players)
    //   console.log('berapa kali')
    // })

    // socket.on('deleteUser', (username) => {
    //   const index = this.$store.state.players.indexOf(username)
    //   // console.log(index, 'INI INDEXXXXX')
    //   this.$store.commit('DELETE_USER', index)
    // })

    socket.on('gamePlay', (msg) => {
      this.$store.commit('insertPlayer', localStorage.getItem('username'))
      this.$router.push('/game')
    })
  },
  beforeDestroy () {
    this.socket.off('joinGame')
  }
  // beforeDestroy () {
  //   socket.close()
  // }
}
</script>

<style>
.page-row {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5rem;
}
.left, .right {
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  width: 70%;
  min-width: 500px;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
}
.upper, .bottom {
  height: 15%;
  min-height: 50px;
}
.upper p {
  font-size: 1.5rem;
}
.middle {
  margin-top: 1rem;
  height: 60%;
  overflow-y: scroll;
  margin-bottom: 2rem;
  min-height: 150px;
}
.my-btn {
  border: none;
  /* padding: .75rem 3rem; */
  height: 3.25rem;
  width: 10rem;
  border-radius: 2px;
  background-color: #C6C5B9;
  color: #234565;
  cursor: pointer;
  transition: .3s;
  font-family: inherit;
  font-size: 1.5rem;
}
.my-btn:hover {
  transform: scale(1.1);
  background-color: #DCB142;
}
.players {
  height: 3.25rem;
  width: 17.5rem;
  background-color: #DCB142;
  color: #234565;
  border-radius: 2px;
  font-size: 1.5rem;
  font-weight: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
.extra-mt {
  margin-bottom: 1rem;
}
.fa-angle-left {
  transition: .3s;
  cursor: pointer;
  color: #C6C5B9;
}
.fa-angle-left:hover {
  color: #DCB142;
  transform: scale(1.1);
}
.blinking{
  animation: blinking-text 1.2s infinite;
}
@keyframes blinking-text{
  0%{ color: #DCB142; }
  49%{ color: #DCB142; }
  60%{ color: transparent; }
  99%{ color:transparent; }
  100%{ color: #DCB142; }
}
</style>
