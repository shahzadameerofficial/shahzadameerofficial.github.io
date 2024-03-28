
import DataTable from "../../../components/common/DataTable";
import { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Stack, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { createNewDocument } from "../../../firebase/firestore";
import { useSelector } from "react-redux";

function UpdateService() {
  let {services} = useSelector((state)=> state.portfolio)
  const [form, setForm] = useState({name: '', description: '', icon:''})
  let [open, setOpen] = useState(false);
  let [mode, setMode] = useState('new') // can be edit or new
  const [index, setIndex] = useState(null);
  let [updating, setUpdating] = useState(false);

  const handleAction = (action) => {
    if (action.type == 'edit') {
        setForm(services.allServices[action.index])
        setMode(action.type)
        setOpen(true)
        setIndex(action.index)
    }else if(action.type == 'delete'){
      var newServices = {
        allServices: []
      };
      services.allServices.map(item=>{
        newServices.allServices.push(item)
      })
      newServices.allServices.splice(action.index, 1)
      createNewDocument('services', newServices)
    }
  };
  
  const handleUpdating = (value) => {
    setUpdating(value)
    setOpen(value)
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode == 'edit' && index != null) {
      var newServices = {
        allServices: []
      };
      services.allServices.map(item=>{
        newServices.allServices.push(item)
      })
      newServices.allServices[index] = form
      createNewDocument('services', newServices, handleUpdating)
    }else{
      let NewServices = {
        allServices: [...services.allServices,form]
      };
      console.log(NewServices);
      createNewDocument('services', NewServices, handleUpdating)
    }
    setOpen(false)
  }
  const handleReset = () => {
    setOpen(false);
    setMode('new');
    setForm({name:'', description: ''})
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
            <Stack direction='row' justifyContent='space-between' flexWrap='wrap'>
          <div>
          <Typography variant="h6" fontSize={18} lineHeight={1} color='primary'>Services</Typography>
          <Typography variant="subtitle1" color='#696969' fontSize={14} gutterBottom>
            Read or Update your portfolio Services Section
          </Typography>
          </div>

            <Button color="success" variant='text' onClick={()=>setOpen(true) + setMode('new')}><AddCircleIcon></AddCircleIcon> Add New</Button>
            </Stack>
        </div>
        <div className="col-12">
          <DataTable
            data={services.allServices}
            actions={[{ type: "delete", modalId: "abc" }, { type: "edit" }]}
            onAction={handleAction}
            tableTitle="All Services"
            headings={["name", "description"]}
          ></DataTable>
        </div>
        <div className="col-12">
        <Dialog
        open={open}
        onClose={()=> setOpen(false)}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>{mode=== 'new' ? 'New Service' : 'Update Service'}</DialogTitle>
        <DialogContent>
          <DialogContentText>{mode === 'new' ? 'Enter the required details to add it as a new service in your portfolio.' : 'Make any changes with your service to update it in your portfolio.'}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            name="icon"
            label="Service Icon"
            type="text"
            onInput={handleChange}
            value={form.icon || ''}
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Service Name"
            onInput={handleChange}
            type="text"
            value={form.name || ''}
            fullWidth
            variant="standard"
          />
          <TextField
          required
          margin="dense"
          name="description"
          label="Description"
          type="text"
          value={form.description || ''}
          onInput={handleChange}
          multiline
          fullWidth
          variant="standard"
          rows={3}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>Cancel</Button>
          <Button type="submit" variant="contained" disabled={mode == 'edit' && form === services.allServices[index] || mode === 'new' && form.name == ''}>
            {mode === 'edit' ? 'Update Service' : 'Create'}
            {updating && <CircularProgress size={15} color="inherit" style={{marginLeft: '4px'}}/>}
          </Button>
        </DialogActions>
      </Dialog>
        </div>
      </div>
    </div>
  );
}

export default UpdateService;
