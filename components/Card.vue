<template lang="pug">
  .c-card
    .c-card__front
      user-preview(
        :id_number="item.id || ''",
        :user_name="item.login || ''",
        :user_type="item.type || ''",
        :img_url="item.avatar_url || ''")
    .c-card__back
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
