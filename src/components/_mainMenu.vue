<template>
  <div id="primary-nav-panel" class="fixed z-50 transition-all-slow pin-t pin-l">
    <nav class="bg-indigo-darkest text-white px-6 py-6">
      <div class="text-right">
        <button class="px-2 py-2 bg-red-dark text-white rounded border-red-light border-4 icn-x" @click="toggleMenu"><span></span></button>
      </div>
      <ul class="text-xl list-reset mt-8">
        <MainMenuItem :toggleMenu="toggleMenu" :url="'/'" :exact="true" :text="'Home'" />
        <MainMenuItem :toggleMenu="toggleMenu" :url="'/about'" :text="'About Me'" />
        <MainMenuItem :toggleMenu="toggleMenu" :url="'/demos'" :text="'Demo Projects'" />
        <MainMenuItem :toggleMenu="toggleMenu" :url="'/contact'" :text="'Contact Me'" />
      </ul>
    </nav>
    <div class="close" @click="toggleMenu"></div>
  </div>
</template>

<script>
import MainMenuItem from './_mainMenuItem';

export default {
  name: 'MainMenu',
  props: ['toggleMenu'],
  data() {
    return {}
  },
  components: {
    MainMenuItem
  }
}
</script>