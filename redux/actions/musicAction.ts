export const PLAY_MUSIC = 'PLAY_MUSIC'

export const playMusic = (name, artist, imgUrl, songUrl) => ({
  type: PLAY_MUSIC,
  payload: {
    name, artist, imgUrl, songUrl
  }
})