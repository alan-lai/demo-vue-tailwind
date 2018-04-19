<template>
  <main>
    <Header :title="title" />
    <div class="content px-6 py-6">
      <p>My name is Alan Lai and I am a Front End Web Developer based in Sydney. I am interesting in adopting different FE technologies. At the moment I am focusing on Vue and React.</p>
      <p class="pt-4">I am also interested in <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>, <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">MongoDB</a> / <a href="http://mongoosejs.com/" target="_blank" rel="noopener noreferrer">MongooseJS</a> and <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">NodeJS</a> / <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">ExpressJS</a>.</p>
    </div>
  </main>
</template>

<script>
import Header from './_header';

export default {
  name: 'AboutMe',
  data () {
    return {
      title: 'About Me'
    }
  },
  components: {
    Header
  }
}
</script>

<style>
</style>
