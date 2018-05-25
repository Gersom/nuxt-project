<template lang="pug">
  button(
    @click="$router.push({name: route})",
    class="border-solid border-green hover:bg-green rounded px-4 py-2 text-green hover:text-white")
    |{{text}}
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        default: 'Clic'
      },
      route: {
        type: String,
        default: 'index'
      }
    }
  }
</script>

<style lang="css">
</style>
