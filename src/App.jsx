import { HashRouter , Route, Routes } from "react-router-dom";
import "./App.css";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Admin from "./Pages/Admin/Admin";
import Login from "./Pages/Admin/Login/Login";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./firebase/firebase";
import { useDispatch } from "react-redux";
import {
  updateAbout,
  updateFaqs,
  updateProjects,
  updateServices,
} from "./store/slices/portfolio";
import PrivateRoute from "./components/common/PrivateRoute";
function App() {
  const uid = import.meta.env.VITE_APP_PRIMARY_UID;
  const dispatch = useDispatch();
  const readAllData = () => {
    const q = query(collection(db, uid));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.id == 'about'){
          dispatch(updateAbout(doc.data()));
        }else if(doc.id == 'services'){
          dispatch(updateServices(doc.data()));
        }else if(doc.id == 'projects'){
          dispatch(updateProjects(doc.data()));
        }else if(doc.id == 'faqs'){
          dispatch(updateFaqs(doc.data()))
        }
      });
    });
  };
  readAllData();
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<Login></Login>}></Route>
          <Route path="portfolio" element={<PrivateRoute />}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
