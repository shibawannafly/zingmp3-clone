import { PLAY_MUSIC } from '../actions/musicAction'

const initState = {
  listening: {}
}

const musicReducer = (state=initState, action) => {
  switch(action.type){
    case PLAY_MUSIC:
      return {...state, listening: action.payload}

    default: return {...state}
  }
}

export default musicReducer
