import React from 'react'
import OptionBtn from '../OptionBtn/'
import CustomLink from '../../atoms/CustomLink'
import styles from './TabItem.module.css'

const TabItem = ({ rank, name, artist, view, img }) => {

  const image = img !== ''

  const renderArtist = artist => (
    artist.map(a => (
      <CustomLink key={a} color={img ? '#fff' : '#959595'} size={12}> {a} </CustomLink>
    ))
  )

  const renderRank = rank => {
    if(rank < 10){
      return `0${rank}`
    }
    return `${rank}`
  }

  return (
  <div className={`${styles.tabItem} ${(image ? styles.firstImage : '')}`}>
    {
      image ? <img src={img} alt="anh"/> : null
    }
    
    <div className={styles.content}>
      <div className={styles.rank} style={{ color: img ? '#fff' : '#000' }}> {renderRank(rank)} </div>
      <div className={ styles.info }>
        <h3 className={styles.songName}> 
          <CustomLink color={img ? '#fff' : '#000'} size={14}>
            {name}
          </CustomLink>
        </h3>
        <h4 className={styles.artist}>
          {renderArtist(artist)}
        </h4>
      </div>
      <div className={ styles.tools }>
        <div className={styles.view} style={{ color: '#959595' }}> {view} </div>
        <div className={styles.option}><OptionBtn/></div>
      </div>
    </div>
  </div>
  )
}

export default TabItem