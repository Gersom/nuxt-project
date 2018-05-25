<template lang="pug">
  .UserScreen
    h2 Hola!
    button(class="button--green",
        @click="$router.push({name: 'index'})")
      |Regresar

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

<style lang="css">
</style>
