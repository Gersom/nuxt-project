import * as types from './types'
import * as getters from './getters'
import * as actions from './actions'

const state = {
  users: [],
  user_id: 0,
  api: 'https://api.github.com'
}

const mutations = {
  [types.ADD_USERS] (state, data) {
    state.users = data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
