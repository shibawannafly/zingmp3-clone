import React from "react";
import Figure from "../../molecules/Figure";
import SongInfo from "../../molecules/SongInfo";
import styles from "./MoreBox.module.scss";
import {
  DownloadOutlined,
  LinkOutlined,
  StopOutlined,
  PlayCircleOutlined,
  ForwardOutlined,
  PlusOutlined,
  WifiOutlined,
  FileAddOutlined,
  CommentOutlined,
  ShareAltOutlined
} from "@ant-design/icons";

type Props = {
  name: string,
  artist: string,
  imgUrl: string,
  st?: any
}

const MoreBox:React.FC<Props> = ({ name, artist, imgUrl, st }: Props) => (
  <section className={styles.moreBox} style={st}>
    <div className={styles.songInfo}>
      <Figure imgUrl={imgUrl} showPlay={false} type="round" w={40} h={40} icon='running'/>
      <SongInfo name={name} artist={artist} st={{ marginLeft: 10 }} />
    </div>

    <div className={styles.btnGroup}>
      <div className={styles.btn}>
        <DownloadOutlined />
        <small>Tải xuống</small>
      </div>
      <div className={styles.btn}>
        <LinkOutlined />
        <small>Sao chép link</small>
      </div>
      <div className={styles.btn}>
        <StopOutlined />
        <small>Chặn</small>
      </div>
    </div>

    <ul className={styles.options}>
      <li>
        <PlayCircleOutlined />
        <span>Thêm vào danh sách phát</span>
      </li>
      <li>
        <ForwardOutlined />
        <span>Phát tiếp theo</span>
      </li>
      <li>
        <PlusOutlined />
        <span>Thêm vào playlist</span>
      </li>
      <li>
        <WifiOutlined />
        <span>Phát radio của bài hát</span>
      </li>
      <li>
        <FileAddOutlined />
        <span>Đóng góp lời bài hát</span>
      </li>
      <li>
        <CommentOutlined />
        <span>Bình luận</span>
      </li>
      <li>
        <ShareAltOutlined />
        <span>Chia sẻ</span>
      </li>
    </ul>
  </section>
);

export default MoreBox;
