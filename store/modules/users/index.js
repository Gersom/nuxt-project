import * as types from './types'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  users: [],
  user_selected: {},
  api: 'https://api.github.com'
}

const mutations = {
  [types.ADD_USERS] (state, data) {
    state.users = data
  },
  [types.ADD_USER_SELECTED] (state, data) {
    state.user_selected = data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
