import { useEffect, useState } from "react";
import styles from "./IMG.module.css";
import { CircularProgress } from "@mui/material";
import uploadToStorage from "../../firebase/storage";
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Uploader({ src, style, width, onUploaded, renderPdf, label, accept, id }) {
  const placeholder =
      "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg";
  const [url, setUrl] = useState(src? src : placeholder );
  const [uploading, setUploading] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null)
  const [isDocument, setIsDocument] = useState(false)

  const onUploadComplete = (downloadUrl) => {
    setUrl(null);
    setUploadedUrl(downloadUrl);
    setUploading(null)
    if (onUploaded) {
      onUploaded(downloadUrl)
    }
  }
  const observeChange = (e) => {
    if(e.target.files[0] && confirm('Upload will be start! Are you sure to update it?')){
      if(e.target.files[0].type == 'application/pdf'){
        setIsDocument(true)
      }
      setUploadedUrl(null)
      setUrl(placeholder)
      uploadToStorage(e.target.files[0], isDocument ? 'documents' : 'pictures', setUploading, onUploadComplete)  
    }
  }
  useEffect(()=>{
    if(src){
      setUrl(src)
    }
    if(renderPdf){
      setIsDocument(true)
    }
  },[src, renderPdf])
  return (
    <label className={styles.IMG} htmlFor={id || ''}>
      
      {
        !isDocument &&
        <img
        src={url || uploadedUrl}
        style={style}
        width={width || "200px"}
      />}
      {
        isDocument &&
        <object
        data={url + '#toolbar=0 &scrollbar=0' || uploadedUrl}
        style={style}
        width={width || "200px"}
      />}
      {
       uploading ? (<CircularProgress variant='determinate' value={uploading} className={styles.Loader} />) : ''
      }
      <input type="file" id={id || ''} accept={accept || 'image/*,application/pdf'} style={{display:'none'}} onChange={observeChange}/>
      {<h6 style={{fontWeight:'600',margin:'8px 0 0 0', fontSize:'0.9em'}}>{renderPdf ? <PictureAsPdfIcon/> : <PhotoCameraBackIcon/>} {label}</h6> || ''}
    </label>
  );
}

export default Uploader;
