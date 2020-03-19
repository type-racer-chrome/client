<template>
  <div class="page">
    <p class="welcome-tag">welcome to</p>
    <h2 class="title">dejavutype</h2>
    <p class="tag">please enter your name</p>
    <form @submit.prevent="redirToWaitingRoom">
        <input class="input-form" v-model="name" type="text" placeholder="noob99">
        <button type="submit" class="my-btn-go">GO!</button>
    </form>
  </div>
</template>

<script>
// import io from '../config/socket'

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
        this.socket.emit('joinGame', this.username)
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
    socket () {
      return this.$store.state.socket
    }
  },
  created () {
    this.socket.on('joinGame', (name) => {
      this.$store.commit('ADD_PLAYERS', name)
      console.log(this.$store.state.players)
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
