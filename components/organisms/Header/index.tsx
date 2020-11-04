import React, {useState, useRef, useEffect} from "react";
import { Input } from "antd";
import styles from "./Header.module.scss";
import LoginForm from '../LoginForm'
import User from '../../molecules/User'
import Link from 'next/link'
import {slug} from '../../molecules/Figure'
import Figure from '../../molecules/Figure'

const { Search } = Input;

const menuValues = ["MP3", "NEWS", "TV", "ZALO PC"];

type Props = {
  searchList?: any
}

const MenuHeader:React.FC<Props> = ({searchList}: Props) => {

  const [showForm, setShowForm] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [keyWord, setKeyWord] = useState('')
  const [resultList, setResultList] = useState([])
  const typingRef = useRef(null)

  const handleCloseForm = () => setShowForm(false)
  const handleLogin = () => setIsLogin(true)
  const handleLogout = () => setIsLogin(false)

  const formatText = str => {
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    return str
  }

  const handleSearch = e => {
    setKeyWord(e.target.value)
  }

  useEffect(() => {
    if(typingRef.current){
      clearTimeout(typingRef.current)
    } 
    typingRef.current = setTimeout(() => {
      if(keyWord === '') {
        setResultList([])
      } else {
        let filteredList = searchList.filter(item => {
          return formatText(item.name).indexOf(formatText(keyWord)) !== -1
        })
        setResultList(filteredList)
      }
    }, 400)
  }, [keyWord])

  type SearchProps = {
    list: any
  }

  const SearchBox:React.FC<SearchProps> = ({list}: SearchProps) => (
    <ul className={styles.searchBox}>
      {
        list.map(item => (
          <li key={item.name}>
            <Link href={`/songs/${slug(item.name)}`}>
              <a style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Figure
                  imgUrl={item.imgUrl}
                  showPlay={false}
                  w={40} h={40}
                  type='round'
                />
                <div style={{marginLeft: 10}}>{item.name}</div>
              </a>
            </Link>
          </li>
        ))
      }
    </ul>
  )
  

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href='/'>
          <a>
            <img src="/images/logo.png" alt="logo"/>
          </a>
        </Link>
        <menu className={styles.menuList}>
          <Search
            placeholder="Nhập nội dung cần tìm"
            onChange={handleSearch}
            className = {styles.searchbar}
          />
          {
            (keyWord !== '') ? 
            <SearchBox list={resultList} /> : null
          }
          {menuValues.map((item) => (
            <li key={item} className={styles.menuItem}>
              {item}
            </li>
          ))}
        </menu>
         
        <div className={styles.userContainer}>
        {
          isLogin ? 
          <User logoutUser = {handleLogout} />
          : 
          <a className={styles.loginBtn}
            onClick = {() => setShowForm(true)}
          >Đăng nhập</a>

        }
        </div>
        
        {
          showForm && <LoginForm 
            closeForm={handleCloseForm} 
            handleLogin={handleLogin}
          />
        }
      </div>
    </header>
  );
};

export default MenuHeader;
