import React, {useState} from 'react'
import { Tooltip } from 'antd'
import {CodeSandboxCircleFilled, HeartOutlined, MoreOutlined, } from '@ant-design/icons'
import styles from './ToolBtn.module.css'
import MoreBox from '../../organisms/MoreBox'


const ToolBtn = ({size, name, artist, imgUrl}) => {
  const [showBox, setShowBox] = useState(false)
  const [pos, setPos] = useState([0, 0])
  const st = {
    fontSize: size === 'small' ? '12px' : '20px',
    width: size === 'small' ? '26px' : '40px',
    height: size === 'small' ? '26px' : '40px'
  }

  const handleClick = (e) => {
    console.log(e.clientX, e.clientY)
    setPos([e.clientX - 300, e.clientY - 50])
    setShowBox(prev => !prev)
  }

  return (
    <div className={styles.toolBtn}>
      <Tooltip placement="top" title={'Thêm vào thư viện'}>
        <button className={styles.btn} style={st}><HeartOutlined /></button>
      </Tooltip>
  
      <Tooltip placement="top" title={'Khác'}>
        <button className={styles.btn} style={st} onClick={ handleClick }>
          <MoreOutlined style={{transform: `rotate(90deg)`}}/>
        </button>
      </Tooltip>
      {
        showBox && <MoreBox
          name={name}
          artist={artist}
          imgUrl={imgUrl}
          st={{top: pos[1], left: pos[0]}}
        />
      }
    </div>
  )
}

export default ToolBtn
