import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Form from '@/components/Form'
import Table from '@/components/Table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    },
    {
      path: '/Table',
      name: 'Table',
      component: Table
    }
  ]
})
