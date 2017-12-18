import * as constants from './constants'

export default {
  // 添加todo项
  addTodo ({ commit, dispatch, state }, value) {
    commit(constants.ADD_TODO, value)
  }
}
