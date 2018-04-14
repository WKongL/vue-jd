<template lang="html">
    <div>
        <ibanner></ibanner>
        <welfare></welfare>
        <service></service>
        <help></help>
    </div>
</template>

<script>
import Ibanner from './ibanner.vue'
import Welfare from './welfare.vue'
import Service from './service.vue'
import Help from './help.vue'

export default {
  components: {
    Ibanner,
    Welfare,
    Service,
    Help
  }
}
</script>

<style lang="scss" module>
  
</style>
