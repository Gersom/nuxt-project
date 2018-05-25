<template lang="pug">
  .UserId
    div
      div
        figure
          img(:src="usersSelected.avatar_url")
          caption {{usersSelected.name}}
          p {{usersSelected.login}}
      div
        p Blog: {{usersSelected.blog}}
        p Company: {{usersSelected.company}}
        p Followers: {{usersSelected.followers}}
        p Following: {{usersSelected.following}}
        p Gists: {{usersSelected.public_gists}}
        p Location: {{usersSelected.location}}
        p Profile: {{usersSelected.html_url}}
        p Repositories: {{usersSelected.public_repos}}

    button(class="button--green",
        @click="$router.push({name: 'users'})")
      |Regresar
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {

      }
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

<style lang="css">
</style>
