import React, {useState} from "react";
import { Layout, Input } from "antd";
import styles from "./Header.module.scss";
import LoginForm from '../LoginForm'
import User from '../../molecules/User'

const { Search } = Input;

const menuValues = ["MP3", "NEWS", "TV", "ZALO PC"];

const MenuHeader:React.FC = () => {

  const [showForm, setShowForm] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const handleCloseForm = () => setShowForm(false)
  const handleLogin = () => setIsLogin(true)
  const handleLogout = () => setIsLogin(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="/images/logo.png" alt="logo"/>
        <menu className={styles.menuList}>
          <Search
            placeholder="Nhập nội dung cần tìm"
            onSearch={(value) => console.log(value)}
            className = {styles.searchbar}
          />
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
