import { UPDATE_PUBLISHER_BASE } from '../actions/main'

const INITIAL_STATE = {
  publisherBase: 'ABC'
}

const publisherBase = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_PUBLISHER_BASE:
      return { ...state }

    default:
      return state
  }
}

export default publisherBase
