<template>
  <div class="page">
    <div>
      <h3 class="p-lead">final score</h3>
    </div>
    <div class="final-mid">
      <div v-for="score in tableScore" :key="score.id">
      <FinalScoreCard :score="score"/>
      </div>
    </div>
    <div class="footer quit-only">
      <button @click="redirToLandingPage" class="my-btn">quit</button>
    </div>
  </div>
</template>

<script>
import socket from '../config/socket'
import FinalScoreCard from '../components/FinalScoreCard.vue'

export default {
  name: 'FinishPage',
  methods: {
    redirToLandingPage: function () {
      this.$router.push('/')
      socket.emit('resetPlayer')
      // this.socket.emit('disconnect')
    }
  },
  components: {
    FinalScoreCard
  },
  computed: {
    tableScore () {
      return this.$store.getters.sortScore
    }
    // socket () {
    //   return this.$store.state.socket
    // }
  }
}
</script>

<style>
.quit-only {
  justify-content: center;
}
.final-mid {
  overflow-y: scroll;
  height: 70%;
}
.footer {
  margin-top: 1rem;
  height: 15%;
  display: flex;
  align-items: center;
}
.final-score-card {
  height: 3.25rem;
  width: 20rem;
  background-color: #DCB142;
  color: #234565;
  border-radius: 2px;
  font-size: 1.5rem;
  font-weight: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: .75rem 0;
  padding: 0 1rem;
  box-shadow: -5px 7px 26px -11px rgba(0,0,0,0.66);
}
</style>
