<template lang="pug">
  .UserScreen
    h2 Hola!

    user-list(:list="users")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import UserList from '~/components/UserList.vue'

  export default {
    components: {
      UserList
    },

    data () {
      return {
      }
    },

    methods: {
      ...mapActions(['beginUsers'])
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
