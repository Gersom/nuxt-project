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
