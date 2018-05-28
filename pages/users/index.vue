<template lang="pug">
  .UserScreen.overflow-auto
    .container.mx-auto.flex-col
      .top.block.h-16.flex.justify-center.bg-white.fixed.pin-t.pin-l.z-10
        navigation-bar()
      .list
        cards-container(:list="wantedUsers")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import NavigationBar from '~/components/NavigationBar.vue'
  import CardsContainer from '~/components/CardsContainer.vue'

  export default {
    components: {
      NavigationBar,
      CardsContainer
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
    .list
      margin-top: 5rem
</style>
