import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import SidePage from './views/SidePage.vue'
import SidePage1 from './views/side-page-sub/SidePage1.vue'
import SidePage2 from './views/side-page-sub/SidePage2.vue'
import SidePage3 from './views/side-page-sub/SidePage3.vue'
import SidePage4 from './views/side-page-sub/SidePage4.vue'
import DataPage from './views/DataPage.vue'
import DataPage1 from './views/DataPage1.vue'
import DataPage1_1 from './views/DataPage1_1.vue'
import DataPage1_1_1 from './views/DataPage1_1_1.vue'
import DataPage1_1_2 from './views/DataPage1_1_2.vue'
import DataPage1_1_3 from './views/DataPage1_1_3.vue'
import DataPage1_1_4 from './views/DataPage1_1_4.vue'
import DataPage1_2 from './views/DataPage1_2.vue'
import DataPage1_2_1 from './views/DataPage1_2_1.vue'
import DataPage1_2_2 from './views/DataPage1_2_2.vue'
import DataPage1_2_3 from './views/DataPage1_2_3.vue'
import DataPage1_2_4 from './views/DataPage1_2_4.vue'
import DataPage2 from './views/DataPage2.vue'
import DataPage2_1 from './views/DataPage2_1.vue'
import DataPage2_1_1 from './views/DataPage2_1_1.vue'
import DataPage2_1_2 from './views/DataPage2_1_2.vue'
import DataPage2_1_3 from './views/DataPage2_1_3.vue'
import DataPage2_1_4 from './views/DataPage2_1_4.vue'
import DataPage2_2 from './views/DataPage2_2.vue'
import DataPage2_2_1 from './views/DataPage2_2_1.vue'
import DataPage2_2_2 from './views/DataPage2_2_2.vue'
import DataPage2_2_3 from './views/DataPage2_2_3.vue'
import DataPage2_2_4 from './views/DataPage2_2_4.vue'
import DataPage3 from './views/DataPage3.vue'
import DataPage3_1 from './views/DataPage3_1.vue'
import DataPage3_1_1 from './views/DataPage3_1_1.vue'
import DataPage3_1_2 from './views/DataPage3_1_2.vue'
import DataPage3_1_3 from './views/DataPage3_1_3.vue'
import DataPage3_1_4 from './views/DataPage3_1_4.vue'
import DataPage3_2 from './views/DataPage3_2.vue'
import DataPage3_2_1 from './views/DataPage3_2_1.vue'
import DataPage3_2_2 from './views/DataPage3_2_2.vue'
import DataPage3_2_3 from './views/DataPage3_2_3.vue'
import DataPage3_2_4 from './views/DataPage3_2_4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
          path: '/home',
          name: 'home',
          component: Home
      },
    {
      path: '/about',
      name: 'about',
      component: About
    },{
          path: '/datapage',
          name: 'dataPage',
          component: DataPage
      },{
          path: '/datapage1',
          name: 'dataPage1',
          component: DataPage1
      }, {
          path: '/datapage1_1',
          name: 'dataPage1_1',
          component: DataPage1_1
      },{
          path: '/datapage1_1_1',
          name: 'dataPage1_1_1',
          component: DataPage1_1_1
      },{
          path: '/datapage1_1_2',
          name: 'dataPage1_1_2',
          component: DataPage1_1_2
      },{
          path: '/datapage1_1_3',
          name: 'dataPage1_1_3',
          component: DataPage1_1_3
      },{
          path: '/datapage1_1_4',
          name: 'dataPage1_1_4',
          component: DataPage1_1_4
      },{
          path: '/datapage1_2',
          name: 'dataPage1_2',
          component: DataPage1_2
      },{
          path: '/datapage1_2_1',
          name: 'dataPage1_2_1',
          component: DataPage1_2_1
      },{
          path: '/datapage1_2_2',
          name: 'dataPage1_2_2',
          component: DataPage1_2_2
      },{
          path: '/datapage1_2_3',
          name: 'dataPage1_2_3',
          component: DataPage1_2_3
      },{
          path: '/datapage1_2_4',
          name: 'dataPage1_2_4',
          component: DataPage1_2_4
      },
      {
          path: '/datapage2',
          name: 'dataPage2',
          component: DataPage2
      },{
          path: '/datapage2_1',
          name: 'dataPage2_1',
          component: DataPage2_1
      },{
          path: '/datapage2_1_1',
          name: 'dataPage2_1_1',
          component: DataPage2_1_1
      },{
          path: '/datapage2_1_2',
          name: 'dataPage2_1_2',
          component: DataPage2_1_2
      },{
          path: '/datapage2_1_3',
          name: 'dataPage2_1_3',
          component: DataPage2_1_3
      },{
          path: '/datapage2_1_4',
          name: 'dataPage2_1_4',
          component: DataPage2_1_4
      },{
          path: '/datapage2_2',
          name: 'dataPage2_2',
          component: DataPage2_2
      },{
          path: '/datapage2_2_1',
          name: 'dataPage2_2_1',
          component: DataPage2_2_1
      },{
          path: '/datapage2_2_2',
          name: 'dataPage2_2_2',
          component: DataPage2_2_2
      },{
          path: '/datapage2_2_3',
          name: 'dataPage2_2_3',
          component: DataPage2_2_3
      },{
          path: '/datapage2_2_4',
          name: 'dataPage2_2_4',
          component: DataPage2_2_4
      }, {
          path: '/datapage3',
          name: 'dataPage3',
          component: DataPage3
      },{
          path: '/datapage3_1',
          name: 'dataPage3_1',
          component: DataPage3_1
      },{
          path: '/datapage3_1_1',
          name: 'dataPage3_1_1',
          component: DataPage3_1_1
      },{
          path: '/datapage3_1_2',
          name: 'dataPage3_1_2',
          component: DataPage3_1_2
      },{
          path: '/datapage3_1_3',
          name: 'dataPage3_1_3',
          component: DataPage3_1_3
      },{
          path: '/datapage3_1_4',
          name: 'dataPage3_1_4',
          component: DataPage3_1_4
      },{
          path: '/datapage3_2',
          name: 'dataPage3_2',
          component: DataPage3_2
      },{
          path: '/datapage3_2_1',
          name: 'dataPage3_2_1',
          component: DataPage3_2_1
      },{
          path: '/datapage3_2_2',
          name: 'dataPage3_2_2',
          component: DataPage3_2_2
      },{
          path: '/datapage3_2_3',
          name: 'dataPage3_2_3',
          component: DataPage3_2_3
      },{
          path: '/datapage3_2_4',
          name: 'dataPage3_2_4',
          component: DataPage3_2_4
      },
      {
          path: '/sidepage',
          name: 'sidePage',
          component: SidePage,
          children: [
              {
                  path: '/',
                  component: SidePage1
              },
              {
                  path: 'sidepage1',
                  component: SidePage1
              },
              {
                  path: 'sidepage2',
                  component: SidePage2
              },
              {
                  path: 'sidepage3',
                  component: SidePage3
              },
              {
                  path: 'sidepage4',
                  component: SidePage4
              }
          ]
      }
  ]
})
