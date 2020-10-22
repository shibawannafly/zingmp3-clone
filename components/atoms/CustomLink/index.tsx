import React from 'react'

import styles from './CustomLink.module.scss'

type Props = {
  size?: number;
  color?: string;
  url?: string;
  children?: any;
  st?: object;
};

const CustomLink: React.FC<Props> = ({ size, color, url, children, st }: Props) => (
  <a className={styles.customLink } href={url} style={{
    fontSize: size,
    color: color,
    ...st
  }}>
    {children}
  </a>
)

export default CustomLink
