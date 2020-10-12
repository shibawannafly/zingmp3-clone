import React from 'react'
import styles from './CustomLink.module.css'

const CustomLink = ({ size, color, url, children, st }) => (
  <a className={styles.customLink } href={url} style={{
    fontSize: size,
    color: color,
    ...st
  }}>
    {children}
  </a>
)

export default CustomLink
