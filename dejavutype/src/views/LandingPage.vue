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
export default {
  name: 'LandingPage',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    redirToWaitingRoom: function () {
      this.$store.commit('insertPlayer', this.name)
      this.$router.push('/waitingroom')
    }
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
    min-height: 500px;
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
    margin-bottom: 10px;
}
.input-form {
    border: none;
    padding: .75rem 1rem;
    border-radius: 2px;
    font-family: inherit;
    font-size: 1.15rem;
    box-shadow: -5px 7px 26px -11px rgba(0,0,0,0.66);
}
.center-input {
  text-align: center;
}
.name-form {
  padding: .75rem 0;
}
.my-btn-go {
  border: none;
  height: 100%;
  width: 4rem;
  border-radius: 2px;
  margin-left: 1rem;
  background-color: #DCB142;
  font-family: inherit;
  font-size: 1.15rem;
  box-shadow: -5px 7px 26px -11px rgba(0,0,0,0.66);
  color: #234565;
  transition: .3s;
}
.my-btn-go:hover {
  transform: scale(1.1);
  background-color: seagreen;
  color: white;
}
</style>
