<template lang="pug">
  button.c-user.bg-white.p-2.m-2(@click="toUserId(item.login)")
    figure
      img.c-user__img(:src="item.avatar_url")

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
      toUserId (name) {
        this.$router.push({
          name: 'users-id',
          params: {
            id: name
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  .c-user__img
    height: 8rem
    width: auto
</style>
