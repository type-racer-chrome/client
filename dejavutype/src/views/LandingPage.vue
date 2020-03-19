<template>
  <div class="page">
    <p class="welcome-tag">welcome to</p>
    <h2 class="title">dejavutype</h2>
    <p class="tag">please enter your name</p>
    <form @submit.prevent="redirToWaitingRoom">
        <input class="input-form" v-model="name" type="text" placeholder="noob99">
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
