import React, {useState} from "react";
import styles from "./PlayList.module.scss";
import { useSelector } from "react-redux";
import SongDetail from "../../molecules/SongDetail";
import { DeleteFilled } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { REMOVE_FROM_PLAY_LIST } from "../../../redux/actions/musicAction";
import { toast } from "react-toastify";
import {
  OrderedListOutlined
} from '@ant-design/icons'

const PlayList: React.FC = () => {
  const playList = useSelector((state) => state.musicReducer.playList);
  const dispatch = useDispatch();
  const [openPL, setOpenPL] = useState(false)
  const playListQuantities = useSelector(state => state.musicReducer.playList.length)

  const deleteNoti = (name) =>
    toast.error(`Đã xóa ${name} khỏi danh sách phát`, {
      closeOnClick: true,
      autoClose: 3000,
      pauseOnHover: true,
      draggable: true,
    });

  const handleRemove = (name) => {
    dispatch({
      type: REMOVE_FROM_PLAY_LIST,
      payload: name,
    });
    deleteNoti(name);
  };

  const emptyIcons = ["\\(o_o)/", "(·_·)", "(>_<)", "(;-;)", "(UwU)", "(OwO)"];

  return (
    <div className={styles.playListContainer}>
      <div className={styles.playListBtn} onClick={() => setOpenPL(!openPL)}>
        <div>
          <OrderedListOutlined />
        </div>
        <div style={{ userSelect: "none" }}>
          Danh sách phát{`(${playListQuantities})`}
        </div>
      </div>
      {openPL && (
        <div className={styles.playList}>
          <div className={styles.title}>
            <h4>Danh sách phát{`(${playList.length})`}</h4>
          </div>
          {playList.length !== 0 ? (
            <ul className={styles.list}>
              {playList.map((item) => (
                <li key={item.name}>
                  <SongDetail {...item} type="round" icon="play" music={true} />
                  <Tooltip placement="right" title="Xóa khỏi danh sách phát">
                    <div
                      className={styles.removeBtn}
                      onClick={() => handleRemove(item.name)}
                    >
                      <DeleteFilled style={{ color: "#444" }} />
                    </div>
                  </Tooltip>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.emptyPlayList}>
              <p className={styles.emptyText}>Danh sách phát trống</p>
              <p className={styles.emptyIcon}>
                {emptyIcons[Math.floor(Math.random() * emptyIcons.length)]}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PlayList;
