import { PLAY_MUSIC, RECEIVED_SONG_PAGE_DATA, ADD_TO_PLAY_LIST, REMOVE_FROM_PLAY_LIST } from '../actions/musicAction'

const initState = {
  listening: {},
  songPageData: {},
  playList: []
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

    case ADD_TO_PLAY_LIST:
      return {
        ...state,
        playList: [...state.playList, action.payload]
      }

    case REMOVE_FROM_PLAY_LIST:
      let newPlayList = [...state.playList]
      newPlayList = newPlayList.filter(item => item.name !== action.payload)
      return {...state, playList: newPlayList}

    default: return {...state}
  }
}

export default musicReducer
