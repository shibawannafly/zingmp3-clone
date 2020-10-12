import React from 'react'
import {PlayCircleOutlined, PauseCircleOutlined, BarChartOutlined } from '@ant-design/icons'
import styles from './Figure.module.css'

const Figure = ({ imgUrl, songUrl, w, h, showPlay, iconSize, text, type, icon }) => {

  const radius = type === 'round' ? '3px' : (type === 'circle' ? '50%' : '0')
  const isRotate = icon === 'pause'
  const chooseIcon = icon => {
    if(showPlay){
      if(icon === 'pause')
        return (
          <div className={ styles.icon }>
            <PauseCircleOutlined style={{color: '#fff', fontSize: iconSize }}/>
          </div>
        )
      
      if(icon === 'running') 
        return (
          <div className={ styles.icon }>
            <BarChartOutlined  style={{color: '#fff', fontSize: iconSize }}/>
          </div>
        )
      else {
        return (
          <div className={ styles.icon }>
            <PlayCircleOutlined style={{color: '#fff', fontSize: iconSize }}/>
          </div>
        )
      }
    }
  }

  return (
    <div href={songUrl} className={styles.figure} style={{ width: w, height: h, borderRadius: radius }} >
      <img src={imgUrl} alt="image" style={{ width: w, height: h }} className={isRotate ? styles.rotating : ''}/>
      {/* {
        (showPlay && icon==='play') && <div className={ styles.icon }>
          <PlayCircleOutlined style={{color: '#fff', fontSize: iconSize }}/>
        </div>
      }
      {
        (showPlay && icon==='pause') && <div className={ styles.icon }>
          <PauseCircleOutlined style={{color: '#fff', fontSize: iconSize }}/>
        </div>
      }
      {
        (showPlay && icon==='running') && <div className={ styles.icon }>
          <BarChartOutlined  style={{color: '#fff', fontSize: iconSize }}/>
        </div>
      } */}
      {
        chooseIcon(icon)
      }
      {
        (text !== '') && <div className={ styles.icon }>
          {text}
        </div>
      }
    </div>
  )
}

export default Figure