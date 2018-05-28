<template lang="pug">
  nav.c-navigation.flex.items-center
    img.mr-4(
      src="~/assets/github.png", @click="$router.push({name:'index'})")

    .c-navigation__search
      users-search()
    //-
    //- go-back(text="Go Back", :route="'index'")
</template>

<script>
  // import GoBack from '~/components/GoBack.vue'
  import UsersSearch from '~/components/UsersSearch.vue'
  // import { mapActions, mapGetters } from 'vuex'

  export default {
    components: { UsersSearch },

    data () {
      return {}
    },
  }
</script>
