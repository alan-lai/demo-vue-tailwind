<template>
  <main>
    <Header :title="title" />
    <div class="content px-6 py-6">
      <p>You can contact me here at <a href="mailto:mc.alan.lai@gmail.com">mc.alan.lai@gmail.com</a></p>
    </div>
  </main>
</template>

<script>
import Header from './_header';

export default {
  name: 'ContactMe',
  data () {
    return {
      title: 'Contact Me'
    }
  },
  components: {
    Header
  }
}
</script>

<style>
</style>
