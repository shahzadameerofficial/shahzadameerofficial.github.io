import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

function AdminHeader() {
    const navigate = useNavigate()
  const handleLogout = () => {
    if(confirm('Are you sure to log out from Admin Panel?')){
      localStorage.removeItem('user')
      navigate('/admin')
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Panel
        </Typography>
        <Button color='error' variant='contained' startIcon={<Logout />} onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default AdminHeader