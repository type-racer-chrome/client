<template>
  <div class="page">
    <div class="header">
      Game Finished
    </div>
    <div class="main">
      <p class="title-leaderboard">Leaderboard</p>
      <!-- Satu set player & scorenya -->
      <div class="score-card">
        <div>
          <p>thomas</p>
        </div>
        <div>
          <p>65</p>
        </div>
      </div>
      <!-- -------------------------- -->
      <div class="score-card">
        <div>
          <p>tamara</p>
        </div>
        <div>
          <p>72</p>
        </div>
      </div>
      <div class="score-card">
        <div>
          <p>adam</p>
        </div>
        <div>
          <p>59</p>
        </div>
      </div>
    </div>
    <div class="footer quit-only">
      <button @click="redirToLandingPage" class="my-btn">Quit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinishPage',
  methods: {
    redirToLandingPage: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.score-card {
  width: 20%;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
}
.title-leaderboard {
  margin-top: 2rem;
  font-size: 2.5rem;
  margin-bottom: 5px;
  border-bottom: 1px solid #DCB142;
}
.quit-only {
  justify-content: center;
}
</style>
