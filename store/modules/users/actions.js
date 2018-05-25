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

export const requestUserId = ({commit, state}, id) => {
  axios({
    method: 'get',
    url: `${state.api}/users/${id}`,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(({ data }) => {
    commit(types.ADD_USER_SELECTED, data)
    // commit(types.AJAX_CALL_SUCCESS)
  })
  .catch(({response}) => {
    // commit(types.AJAX_CALL_ERROR)
  })
}
