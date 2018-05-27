<template lang="pug">
  .container
    div
      logo()
      h1.title
        |GITHUB - USERS

      h2.subtitle
        |My awesome Nuxt Project

      .links
        go-back(text="See Users", route="users")
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import GoBack from '~/components/GoBack.vue'

  export default {
    components: {
      Logo, GoBack
    }
  }
</script>

<style>
  .container
  {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .title
  {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 4rem;
    color: #35495e;
    letter-spacing: 1px;
  }
  .subtitle
  {
    font-weight: 300;
    font-size: 2rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  .links
  {
    padding-top: 15px;
  }
</style>
