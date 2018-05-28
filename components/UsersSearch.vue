<template lang="pug">
  .c-search
    input.c-navigation__input(
      v-model="text_search",
      type="text",
      placeholder="Search",
      @keyup.esc="text_search = ''")
    span.c-navigation__icon-cross(@click="text_search = ''") x
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
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
