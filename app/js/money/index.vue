<template lang="html">
    <div>
        <mbanner></mbanner>
        <ada></ada>
        <Choice></Choice>
        <adb></adb>
        <finance></finance>
        <adc></adc>
    </div>
</template>

<script>
import Mbanner from './mbanner.vue'
import Ada from './ada.vue'
import Choice from './choice.vue'
import Adb from './adb.vue'
import Finance from './finance.vue'
import Adc from './adc.vue'
export default {
  components: {
      Mbanner,
      Ada,
      Choice,
      Adb,
      Finance,
      Adc
  }
}
</script>

<style lang="scss" module>
  
</style>
