import Vuex from 'vuex'
import users from './modules/users/index.js'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      users
    }
  })
}

export default createStore
