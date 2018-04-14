<template lang="html">
    <div>
        <banner></banner>
        <novice></novice>
        <borrow></borrow>
        <money></money>
        <product></product>
        <life></life>
        <help></help>
    </div>
</template>

<script>
import Banner from './banner.vue'
import Novice from './novice.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Life from './life.vue'
import Help from './help.vue'
export default {
  components: {
    Banner,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Help
  }
}
</script>

<style lang="scss" module>
  
</style>
