<template lang="html">
    <div>
        <m-header></m-header>
        <banner></banner>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <m-footer></m-footer>
        <navbar></navbar>
    </div>
</template>

<script>
import MHeader from '../public/m-header.vue'
import Banner from './banner.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import MFooter from '../public/footer.vue'
import Navbar from '../public/navbar.vue'
export default {
  components: {
    MHeader,
    Banner,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    MFooter,
    Navbar
  }
}
</script>

<style lang="scss" module>
  
</style>
