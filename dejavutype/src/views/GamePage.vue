<template>
  <div class="game-page">
    {{time}}
    <div class="command">
      <p class="tag">type this word quickly!</p>
      <h1 class="word">{{ currentWord }}</h1>
    </div>
    <div class="big-space">
      <div class="left">
        <p class="tag">nama playernya Your score: {{ currentScore }}</p>
        <form v-on:submit.prevent="next">
          <input class="input-form extended" type="text" v-model="playerinput" placeholder="player ngetik disini">
        </form>
      </div>
      <div class="right">
        <div class="tag">score</div>
        <div class="scores">
          <p>arnold: 37</p>
          <p>isro: 11</p>
          <p>arnold 43</p>
          <p>arnold 49</p>
          <p>isro: 18</p>
          <p>iam: 7</p>
          <p>isro: 26</p>
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
      time: '0'
    }
  },
  methods: {
    next: function () {
      if (this.playerinput === this.currentWord) {
        this.$store.state.wordScore = this.currentWord.length
        this.$store.commit('next')
      } else {
        alert('Wrong!')
      }
      this.playerinput = ''
    },
    gameStart () {
      setTimeout(() => {
        this.$router.push('/finish')
      }, 36000)
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
    }
  },
  created () {
    this.gameStart()
    this.timer()
  }
}
</script>

<style>
.game-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
.command {
  height: 30%;
  width: 100%;
}
.command h1 {
  border-bottom: 1px solid white;
  border-radius: 2px;
}
.big-space {
  height: 70%;
  width: 100%;
  display: flex;
}
.left {
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 4rem;
  justify-content: flex-start;
}
.right {
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
}
.word {
  font-size: 4rem;
  letter-spacing: 10px;
}
.scores {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 1.25rem;
  border: 1px solid #DCB142;
  border-radius: 2px;
  height: 100%;
  font-size: 1.25rem;
}
.extended{
  padding: .75rem 6rem .75rem 1rem;
}
</style>
