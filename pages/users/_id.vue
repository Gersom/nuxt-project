<template lang="html">
  <div class="">
    <h2>el {{$route.params.id}}</h2>

    <button @click="back">
      Regresar
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
    back () {
      this.$router.push({
        name: 'users'
      })
    }
  }
}
</script>

<style lang="css">
</style>
