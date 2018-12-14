import Vue from 'vue'
import Router from 'vue-router'
import computer from '@/components/computer'
import comprehensiveIncome from '@/components/comprehensiveIncome'
import production from '@/components/production'
import lease from '@/components/lease'
import interest from '@/components/interest'
import transfer from '@/components/transfer'
import accidental from '@/components/accidental'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'computer',
            component: computer,
            children: [
                {
                    path:'/comprehensiveIncome',
                    component:comprehensiveIncome
                },//综合所得
                {
                    path:'/production',
                    component:production
                },//生产经营所得
                {
                    path:'/lease',
                    component:lease
                },// 财产租赁所得
                {
                    path:'/interest',
                    component:interest
                },// 利息、股息、红利所得
                {
                    path:'/transfer',
                    component:transfer
                },//财产转让所得
                {
                    path:'/accidental',
                    component:accidental
                },//偶然所得

            ]
        }
    ]
})
