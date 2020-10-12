import React from "react";
import { Layout, Menu, Input } from "antd";
import styles from "./Header.module.css";

const { Header } = Layout;
const { Search } = Input;

const menuValues = ["MP3", "NEWS", "TV", "ZALO PC"];

const MenuHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src="/images/logo.png" alt="logo"/>
        {/* <main style = {{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30px'}}> */}
        <menu mode="horizontal" className={styles.menuList}>
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
        {/* </main> */}

        <a className={styles.loginBtn}>Đăng nhập</a>
      </div>
    </header>
  );
};

export default MenuHeader;
