import { PLAY_MUSIC, RECEIVED_SONG_PAGE_DATA } from '../actions/musicAction'

const initState = {
  listening: {},
  songPageData: {}
}

const musicReducer = (state=initState, action) => {
  switch(action.type){
    case PLAY_MUSIC:
      return {...state, listening: action.payload}

    case RECEIVED_SONG_PAGE_DATA:
      return {
        ...state, 
        songPageData: action.payload,
        listening: action.payload.album[0]
      }

    default: return {...state}
  }
}

export default musicReducer
