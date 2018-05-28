<template lang="pug">
  .c-cards-container
    .c-cards-container__item.flex.flex-wrap.justify-center
      card(v-for="item in list",
          :item="item",
          :key="item.id")
</template>

<script>
  import Card from '~/components/Card.vue'

  export default {
    components: { Card },

    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
