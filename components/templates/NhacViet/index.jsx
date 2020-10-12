import React from 'react'
import NVItem from '../../organisms/NVItem'
import styles from './NhacViet.module.css'
import CustomLink from '../../atoms/CustomLink'
import { nvHotData } from './nvData'

const NhacViet = () => {
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

      <article className={styles.new}>
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

export default NhacViet
