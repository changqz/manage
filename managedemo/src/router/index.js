import Vue from 'vue'
import Router from 'vue-router'
import HiteVision from '../components/organization/hiteVision'
import LeftScreen from '../components/organization/leftScreen'
import Serial from '../components/organization/serial'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:"/",
      component:HiteVision,
      children:[
        {
          path:"/",
          component:LeftScreen,
          children:[
            {
              path:"/",
              component:Serial
            },
          ]
        }
      ]
    }

  ]
})
