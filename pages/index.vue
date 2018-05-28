<template lang="pug">
  .IndexScreen
    .container.mx-auto.flex.flex-col
      logo()
      h1.title
        |GITHUB - USERS

      h2.subtitle
        |My awesome Nuxt Project
      .links
        button(
          @click="$router.push({name: 'users'})",
          class="border-solid border-grey text-grey w-32 h-8 hover:border-red-light hover:text-red-light text-sm")
          |See users!
</template>

<script>
  import Logo from '~/components/Logo.vue'
  //- import GoBack from '~/components/GoBack.vue'

  export default {
    components: { Logo }
  }
</script>

<style>
  .IndexScreen {
    background-color: #1b1a1f
  }
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
