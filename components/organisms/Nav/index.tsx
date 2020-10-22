import React, { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import { HomeFilled, PoweroffOutlined, CloudUploadOutlined } from "@ant-design/icons";
import {connect} from 'react-redux'

const Nav:React.FC = ({navData}: any) => {
  const [hover, setHover] = useState(-1);

  const renderNavList = (navData) => (
    <ul className={styles.menulink}>
          <li className={styles.menuitem}>
            <Link href="/">
              <a>
                <HomeFilled />
              </a>
            </Link>
          </li>
          <li className={styles.menuitem}>
            <a href="/">Nhạc cá nhân</a>
          </li>
          <div className={styles.divider}></div>
          {navData.map((menuItem) => (
            <li
              onMouseOver={() => setHover(navData.indexOf(menuItem))}
              onMouseLeave={() => setHover(-1)}
              key={menuItem.id}
              className={styles.menuitem}
            >
              <a href="">{menuItem.name}</a>

              {hover === navData.indexOf(menuItem) && (menuItem.type === 4) && (
                <div className={styles.menuContainer}>
                  {menuItem.values.map((item) => 
                    (
                      <div key={item.col} className={styles.subcol}>
                        <div className={styles.title}>
                          <a href="">{item.col}</a>
                        </div>
                        <ul className={styles.itemList}>
                          {item.items.map((itemList) => (
                            <li key={itemList}>
                              <a href="">{itemList}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}

              {hover === navData.indexOf(menuItem) && (menuItem.type === 1) && (
                <div className={styles.menuContainerCol}>
                  {menuItem.values.map((item) => 
                    (
                      <li key={item}>
                        <a href="">{item}</a>
                      </li>
                    )
                  )}
                </div>
              )}

            </li>
          ))}
        </ul>
  )

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {navData && renderNavList(navData)}
        <div>
          <a href="/" className={styles.adveadvertiser}><PoweroffOutlined /> Tắt quảng cáo</a>
          <a href="/" className={styles.upload}><CloudUploadOutlined /></a>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    navData: state.dataReducer.pageData.navData
  }
}

export default connect(mapStateToProps)(Nav);
