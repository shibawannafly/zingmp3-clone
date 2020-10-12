import React from 'react'
import { Input } from 'antd'
import './SearchBar.module.css'

const { Search } = Input

export const SearchBar = () => {

  return (
    <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
  )
}