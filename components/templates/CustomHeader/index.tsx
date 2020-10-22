import React from 'react'
import styles from './CustomHeader.module.scss'
import MenuHeader from '../../organisms/Header'
import Nav from '../../organisms/Nav'

const CustomHeader:React.FC = () => (
  <>
    <MenuHeader/>
    <Nav/>
  </>
)

export default CustomHeader