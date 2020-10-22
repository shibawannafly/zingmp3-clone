import React from 'react'
import NVItem from '../../organisms/NVItem'
import styles from './NhacViet.module.scss'
import CustomLink from '../../atoms/CustomLink'
// import { nvHotData } from './nvData'
import { connect } from 'react-redux'

const NhacViet:React.FC = ({nvHotData}: any) => {
  const { title, list } = nvHotData

  return (
    <section className={styles.nhacViet}>
      <article className={styles.hot}>
        <CustomLink color='#800080' st={{ fontFamily: 'Open Sans', fontWeight: 300 }} size={26}>{ title }</CustomLink>
        <ul className={styles.nvList}>
          {
            list.map(item => (
              <li key={item.name}>
                <NVItem
                  imgUrl={item.imgUrl}
                  name={item.name}
                  artist={item.artist}
                  key={item.name}
                />
              </li>
            ))
          }
        </ul>
      </article>

      <article className={styles.hot}>
        <CustomLink color='#800080' st={{ fontFamily: 'Open Sans', fontWeight: 300 }} size={26}>{ title }</CustomLink>
        <ul className={styles.nvList}>
          {
            list.map(item => (
              <li key={item.name}>
                <NVItem
                  imgUrl={item.imgUrl}
                  name={item.name}
                  artist={item.artist}
                  key={item.name}
                  showOption={true}
                />
              </li>
            ))
          }
        </ul>
      </article>
    </section>
  )
}

const mapStateToProps = state => ({
  nvHotData: state.dataReducer.pageData.nvHotData
})

export default connect(mapStateToProps)(NhacViet)
