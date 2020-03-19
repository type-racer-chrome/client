<template>
  <div class="page">
    <div class="header">
      Please wait for another player to join
    </div>
    <p class="tag extra-mt">players joined:</p>
    <div class="main">
      <div class="players">
        <h5>Iam</h5>
      </div>
      <div class="players">
        <h5>Zaen</h5>
      </div>
      <div class="players">
        <h5>Isro</h5>
      </div>
      <div class="players">
        <h5>Ziady</h5>
      </div>
    </div>
    <div class="footer">
      <button @click="redirToGamePage" class="my-btn">Start</button>
      <button @click="redirToLandingPage" class="my-btn">Quit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WaitingRoom',
  methods: {
    redirToGamePage: function () {
      this.socket.emit('chat', 'ini message')

      // this.socket.on('message', (msg) => {
      //   console.log(msg)
      // })
    },
    redirToLandingPage: function () {
      this.$router.push('/')
    }

  },
  computed: {
    socket () {
      return this.$store.state.socket
    }
  },
  created () {
    this.socket.on('message', (msg) => {
      console.log(msg)
      this.$router.push('/game')
    })
  }
}
</script>

<style>
.header {
  height: 15%;
  width: 100%;
  font-size: 1.25rem;
}
.main {
  width: 30%;
  height: 70%;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.footer {
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.my-btn {
  border: none;
  padding: .75rem 3rem;
  border-radius: 2px;
  background-color: #DCB142;
  cursor: pointer;
  transition: .3s;
  font-family: inherit;
  font-size: 1.1rem;
}
.my-btn:hover {
  transform: scale(1.1);
}
.players {
  height: 3rem;
  width: 6rem;
  border: 1px solid #DCB142;
  border-radius: 2px;
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: .5rem;
}
.extra-mt {
  margin-bottom: 1rem;
}
</style>
