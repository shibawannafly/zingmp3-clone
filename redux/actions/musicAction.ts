export const PLAY_MUSIC = 'PLAY_MUSIC'
export const FETCH_SONG_PAGE_DATA = 'FETCH_SONG_PAGE_DATA'
export const RECEIVED_SONG_PAGE_DATA = 'RECEIVED_SONG_PAGE_DATA'

export const playMusic = (name, artist, imgUrl, songUrl, duration) => {

  return {
    type: PLAY_MUSIC,
    payload: {  
      name, artist, imgUrl, songUrl, duration
    }
  }
}

export const fetchSongPageData = () => ({
  type: FETCH_SONG_PAGE_DATA
})