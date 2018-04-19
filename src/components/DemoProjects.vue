<template>
  <main>
    <Header :title="title" />
    <div class="content px-6 py-6">
      <p>There are various incomplete projects that can be found on my <a href="https://github.com/alan-lai" target="_blank" rel="noopener noreferrer">GitHub</a>. I like to try out different things and get it to a point where I feel like I have achieved my goal... then I stop. The purpose of these projects are not to produce complete websites for clients but to serve as a playground for exploring ideas.</p>
      <p class="mt-4">Here is a <a href="https://demo-react.alanlai.name/" target="_blank" rel="noopener noreferrer">sample React project</a> that was produced by following <a href="https://www.simonswiss.com/" target="_blank" rel="noopener noreferrer">Simon Vrachliotis</a>' <a href="https://www.youtube.com/watch?v=3TX90RSfeQk" target="_blank" rel="noopener noreferrer">Youtube tutorial</a>. It is a simple application for searching for common baby names and creating a short-list. Taking this project further, I <a href="https://demo-vue.alanlai.name/" target="_blank" rel="noopener noreferrer">re-wrote it</a> in VueJS for fun.</p>
    </div>
  </main>
</template>

<script>
import Header from './_header';

export default {
  name: 'DemoProjects',
  data () {
    return {
      title: 'Demo Projects'
    }
  },
  components: {
    Header
  }
}
</script>

<style>
</style>
