<template lang="pug">
  .c-user-list.flex.flex-wrap.justify-center
    user(v-for="item in list",
        :item="item",
        :key="item.id")
</template>

<script>
  import User from '~/components/User.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'UserList',
    components: {
      User
    },

    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      }
    },

    computed: {
      ...mapGetters(['wantedUsers'])
    }
  }
</script>

<style>

</style>
