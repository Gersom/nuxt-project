<template lang="pug">
  nav.c-navigation.flex.items-center
    img.mr-4(src="~/assets/github.png", @click="$router.push({name:'index'})")
    .c-navigation__search.mr-4
      input.c-navigation__input(
        v-model="text_search",
        type="text",
        placeholder="Search",
        @keyup.esc="text_search = ''")
      span.c-navigation__icon-cross(@click="text_search = ''") x
    go-back(text="Go Back", :route="'index'")
</template>

<script>
  import GoBack from '~/components/GoBack.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    components: {
      GoBack
    },

    data () {
      return {
        data_users: [],
        text_search: '',
        data_result: []
      }
    },

    mounted () { this.data_users = this.users },

    methods: {
      ...mapActions([
        'updateWantedUsers', 'allWantedUsers'
      ])
    },

    watch: {
      users (val) {
        this.data_users = val
      },
      data_users (val) {
        if (this.text_search === '') {
          this.data_result = val
        }
      },
      text_search (val) {
        if (val === '') {
          this.data_result = this.data_users
          this.allWantedUsers()
        } else {
          let tmp = []
          this.data_users.find((item) => {
            if (item.login.indexOf(val) !== -1) {
              tmp.push(item)
            }
          })
          if (tmp) {
            this.data_result = tmp
            this.updateWantedUsers(tmp)
          } else {
            console.log('Error find in Navigation component');
          }
        }
      }
    },

    computed: {
      ...mapGetters(['users'])
    }
  }
</script>

<style lang="stylus">
  .c-navigation
    height: 8rem
    justify-content: center;
    &__search
      position: relative;
    &__input
      height: 1.5rem
      border: none
      padding: 1rem 1rem
    &__icon-cross
      position: absolute;
      top: 50%
      transform: translateY(-50%);
      color: #000
      right: 0.5rem
      cursor: pointer;
      font-family: Arial
    img
      height: 3rem
      cursor: pointer;
    @media (max-width: 600px)
      justify-content: flex-start;
</style>
