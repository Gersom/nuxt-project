<template lang="pug">
  button.c-user.p-4.m-1.flex(
    @click="toUserId(item.login)")
    figure.pr-4.flex-none
      img.c-user__img(:src="item.avatar_url")

    .c-user__content.text-left
      p <span>User name: </span><span>{{item.login}}</span>
      p <span>Id: </span><span>{{item.id}}</span>
      p <span>Profile: </span><span>{{item.html_url}}</span>
      p <span>Site admin: </span><span>{{item.site_admin}}</span>
      p <span>Type: </span><span>{{item.type}}</span>
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
  .c-user
    width: 25rem
    background-color: #2c2d31
    &__img
      height: 8rem
      width: auto
    &__content p
      &
        color: #737682
        font-weight: 600
      &> *:nth-child(1)
        font-weight: 300
        color: #fff
</style>
