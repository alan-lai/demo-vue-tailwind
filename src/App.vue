<template>
  <div id="app" :data-show-menu="menuIsVisible ? 'true' : 'false'" class="relative bg-white">
    <Main-menu :toggleMenu="toggleMenu" />
    <div id="primary-nav-panel-underlay" class="fixed t-0 pin-t pin-l bg-indigo-light"></div>
    <div id="page" class="relative z-1 flex flex-col">
      <div class="bg-indigo-darkest text-white px-6 py-6 flex justify-between">
        <router-link id="site-logo" to="/" class="bg-orange rounded-full text-white px-2 py-2 border-orange-dark border-4 rounded" active-class=""><span></span></router-link>
        <button @click="toggleMenu" class="text-white icn-menu relative bg-indigo px-2 py-2 border-white border-4 rounded"><span></span></button>
      </div>
      <router-view/>
      <Footer />
    </div>
  </div>
</template>

<script>
import MainMenu from './components/_mainMenu';
import Footer from './components/_footer';

export default {
  name: 'App',
  data() {
    return {
      menuIsVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsVisible = !this.menuIsVisible;
    }
  },
  components: {
    MainMenu,
    Footer
  }
}
</script>

<style lang="sass">
  @import './assets/styles/app.scss';
</style>
