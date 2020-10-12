import React from "react";
import styles from "./Footer.module.css";
import SocialIcon from '../../atoms/SocialIcon'

const about = [
  "Giới thiệu",
  "Điều khoản",
  "Quảng cáo",
  "FAQs",
  "Copyright",
  "Zing MP3 VIP",
  "Ứng dụng",
  "Góp ý",
  "APIs",
  "Liên hệ",
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContainer}>
      <div className={styles.licenseContainer}>
        <div className={styles.licenseInfo}>
          <img
            src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/icon_zing_mp3_60.png"
            alt="footer-logo"
          />
          <div className={styles.license}>
            <p>© 2015 VNG Corporation</p>
            <p>Giấy phép MXH số 314/GP-BTTTT.</p>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <ul>
          {about.map((item) => (
            <li key={item}>
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.social}>
        <SocialIcon/>
        <SocialIcon/>
        <SocialIcon/>
        <SocialIcon/>
      </div>
    </div>
  </footer>
);

export default Footer;
