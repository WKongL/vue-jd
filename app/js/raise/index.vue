<template lang="html">
    <div>
        <rbanner></rbanner>
        <singin></singin>
        <recommend></recommend>
        <welfare></welfare>
    </div>
</template>

<script>
import Rbanner from './rbanner.vue'
import Singin from './singin.vue'
import Recommend from './recommend.vue'
import Welfare from './welfare.vue'
export default {
  components: {
      Rbanner,
      Singin,
      Recommend,
      Welfare
  }
}
</script>

<style lang="scss" module>
  
</style>
