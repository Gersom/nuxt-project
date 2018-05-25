<template lang="pug">
  .c-user-list
    user(v-for="item in list",
        :item="item",
        :key="item.id")
</template>

<script>
  import User from '~/components/User.vue'
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
    }
  }
</script>

<style>

</style>
