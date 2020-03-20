<template>
  <div class="game-page">
    <div class="command">
      <p class="p-lead p-lead-special">type this word quickly, {{getPlayer}} ! Your score: {{ currentScore }} [Time: {{ time }}]</p>
      <p class="word">{{ currentWord }}</p>
      <form v-on:submit.prevent="next" class="full-form">
        <input v-model="playerinput" class="input-form extended" type="text" placeholder="go type as fast as possible!">
      </form>
    </div>
    <div class="players-stats">
      <p v-for="(user, index) in tableScore" :key="index" >{{user.name}}: {{user.highscore}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamePage',
  data () {
    return {
      playerinput: '',
      time: '10'
    }
  },
  methods: {
    next: function () {
      this.socket.emit('race', { name: this.getPlayer, input: this.playerinput })
      this.socket.emit('score', { score: this.currentScore, name: this.getPlayer })
    },
    gameStart () {
      setTimeout(() => {
        this.socket.emit('highscore', { score: this.currentScore, name: this.getPlayer })
        this.$router.push('/finish')
      }, 20000)
    },
    timer () {
      setInterval(() => {
        this.time++
      }, 1000)
    }
  },
  computed: {
    currentWord: function () {
      return this.$store.state.arrayOfWords[this.$store.state.wordIndex]
    },
    currentScore: function () {
      return this.$store.state.playerScore
    },
    getPlayer: function () {
      return this.$store.state.player
    },
    socket () {
      return this.$store.state.socket
    },
    allPlayer () {
      return this.$store.state.players
    },
    tableScore () {
      return this.$store.state.liveScore
    }
  },
  watch: {
    finished: function () {
      if (this.$store.state.finished) {
        this.$router.push({ path: 'finish' })
      }
    }
  },
  created () {
    this.gameStart()
    this.timer()
  },
  mounted () {
    this.socket.on('race', (payload) => {
      if (payload.input === this.currentWord) {
        this.$store.commit('next', payload)
      } else {
        this.$vToastify.error({
          title: 'Wrong!',
          body: 'Check your spelling or whatever',
          class: 'toaster'
        })
      }
      this.playerinput = ''
    })
    this.socket.on('highscore', (payload) => {
      this.$store.commit('SET_HIGHSCORE', payload)
    })
    this.socket.on('score', (payload) => {
      localStorage.setItem('score', payload.score)
      this.$store.commit('LIVE_SCORE', payload)
    })
  }

}
</script>

<style>
.toaster {
  font-family: 'Reem Kufi', sans-serif!important;
}
.game-page {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
.command {
  width: 65%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  word-break: break-all;
}
.p-lead {
  font-size: 1.5rem;
  letter-spacing: 1px;
}
.p-lead-special {
  padding-right: 2.5rem;
  text-align: left;
}
.word {
  font-size: 4rem;
  letter-spacing: 2.5px;
  margin-bottom: .25rem;
  font-weight: 500;
  padding-right: 2.5rem;
  text-align: left;
}
.players-stats {
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #DCB142;
  color: #234565;
  font-size: 2rem;
  padding: 1.5rem;
  box-shadow: inset -5px 7px 26px -11px rgba(0,0,0,0.75);
  border-radius: 4px;
  overflow-y: scroll;
}
.full-form {
  width: 100%;
  padding-right: 2.5rem;
}
.extended{
  width: 100%;
  /* padding: .75rem 6rem .75rem 1rem; */
}
::-webkit-scrollbar {
  width: .75rem;
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb {
  background: rgba(35, 69, 101, .75);
  border-radius: 4px;
}
</style>
