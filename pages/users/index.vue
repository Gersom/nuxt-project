<template lang="pug">
  .UserScreen.overflow-auto.text-white
    .container.my-2.mx-auto.flex-col
      .top.flex.justify-center
        h2.mr-4 Users!
        go-back(class="mb-4", text="Go Back", :route="'index'")
      .list
        user-list(:list="users")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import UserList from '~/components/UserList.vue'
  import GoBack from '~/components/GoBack.vue'

  export default {
    components: {
      UserList,
      GoBack
    },

    methods: {
      ...mapActions([
        'beginUsers', 'defaultUserId'
      ])
    },

    computed: {
      ...mapGetters(['users'])
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
</style>
