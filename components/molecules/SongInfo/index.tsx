import React from "react";
import CustomLink from "../../atoms/CustomLink";
import styles from "./SongInfo.module.scss";

type Props = {
  name?: string,
  artist?: string,
  st?: any
}

const SongInfo:React.FC<Props> = ({ name, artist, st }: Props) => (
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
