<template>
  <div class="game-page">
    <div class="command">
      <p class="p-lead p-lead-special">type this word quickly, [playername]!</p>
      <p class="word">sectumsempra</p>
      <form class="full-form">
        <input class="input-form extended" type="text" placeholder="go type as fast as possible!">
      </form>
    </div>
    <div class="players-stats">
      <p>adam: 9</p>
      <p>adam: 15</p>
      <p>thomas: 9</p>
      <p>tamara: 9</p>
      <p>adam: 21</p>
      <p>thomas: 15</p>
      <p>adam: 9</p>
      <p>adam: 15</p>
      <p>thomas: 9</p>
      <p>tamara: 9</p>
      <p>adam: 21</p>
      <p>thomas: 15</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GamePage'
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
