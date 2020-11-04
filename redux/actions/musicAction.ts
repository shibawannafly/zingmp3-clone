export const PLAY_MUSIC = 'PLAY_MUSIC'
export const FETCH_SONG_PAGE_DATA = 'FETCH_SONG_PAGE_DATA'
export const RECEIVED_SONG_PAGE_DATA = 'RECEIVED_SONG_PAGE_DATA'
export const ADD_TO_PLAY_LIST = 'ADD_TO_PLAY_LIST'
export const REMOVE_FROM_PLAY_LIST = 'REMOVE_FROM_PLAY_LIST'

export const playMusic = (name, artist, imgUrl, duration, songUrl) => {

  return {
    type: PLAY_MUSIC,
    payload: {  
      name, artist, imgUrl, duration, songUrl
    }
  }
}

export const fetchSongPageData = () => ({
  type: FETCH_SONG_PAGE_DATA
})

export const addToplayList = (song) => {
  return {
    type: ADD_TO_PLAY_LIST,
    payload: song
  }
}

export const removeFromPlayList = (name) => {
  return {
    type: REMOVE_FROM_PLAY_LIST,
    payload: name
  }
}