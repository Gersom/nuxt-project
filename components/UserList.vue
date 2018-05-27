<template lang="pug">
  .c-user-list.flex.flex-wrap.justify-center
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
