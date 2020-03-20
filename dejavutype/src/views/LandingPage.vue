<template>
  <div class="page">
    <p class="welcome-tag">welcome to</p>
    <h2 class="title">dejavutype</h2>
    <p class="tag">please enter your name</p>
    <form @submit.prevent="redirToWaitingRoom">
        <input class="input-form" v-model="username" type="text" placeholder="noob99">
        <!-- <button type="submit" class="my-btn-go">GO!</button> -->
    </form>
  </div>
</template>

<script>
import socket from '../config/socket'
// import { Howl, Howler } from 'howler'

export default {
  name: 'LandingPage',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    redirToWaitingRoom: function () {
      if (this.username.length > 0) {
        // socket.open()
        socket.emit('joinGame', this.username)

        localStorage.setItem('username', this.username)
        this.$vToastify.success({
          title: `welcome ${this.username}`,
          body: 'please waiting for another opponent'
        })
        this.$router.push('/waitingroom')
      } else {
        this.$vToastify.error({
          title: 'Hey!',
          body: 'You have tell your name :('
        })
      }
    }
  },
  computed: {
  },
  created () {
    socket.open()
    socket.on('joinGame', (name) => {
      this.$store.commit('ADD_PLAYERS', name)
    })

    socket.on('deleteUser', (username) => {
      const index = this.$store.state.players.indexOf(username)
      socket.close()
      setTimeout(() => {
        socket.open()
      }, 3000)
      // socket.open()
      this.$store.commit('DELETE_USER', index)
    })
    socket.on('resetPlayer', () => {
      this.$store.commit('RESET_PLAYER')
    })
  }
}
</script>

<style>
.page {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem;
}
.title {
    font-size: 7rem;
    letter-spacing: 2px;
}
.welcome-tag {
    font-size: 2rem;
}
.tag {
    margin-top: 2rem;
    font-size: 1.5rem;
    margin-bottom: 5px;
}
.input-form {
    border: none;
    padding: .75rem 1rem;
    border-radius: 2px;
    font-family: inherit;
    font-size: 1.15rem;
}
</style>
