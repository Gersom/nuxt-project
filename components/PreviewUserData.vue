<template lang="pug">
  .c-preview-user-data
    .c-preview-user-data__data
      p <span>User name: </span><span>{{user_name}}</span>
      p <span>Github: </span><span>{{profile_url}}</span>
      p <span>Type: </span><span>{{type}}</span>
    .c-preview-user-data__buttons
      button
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
    }
  }
</script>
