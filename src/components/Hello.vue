<!-- src/components/Hello.vue -->
<template>
  <div>
    <div class="greeting">Hello {{name}}</div>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import * as Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props: {
    name: String,
    msg: String
  }
})
export default class App extends Vue {
  name = 'abc' + this.msg

  // method
  decrement() {
    this.name += '+1'
  }
  increment() {
    this.name += '-1'
  }
}
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
