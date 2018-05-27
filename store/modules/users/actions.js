import * as types from './types'
import axios from 'axios'

// export const beginAjaxCall = ({commit, dispatch, state, rootState}) => {}

export const beginUsers = ({commit, state}) => {
  axios({
    method: 'get',
    url: `${state.api}/users`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(({ data }) => {
    commit(types.ADD_USERS, data)
    // commit(types.AJAX_CALL_SUCCESS)
  })
  .catch(({response}) => {
    // commit(types.AJAX_CALL_ERROR)
  })
}

export const requestUserId = ({commit, state}, name) => {
  axios({
    method: 'get',
    url: `${state.api}/users/${name}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(({ data }) => {
    commit(types.UPDATE_USER_SELECTED, data)
    // commit(types.AJAX_CALL_SUCCESS)
  })
  .catch(({response}) => {
    // commit(types.AJAX_CALL_ERROR)
  })
}

export const defaultUserId = ({commit, state}) => {
  commit(types.UPDATE_USER_SELECTED, {})
}

export const updateWantedUsers = ({commit, state}, userResult) => {
  commit(types.UPDATE_WANTED_USERS, userResult)
}
export const allWantedUsers = ({commit, state}) => {
  commit(types.ALL_WANTED_USERS)
}
