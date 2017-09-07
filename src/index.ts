
import * as Vue from 'vue'
import './class-component-hooks'

import HelloComponent from './components/Hello.vue'
const view = new Vue({
  template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :msg="5" />
    </div>
    `,
  data: { name: 'World' },
  components: {
    HelloComponent
  }
})
view.$mount('#root')
