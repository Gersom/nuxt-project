<template lang="pug">
  button.c-user(@click="toUserId(item.id)")
    figure
      img(:src="item.avatar_url")

    .c-user__content
      p User name: {{item.login}}
      p Id: {{item.id}}
      p Profile: {{item.html_url}}
      p Site admin: {{item.site_admin}}
      p Type: {{item.type}}
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default () {
          return {}
        }
      }
    },

    methods: {
      toUserId (id) {
        this.$router.push({
          name: 'users-id',
          params: {
            id: id
          }
        })
      }
    }
  }
</script>

<style>

</style>
