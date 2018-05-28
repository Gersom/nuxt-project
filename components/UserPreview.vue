<template lang="pug">
  .c-user-preview
    .c-user-preview__id
      span {{id_number}}
    figure
      img.c-user-preview__img(:src="img_url")
    p
      span User name:
      span {{user_name}}
    p
      span {{user_type}}
</template>

<script>
  export default {
    props: {
      id_number: {
        Type: Number,
        default: 0
      },
      user_name: {
        type: String,
        default: 'None'
      },
      user_type: {
        type: String,
        default: ''
      },
      img_url: {
        type: String,
        default: '#'
      }
    }
  }
</script>
