<template>
  <footer class="bg-black text-white mt-auto px-6 py-4">
    <p>&copy; Alan Lai {{ year }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: null
    }
  },
  beforeMount() {
    let date = new Date();
    this.year = date.getFullYear();
  }
}
</script>