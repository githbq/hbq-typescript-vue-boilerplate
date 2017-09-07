import * as  Vue from 'vue'
import HelloComponent from './components/Hello.vue'

let v = new Vue({
    el: '#root',
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <hello-component :name="name" :initialEnthusiasm="5" />
    </div>
    `,
    data: { name: 'World' },
    components: {
        HelloComponent
    }
})
