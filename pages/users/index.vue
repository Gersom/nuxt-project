<template lang="pug">
  .UserScreen.overflow-auto.text-white
    .container.mx-auto.flex-col
      .top.block
        navigation()
      .list
        user-list(:list="wantedUsers")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Navigation from '~/components/Navigation.vue'
  import UserList from '~/components/UserList.vue'

  export default {
    components: {
      Navigation,
      UserList
    },

    methods: {
      ...mapActions([
        'beginUsers', 'defaultUserId'
      ])
    },

    computed: {
      ...mapGetters(['wantedUsers'])
    },

    created () {
      this.beginUsers()
    },
    beforeMount () {
      this.defaultUserId()
    }
  }
</script>

<style lang="stylus">
  .UserScreen
    background-color: #1b1a1f
    min-height: 100vh
    .top
      width: 100%
</style>
