<template>
  <main>
    <Header :title="title" />
    <div class="content px-6 py-6">
      <p>This is an experimental website built with <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">VueJS</a> and <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind</a>. Feel free to have a click around.</p>
      <p class="mt-4">To view the static version of this website generated with NuxtJS <a href="https://demo-nuxt.alanlai.name/" target="_blank" rel="noopener noreferrer">click here</a>.</p>
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
