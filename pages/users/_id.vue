<template lang="pug">
  .UserId
    .container.my-6.mx-auto.flex.flex-col.items-center.justify-center
      div.flex.text-white
        div.mr-6
          figure.text-center
            img.UserId__img.block.mb-4(:src="usersSelected.avatar_url")
            caption.block {{usersSelected.name}}
            p.block {{usersSelected.login}}
        div.data.text-left
          p <span>Blog: </span><span>{{usersSelected.blog}}</span>
          p <span>Company: </span><span>{{usersSelected.company}}</span>
          p <span>Followers: </span><span>{{usersSelected.followers}}</span>
          p <span>Following: </span><span>{{usersSelected.following}}</span>
          p <span>Gists: </span><span>{{usersSelected.public_gists}}</span>
          p <span>Location: </span><span>{{usersSelected.location}}</span>
          p <span>Profile: </span><span>{{usersSelected.html_url}}</span>
          p <span>Repositories: </span><span>{{usersSelected.public_repos}}</span>

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
  .UserId
    background-color: #1b1a1f
    overflow: auto;
    & > *
      min-height: 100vh
    &__img
      height: 10rem
      width: auto;
    .data p
      &
        color: #737682
        font-weight: 600
      &> *:nth-child(1)
        font-weight: 300
        color: #fff
</style>
