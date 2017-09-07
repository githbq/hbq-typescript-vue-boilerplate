<!-- src/components/Hello.vue -->
<template>
    <div>
        <div class="greeting">Hello {{name}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
import * as  Vue from "vue" 
const initialEnthusiasm = '11'
export default Vue.extend({
    props: ['name', 'initialEnthusiasm'],
    data() {
        return {
            enthusiasm: initialEnthusiasm
        }
    },
    methods: {
        increment() {
            console.log('increment')
        },
        decrement() {
            console.log('decrement')
        },
    },
    computed: {
    }
});
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
