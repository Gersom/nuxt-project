<template lang="pug">
  .UserId.ScreenTransition
    .container.my-6.mx-auto.flex.flex-col.items-center.justify-center
      div.flex
        div.mr-6
          figure.text-center
            img.UserId__img.block.mb-4(:src="usersSelected.avatar_url")
            caption.block.text-white {{usersSelected.name}}
            p.block.text-white {{usersSelected.login}}
        div.data.text-left
          p
            span.text-grey-darker Blog:
            span.text-white {{usersSelected.blog}}
          p
            span.text-grey-darker Company:
            span.text-white {{usersSelected.company}}
          p
            span.text-grey-darker Followers:
            span.text-white {{usersSelected.followers}}
          p
            span.text-grey-darker Following:
            span.text-white {{usersSelected.following}}
          p
            span.text-grey-darker Gists:
            span.text-white {{usersSelected.public_gists}}
          p
            span.text-grey-darker Location:
            span.text-white {{usersSelected.location}}
          p
            span.text-grey-darker Profile:
            span.text-white {{usersSelected.html_url}}
          p
            span.text-grey-darker Repositories:
            span.text-white {{usersSelected.public_repos}}

      div.flex.mt-8
        a(:href="usersSelected.html_url",
          target="_blank",
          class="no-underline block mr-2 flex items-center justify-center border-solid border-red text-red w-32 h-8 hover:bg-red hover:text-white text-sm")
          |Github
        button(@click="$router.push({name: 'users'})",
          class="mr-2 border-solid border-red text-red w-32 h-8 hover:bg-red hover:text-white text-sm")
          |Go Back!
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {

    methods: {
      ...mapActions(['requestUserId']),
    },
    computed: {
      ...mapGetters(['usersSelected'])
    },

    created () {
      this.requestUserId(this.$route.params.id)
    }
  }
</script>

<style lang="stylus">
  .UserId
    background-color: #1b1a1f
    overflow: auto;
    & > *
      min-height: 100vh
    &__img
      height: 10rem
      width: auto;
</style>
