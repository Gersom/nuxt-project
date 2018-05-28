<template lang="pug">
  .c-preview-user-data.w-full.p-6
    .c-preview-user-data__data.text-sm
      p
        span.text-black.font-semibold User name:
      p.mb-2
        span.text-white {{user_name}}
      p
        span.text-black.font-semibold Github:
      p.mb-2
        span.text-white {{profile_url}}
      p
        span.text-black.font-semibold Type:
      p.mb-2
        span.text-white {{type}}
    .c-preview-user-data__buttons
      button(
        @click="toUserId",
        class="absolute border-solid border-black text-black w-32 h-8 hover:bg-black hover:text-white text-sm")
        |Profile
</template>

<script>
  export default {
    props: {
      user_name: {
        type: String,
        default: '-'
      },
      profile_url: {
        type: String,
        default: '-'
      },
      type: {
        type: String,
        default: '-'
      },
      site_admin: {
        type: Boolean,
        default: false
      }
    },

    methods: {
      toUserId () {
        this.$router.push({
          name: 'users-id',
          params: {
            id: this.user_name
          }
        })
      }
    }
  }
</script>

<style lang="stylus">
  .c-preview-user-data
    &__buttons
      & > *
        bottom 1rem
        left: 50%
        transform: translateX(-50%);
</style>
