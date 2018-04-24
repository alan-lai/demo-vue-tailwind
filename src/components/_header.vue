<template>
  <header class="px-6 py-6 bg-indigo-dark text-white">
    <h1>{{ title }}</h1>  
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: ['title'],
    data() {
      return {
      }
    }
  }
</script>