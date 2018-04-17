<template>
    <manage-money :items="items"></manage-money>
</template>

<script>
import ManageMoney from '../public/manage-money.vue'
export default {
    data() {
        return {
            items: [{
                title: '定期理财',
                sub: '90天可质押',
                rate: '5.50%',
                text: '历史年化结算利率'
            },{
                title: '年年盈',
                sub: '理财推荐',
                rate: '5.80%',
                text: '综合年化收益率'
            },{
                title: '基智账户',
                sub: '组合投资',
                rate: '8%-10%',
                text: '止盈年化收益率'
            },{
                title: '小白基金',
                sub: '超短期',
                rate: '5.00%',
                text: '7日年化收益率'
            }]
        }
    },
    components: {
        ManageMoney
    }
}
</script>

<style lang="scss" module>
</style>


