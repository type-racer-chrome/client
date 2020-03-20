<template>
  <div class="game-page">
    <div class="command">
      <p class="p-lead p-lead-special">type this word quickly, {{getPlayer}} ! Your score: {{ currentScore }}</p>
      <p class="word">{{ currentWord }}</p>``
      <form v-on:submit.prevent="next" class="full-form">
        <input v-model="playerinput" class="input-form extended" type="text" placeholder="go type as fast as possible!">
      </form>
    </div>
    <div class="big-space">
      <div class="left">
        <p class="tag">{{ getPlayer }} Your score: {{ currentScore }}</p>
        <form v-on:submit.prevent="next">
          <input class="input-form extended" type="text" v-model="playerinput" placeholder="player ngetik disini">
        </form>
      </div>
      <div class="right">
        <div class="tag">score</div>
        <div class="scores">
          <p v-for="user in allPlayer" :key="user">{{user}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamePage',
  data () {
    return {
      playerinput: '',
      time: '4'
    }
  },
  methods: {
    next: function () {
      this.socket.emit('race', this.playerinput)
    },
    gameStart () {
      setTimeout(() => {
        this.socket.emit('highscore', { score: this.currentScore, name: this.getPlayer })
        this.$router.push('/finish')
      }, 10000)
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
      if (payload === this.currentWord) {
        this.$store.state.wordScore = payload
        this.$store.commit('next')
      } else {
        alert('Wrong!')
      }
      this.playerinput = ''
    })
    this.socket.on('highscore', (payload) => {
      this.$store.commit('SET_HIGHSCORE', payload)
    })
  }

}
</script>

<style>
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
