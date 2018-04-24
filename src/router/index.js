import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import AboutMe from '@/components/AboutMe'
import DemoProjects from '@/components/DemoProjects'
import ContactMe from '@/components/ContactMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/about',
      name: 'About Me',
      component: AboutMe
    },
    {
      path: '/demos',
      name: 'Demo Projects',
      component: DemoProjects
    },
    {
      path: '/contact',
      name: 'Contact Me',
      component: ContactMe
    }
  ]
})
