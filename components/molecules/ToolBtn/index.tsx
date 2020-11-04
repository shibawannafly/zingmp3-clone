import React from 'react'
import { Tooltip } from 'antd'
import { HeartOutlined, MoreOutlined, PlusOutlined} from '@ant-design/icons'
import styles from './ToolBtn.module.scss'
import MoreBox from '../../organisms/MoreBox'
import {Dropdown} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import { ADD_TO_PLAY_LIST } from '../../../redux/actions/musicAction'
import { toast } from 'react-toastify';

type Props = {
  size: string,
  name: string,
  artist: string,
  imgUrl: string,
  duration?: string,
  songUrl?: string
}

const ToolBtn:React.FC<Props> = ({size, name, artist, imgUrl, duration, songUrl}: Props) => {

  const dispatch = useDispatch()
  const playList = useSelector(state => state.musicReducer.playList)

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

  const successNoti = () => toast.success(`Đã thêm ${name} vào danh sách phát`, {
    closeOnClick: true,
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });

  const warningNoti = () => toast.warning(`${name} đã có trong danh sách phát`, {
    closeOnClick: true,
    autoClose: 3000,
    pauseOnHover: true,
    draggable: true,
  });

  const addToPlayList = (name, artist, imgUrl, duration, songUrl) => {
    let add = true
    // kiem tra co trong playlist chua
    playList.forEach(item => {
      if(item.name === name) { // co roi
        add = false
        warningNoti()
      }
    })


    if(add) {
      dispatch({
        type: ADD_TO_PLAY_LIST,
        payload: {
          name,
          artist,
          imgUrl,
          duration,
          songUrl
        }
      })
      successNoti()
    }
  }

  return (
    <div className={styles.toolBtn}>
      <Tooltip placement="top" title={'Thêm vào danh sách phát'}>
        <button 
          className={styles.btn} 
          style={st}
          onClick={() => addToPlayList(name, artist, imgUrl, duration, songUrl)}
        ><PlusOutlined /></button>
      </Tooltip>

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
