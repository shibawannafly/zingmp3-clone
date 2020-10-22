import React from 'react'
import { Tooltip } from 'antd'
import { HeartOutlined, MoreOutlined, } from '@ant-design/icons'
import styles from './ToolBtn.module.scss'
import MoreBox from '../../organisms/MoreBox'
import {Dropdown} from 'antd'

type Props = {
  size: string,
  name: string,
  artist: string,
  imgUrl: string
}

const ToolBtn:React.FC<Props> = ({size, name, artist, imgUrl}: Props) => {

  const st = {
    fontSize: size === 'small' ? '12px' : '20px',
    width: size === 'small' ? '26px' : '40px',
    height: size === 'small' ? '26px' : '40px'
  }

  const box = <MoreBox
    name={name}
    artist={artist}
    imgUrl={imgUrl}
  />

  return (
    <div className={styles.toolBtn}>
      <Tooltip placement="top" title={'Thêm vào thư viện'}>
        <button className={styles.btn} style={st}><HeartOutlined /></button>
      </Tooltip>
  
      <Dropdown overlay={box} trigger={["click"]} placement="bottomCenter"> 
        <Tooltip placement="top" title={'Khác'}>
          <button className={styles.btn} style={st}>
            <MoreOutlined style={{transform: `rotate(90deg)`}}/>
          </button>
        </Tooltip>
      </Dropdown>
      
    </div>
  )
}

export default ToolBtn
