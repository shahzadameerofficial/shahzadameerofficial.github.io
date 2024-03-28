import { useEffect, useState } from "react";
import styles from "./Image.module.css";
import { CircularProgress } from "@mui/material";

function Image({ src, style }) {
  const [url, setUrl] = useState(src);
  const [loading, setLoading] = useState(true)
  const setPlaceHolder = () => {
    const placeholder =
      "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg";
    setUrl(placeholder);
  };
  const imageLoaded = () => {
    setLoading(false)
  }
  useEffect(()=>{
    if(src){
        setUrl(src)
    }
  },[src])
  return (
    <div className={styles.Image}>
      <img
        src={url}
        style={style}
        onError={setPlaceHolder}
        width="100%"
        onLoad={imageLoaded}
        loading="lazy"
        className={loading ? styles.loading : styles.loaded}
      />
      {
        loading ? (<CircularProgress className={styles.Loader} />) : ''
      }
    </div>
  );
}

export default Image;
