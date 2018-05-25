<template lang="html">
  <div class="">
    <h2>el {{$route.params.id}}</h2>

    <button @click="back">
      Regresar
    </button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {

      }
    },

    methods: {
      ...mapActions(['requestUserId']),
      back () {
        this.$router.push({
          name: 'users'
        })
      }
    },

    created () {
      this.requestUserId(this.$route.params.id)
    }
  }
</script>

<style lang="css">
</style>
