<template>
  <div class="final-score-card">
    <p>{{score.name}}</p>
    <p>{{score.highScore}}</p>
  </div>
</template>

<script>
export default {
  name: 'FinalScoreCard',
  props: {
    score: Object
  }
}
</script>

<style>

</style>
