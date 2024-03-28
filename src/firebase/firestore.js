import { doc, setDoc  } from "firebase/firestore";
import { db } from "./firebase";

const createNewDocument = async(name,data, isLoading) => {
    const user = localStorage.getItem('user');
    if (user) {
        if(isLoading){
            isLoading(true)
        }
        const parsed = JSON.parse(user);
        const uid = parsed.uid
        await setDoc(doc(db,uid,name),data).then(()=>{
            if (isLoading) {
                isLoading(false)
            }
        })
    }
}


export { createNewDocument }