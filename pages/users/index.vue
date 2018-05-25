<template lang="html">
  <div class="">
    <h2>Hola?</h2>

    <button v-on:click="toUserId(2)">
      usuario numero 2
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
      ...mapActions(['beginUsers']),
      toUserId (id) {
        this.$router.push({
          name: 'users-id',
          params: {
            id: id
          }
        })
      }
    },

    computed: {
      ...mapGetters(['users'])
    },

    created () {
      this.beginUsers()
    }
  }
</script>

<style lang="css">
</style>
