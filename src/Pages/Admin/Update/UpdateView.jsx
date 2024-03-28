import UpdateAbout from "./UpdateAbout"
import UpdateProject from "./UpdateProject"
import UpdateService from "./UpdateService"
import AdminHeader from "./AdminHeader";
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";
import UpdateFaq from "./UpdateFaq";

function UpdateView() {
  
  return (
    <>  
    
        <AdminHeader />
        <Typography variant="h6" paddingLeft={2}>Welcome back Admin!</Typography>
        <Typography variant="p" paddingLeft={2} color='gray'>Customize your portfolio from here with easy controls.</Typography>
        <Divider style={{margin: '1rem 0'}}/>
        <UpdateAbout></UpdateAbout>
        <Divider style={{margin: '1rem 0'}}/>
        <UpdateService></UpdateService>
        <Divider style={{margin: '1rem 0'}}/>
        <UpdateProject></UpdateProject>
        <Divider style={{margin: '1rem 0'}}/>
        <UpdateFaq></UpdateFaq>
    </>
  )
}

export default UpdateView