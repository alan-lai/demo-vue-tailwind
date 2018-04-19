<template>
  <main>
    <Header :title="title" />
    <div class="content px-6 py-6">
      <p>This is an experimental website built with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJS</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</a>. Feel free to have a click around.</p>
    </div>
  </main>
</template>

<script>
import Header from './_header';

export default {
  name: 'Homepage',
  data () {
    return {
      title: 'Hi there!'
    }
  },
  components: {
    Header
  }
}
</script>

<style>
</style>
