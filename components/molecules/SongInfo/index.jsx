import React from "react";
import CustomLink from "../../atoms/CustomLink";
import styles from "./SongInfo.module.css";

const SongInfo = ({ name, artist, st }) => (
  <div className={styles.songInfo} style={{...st}}>
    <h3 className={styles.name}>
      <CustomLink color='#000' size={14} >{name}</CustomLink>
    </h3>
    <h4 className={styles.artist}>
      <CustomLink color='#959595' size={12} > {artist} </CustomLink>
    </h4>
  </div>
);

export default SongInfo;
