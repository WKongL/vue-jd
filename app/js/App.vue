<template>
  <div id="app">
    <m-header></m-header>
    <router-view/>
    <m-footer></m-footer>
    <navbar></navbar>
  </div>
</template>

<script>
import MHeader from './public/m-header.vue'
import MFooter from './public/footer.vue'
import Navbar from './public/navbar.vue'
export default {
  name: 'app',
  components: {
    MHeader,
    MFooter,
    Navbar
  }
}
</script>
