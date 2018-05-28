import * as types from './types'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  api: 'https://api.github.com',
  user_selected: {},
  users: [],
  wanted_users: []
}

const mutations = {
  [types.ADD_USERS] (state, data) {
    state.users = data
    state.wanted_users = data
  },
  [types.UPDATE_USER_SELECTED] (state, data) {
    state.user_selected = data
  },
  [types.UPDATE_WANTED_USERS] (state, data) {
    state.wanted_users = data
  },
  [types.ALL_WANTED_USERS] (state) {
    state.wanted_users = state.users
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
