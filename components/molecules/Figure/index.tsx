import React, {useState} from 'react'
import {PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import WaveIcon from '../../atoms/WaveIcon'
import styles from './Figure.module.css'
import { useDispatch } from 'react-redux'
import {playMusic} from '../../../redux/actions/musicAction'

type Props = {
  name?: string,
  artist?: string,
  imgUrl?: string,
  songUrl?: string,
  w?: number,
  h?: number,
  showPlay?: boolean,
  iconSize?: number,
  text?: string,
  type?: string,
  icon?: string,
  music?: boolean
}

const Figure:React.FC<Props> = ({ name, artist, imgUrl, songUrl, w, h, showPlay, iconSize, text, type, icon, music }: Props) => {
  
  const dispatch = useDispatch()

  const radius = type === 'round' ? '4px' : (type === 'circle' ? '50%' : '0')
  const isRotate = icon === 'pause'

  const handleClick = () => {
    music && dispatch(playMusic(name, artist, imgUrl, songUrl))
  }

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
          <div className={ styles.iconRunning }>
            <WaveIcon/>
          </div>
        )
      else {
        return (
          <div className={ styles.icon } onClick={handleClick}>
            <PlayCircleOutlined style={{color: '#fff', fontSize: iconSize }}/>
          </div>
        )
      }
    }
  }

  return (
    <div className={styles.figure} style={{ width: w, height: h, borderRadius: radius }} >
      <div 
        style={{borderRadius: radius}}
        className={`${styles.thumb} ${isRotate ? styles.rotating : (icon === 'play' ? styles.turnBack : '')}`} 
        >
        <img 
          src={imgUrl} 
          alt="image" 
          style={{ width: w, height: h}}
          className={icon === 'running' ? styles.imgRunning : ''}
        />
      </div>
      
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