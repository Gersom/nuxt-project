<template lang="pug">
  nav.c-navigation.flex.items-center.h-full
    img.mr-4.h-8.w-8(
      src="~/assets/github.png", @click="$router.push({name:'index'})")

    .c-navigation__search
      users-search()

    .c-navigation__go-back.ml-4
      button(
        @click="$router.push({name: 'index'})",
        class="border-solid border-black text-black w-32 h-8 hover:bg-black hover:text-white text-sm")
        |Go Back!
</template>

<script>
  import UsersSearch from '~/components/UsersSearch.vue'

  export default {
    components: { UsersSearch }
  }
</script>
