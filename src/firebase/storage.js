import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

function uploadToStorage(file, location, uploadProgress, onUploaded) {
    const user = localStorage.getItem('user');
    if(file.name && user){
      const parsed = JSON.parse(user)
      const imgRef = ref(storage, `portfolio/${parsed.uid}/${location}/${file.name}`)
          
      let uploadingImage = uploadBytesResumable(imgRef, file);
        uploadingImage.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploadProgress(progress);
        }, 
        (error) => {
          console.error(error)
        }, 
        () => {
          getDownloadURL(uploadingImage.snapshot.ref).then((downloadURL) => {
              onUploaded(downloadURL)
          });
        }
      );
    }
  }

  export default uploadToStorage;