import React from "react";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
import WaveIcon from "../../atoms/WaveIcon";
import styles from "./Figure.module.scss";
import { useDispatch } from "react-redux";
import { playMusic } from "../../../redux/actions/musicAction";
import Link from "next/link";
import LazyLoad from 'react-lazyload'

export const slug = (str) => {
  if (!str) return;
  // Chuyển hết sang chữ thường
  str = str.toLowerCase();

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
  str = str.replace(/(đ)/g, "d");

  // Xóa ký tự đặc biệt 
  str = str.replace(/([^0-9a-z-\s])/g, "");

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, "-");

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, "");

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, "");

  // return
  return str;
};

type Props = {
  name?: string;
  artist?: string;
  imgUrl?: string;
  songUrl?: string;
  w?: number;
  h?: number;
  showPlay?: boolean;
  iconSize?: number;
  text?: string;
  type?: string;
  icon?: string;
  music?: boolean;
  duration?:string
};

const Figure: React.FC<Props> = ({
  name,
  artist,
  imgUrl,
  songUrl,
  w,
  h,
  showPlay,
  iconSize,
  text,
  type,
  icon,
  music,
  duration
}: Props) => {
  const dispatch = useDispatch();

  const radius = type === "round" ? "4px" : type === "circle" ? "50%" : "0";
  const isRotate = icon === "pause";

  const handleClick = () => {
    music && dispatch(playMusic(name, artist, imgUrl, songUrl, duration));
  };

  const chooseIcon = (icon) => {
    if (showPlay) {
      if (icon === "pause")
        return (
          <div className={styles.icon}>
            <PauseCircleOutlined
              style={{ color: "#fff", fontSize: iconSize }}
            />
          </div>
        );

      if (icon === "running")
        return (
          <div className={styles.iconRunning}>
            <WaveIcon />
          </div>
        );
      else {
        return (
          <div className={styles.icon} onClick={handleClick}>
            <PlayCircleOutlined style={{ color: "#fff", fontSize: iconSize }} />
          </div>
        );
      }
    }
  };

  return (
    <div
      className={styles.figure}
      style={{ width: w, height: h, borderRadius: radius }}
    >
      {music ? 
      (
        <>
          <div
              style={{ borderRadius: radius }}
              className={`${styles.thumb} ${
                isRotate
                  ? styles.rotating
                  : icon === "play"
                  ? styles.turnBack
                  : ""
              }`}
            >
              <LazyLoad>
                <img
                  src={imgUrl}
                  alt="image"
                  style={{ width: w, height: h }}
                  className={icon === "running" ? styles.imgRunning : ""}
                />
              </LazyLoad>
            </div>

            {chooseIcon(icon)}

            {text !== "" && <div className={styles.icon}>{text}</div>}
        </>
      )
      : <Link href={name ? `/songs/${slug(name)}` : "/"}>
        <a>
          <div
            style={{ borderRadius: radius }}
            className={`${styles.thumb} ${
              isRotate
                ? styles.rotating
                : icon === "play"
                ? styles.turnBack
                : ""
            }`}
          >
            <LazyLoad>
              <img
                src={imgUrl}
                alt="image"
                style={{ width: w, height: h }}
                className={icon === "running" ? styles.imgRunning : ""}
              />
            </LazyLoad>
          </div>

          {chooseIcon(icon)}

          {text !== "" && <div className={styles.icon}>{text}</div>}
        </a>
      </Link>}
    </div>
  );
};

export default Figure;
