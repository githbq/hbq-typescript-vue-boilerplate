
import * as Vue from 'vue'
import { createStore } from '@/store'
import HelloComponent from '@/components/Hello.vue'
new Vue({
  el: '#root',
  store: createStore(),
  template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :msg="'5'" />
    </div>
    `,
  data: { name: 'World' },
  components: {
    HelloComponent
  }
})
