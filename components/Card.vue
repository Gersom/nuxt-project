<template lang="pug">
  .c-card(class="w-64 relative h-48 m-2")
    .c-card__container(class="absolute w-100 h-100")
      .c-card__front(class="w-64 h-48 absolute overflow-hidden z-20")
        user-preview(
          :id_number="item.id || ''",
          :user_name="item.login || ''",
          :user_type="item.type || ''",
          :img_url="item.avatar_url || ''")
      .c-card__back(class="w-64 h-48 relative bg-orange z-10")
        preview-userData(
          :user_name="item.login || ''",
          :profile_url="item.html_url || ''",
          :type="item.type || ''",
          :site_admin="item.site_admin || ''")
</template>

<script>
  import UserPreview from '~/components/UserPreview.vue'
  import PreviewUserData from '~/components/PreviewUserData.vue'
  export default {
    components: {
      UserPreview, PreviewUserData
    },
    props: {
      item: {
        Type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style lang="stylus">
  .c-card
    perspective: 600;

    &__container
      transform-style: preserve-3d;
      transition: all 1s ease-in-out;
    &__container:hover
      transform: rotateY(180deg);

    &__front
      backface-visibility: hidden;
      background-color: #202126
    &__back
      border: 1px solid #202126
      transform: rotateY(180deg);
</style>
