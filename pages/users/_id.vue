<template lang="pug">
  .UserId
    .container.my-4.mx-auto.flex-col
      div.flex.flex-row
        div.mr-6
          figure.text-center
            img.UserId__img.block.mb-4(:src="usersSelected.avatar_url")
            caption.block {{usersSelected.name}}
            p.block {{usersSelected.login}}
        div
          p Blog: {{usersSelected.blog}}
          p Company: {{usersSelected.company}}
          p Followers: {{usersSelected.followers}}
          p Following: {{usersSelected.following}}
          p Gists: {{usersSelected.public_gists}}
          p Location: {{usersSelected.location}}
          p Profile: {{usersSelected.html_url}}
          p Repositories: {{usersSelected.public_repos}}

      go-back(class="mt-4", text="Go Back", :route="'users'")
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import GoBack from '~/components/GoBack.vue'
  export default {
    components: {
      GoBack
    },

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
  .font-open
    font-family: 'Open Sans', sans-serif
  .UserId__img
    height: 10rem
    width: auto;
</style>
