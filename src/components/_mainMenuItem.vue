<template>
  <li class="mb-4">
    <router-link :to="url" class="text-white hover:text-indigo-light no-underline transition-all" active-class="text-orange-light" @click.native="toggleMenu" :exact="exact">{{ text }}</router-link>
  </li>
</template>

<script>
  export default {
    name: 'MainMenuItem',
    props: ['url', 'text', 'exact', 'toggleMenu'],
    data() {
      return {}
    }
  }
</script>