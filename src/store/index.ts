import * as Vue from 'vue'
import * as Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 应用初始状态
const state = {
  a: 1,
  b: 2,
  c: { value: 3 }
}

// 创建 store 实例

export const createStore = () => {
  return new Vuex.Store({
    actions,
    getters,
    state,
    mutations
  })
}
