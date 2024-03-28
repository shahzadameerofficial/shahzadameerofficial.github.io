import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'

const login = (user, isLoading, onError, onLoggedIn) => {
    isLoading(true)
    signInWithEmailAndPassword(auth, user.email, user.password)
  .then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem('user', JSON.stringify(user))
    isLoading(false)
    onLoggedIn(userCredential.user)
  })
  .catch((error) => {
    console.log(error);
    onError(error)
    isLoading(false)
  });
}
export {login}