import React from 'react'
import SongItem from '../../organisms/SongItem'
import styles from './Listening.module.scss'
import { connect } from 'react-redux'

const Listening:React.FC = ({data, play}: any) => {

  return (
    <div className={styles.listening}>
      <ul>
        {
          (typeof(data) !== 'undefined') && data.map(item => (
            <li key={item.name} className={data.indexOf(item) === 0 ? styles.active : ''}>
              <SongItem
                name={item.name}
                artist={item.artist}
                imgUrl={item.imgUrl}
                type='round'
                icon={play.name === item.name ? 'running' : 'play'}
                time={item.time}
                stt={item.stt}
                songUrl={item.songUrl}
                music={true}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({
  data: state.dataReducer.pageData.listening,
  play: state.musicReducer.listening
})

export default connect(mapStateToProps)(Listening)