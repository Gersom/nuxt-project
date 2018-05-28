<template lang="pug">
  .c-user-preview(
    class="flex flex-col items-center justify-center w-100 relative h-full")
    .c-user-preview__id(
      class="absolute p-2 text-xs text-red flex items-end justify-end rounded border-solid border-red")
      span {{id_number}}
    figure.c-user-preview__figure(
      class="block h-24 w-24 rounded-full overflow-hidden")
      img.c-user-preview__img(
        :src="img_url",
        class="h-full w-auto")
    p.mt-4
      span.text-grey-darker User name: 
      span.text-white {{user_name}}
    p
      span.text-grey-darker {{user_type}}
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

<style lang="stylus">
  .c-user-preview
    &__id
      height: 2.5rem
      width: 2.5rem
      top: 0rem
      left: 0rem
</style>
