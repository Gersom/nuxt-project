<template lang="html">
  <div class="">
    <h2>Hola?</h2>

    <button v-on:click="toUserId(2)">
      usuario numero 2
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toUserId (id) {
      this.$router.push({
        name: 'users-id',
        params: {
          id: id
        }
      })
    }
  }
}
</script>

<style lang="css">
</style>
