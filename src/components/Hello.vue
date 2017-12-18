<!-- src/components/Hello.vue -->
<template>
  <div class="abc">
    <div class="greeting">Hello {{newName}}</div>7777799
    <br/>
    _newName:{{_newName}}
    <br/>
    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import * as Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  props: {
    // name: String,
    msg: String
  }
})
export default class App extends Vue {
  newName: string = ''
  created() {
    this.newName = 'abc' + this.$props.msg
  }
  get _newName() {
    return this.newName
  }
  // method
  decrement() {
    this.newName += '+1'
  }
  increment() {
    this.newName += '-1'
  }
  // hooks
  //  beforeRouteEnter () {
  //   console.log('beforeRouteEnter')
  // }

  // beforeRouteLeave () {
  //   console.log('beforeRouteLeave')
  // }
}
</script>

<style lang="less" scoped>
.abc {
  border: 5px solid yellow;
  font-size: 20px;
  div {
    border: 5px solid red;
  }
}
</style>
