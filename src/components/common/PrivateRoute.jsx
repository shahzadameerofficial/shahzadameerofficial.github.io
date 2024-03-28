import { Navigate } from "react-router-dom";
import UpdateView from '../../Pages/Admin/Update/UpdateView'
function PrivateRoute() {
  const user = localStorage.getItem('user')
  const parsed = JSON.parse(user)

  if (parsed && parsed.uid) {
    return <UpdateView />;
  } else {
    return <Navigate to="/admin" />;
  }
}

export default PrivateRoute