import DataTable from "../../../components/common/DataTable";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { FormControl, InputLabel, Chip, Select, MenuItem, OutlinedInput, Box, Stack, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog, TextField, Button, Typography, CircularProgress } from "@mui/material";
import Uploader from "../../../components/common/Uploader";
import { useSelector } from "react-redux";
import { createNewDocument } from "../../../firebase/firestore";

function UpdateProject() {
  let {projects} = useSelector((state)=> state.portfolio)
  const [form, setForm] = useState({
    title: "",
    tagline: "",
    primaryTechnology: "",
    technologies: [],
    description: "",
    cover: undefined,
    github: "",
    liveLink: "",
  });
  let [open, setOpen] = useState(false);
  let [mode, setMode] = useState("new"); // can be edit or new
  let [index, setIndex] = useState(null); // can be edit or new
  let [updating, setUpdating] = useState(false);
  const allTechnologies = [
    "Angular",
    "VueJS",
    "ReactJS",
    "SCSS",
    "CSS",
    "TailwindCSS",
    "Bootstrap",
    "HTML",
    "Javascript",
    "Typescript",
    "MaterialUI",
    "ChakraUI",
    "MUI",
    "PrimeNG",
    "Vuetify",
    "UiLibraries",
    "AdminLTE",
    "JavascriptLibraries",
    "Other",
  ];

  const handleAction = (action) => {
    if (action.type == 'edit') {
      setForm(projects.allProjects[action.index])
      setMode(action.type)
      setOpen(true)
      setIndex(action.index)
  }else if(action.type == 'delete'){
    var newProjects = {
      allProjects: []
    };
    projects.allProjects.map(item=>{
      newProjects.allProjects.push(item)
    })
    newProjects.allProjects.splice(action.index, 1)
    createNewDocument('projects', newProjects)
  }
  };
  const handleUpdating = (value) => {
    setUpdating(value)
    setOpen(value)
  }
  const onImageUpload = (url) => {
    setForm((prevData)=> ({
      ...prevData,
      cover: url
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode == 'edit' && index != null) {
      var newProjects = {
        allProjects: []
      };
      projects.allProjects.map(item=>{
        newProjects.allProjects.push(item)
      })
      newProjects.allProjects[index] = form
      createNewDocument('projects', newProjects, handleUpdating)
    }else{
      let newProjects = {
        allProjects: [...projects.allProjects,form]
      };
      createNewDocument('projects', newProjects, handleUpdating)
    }
  };
  const handleReset = () => {
    setOpen(false);
    setMode("new");
    setForm({
      title: "",
      tagline: "",
      primaryTechnology: "",
      technologies: [],
      description: "",
      cover: "",
      github: "",
      liveLink: "",
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Stack direction="row" justifyContent="space-between" flexWrap='wrap'>
            <div>
            <Typography variant="h6" fontSize={18} lineHeight={1} color='primary'>Projects</Typography>
          <Typography variant="subtitle1" color='#696969' fontSize={14} gutterBottom>
            Read or Update your portfolio Projects Section
          </Typography>
            </div>

            <Button
              color="success"
              variant="text"
              onClick={() => setOpen(true) + setMode("new")}
            >
              <AddCircleIcon></AddCircleIcon> Add New
            </Button>
          </Stack>
        </div>
        <div className="col-12">
          <DataTable
            data={projects.allProjects}
            actions={[{ type: "delete", modalId: "abc" }, { type: "edit" }]}
            onAction={handleAction}
            tableTitle="Projects"
            headings={["title", "description", 'primaryTechnology']}
          ></DataTable>
        </div>
        <div className="col-12">
          <Dialog
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{
              component: "form",
              onSubmit: handleSubmit,
            }}
          >
            <DialogTitle>
              {mode === "new" ? "New Project" : "Update Project"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {mode === "new"
                  ? "Enter the required details to add it as a new project in your portfolio."
                  : "Make any changes with your project to update it in your portfolio."}
              </DialogContentText>
              <Uploader alt="" id='project-cover' label="Cover Image" src={form.cover} style={{aspectRatio: '1/1', objectFit:'cover'}} onUploaded={onImageUpload}/>
              <TextField
                autoFocus
                required
                margin="dense"
                name="title"
                label="Project Title"
                type="text"
                value={form.title || ""}
                onInput={handleChange}
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                name="tagline"
                label="Tagline"
                type="text"
                value={form.tagline || ""}
                onInput={handleChange}
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                name="liveLink"
                label="Live Link"
                type="text"
                value={form.liveLink || ""}
                onInput={handleChange}
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                name="github"
                label="Github Link"
                type="text"
                value={form.github || ""}
                onInput={handleChange}
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                name="description"
                label="Description"
                type="text"
                value={form.description || ""}
                onInput={handleChange}
                multiline
                fullWidth
                variant="standard"
                rows={3}
              />
              <FormControl fullWidth margin="dense">
                <InputLabel id="demo-simple-select-label">
                  Technologies
                </InputLabel>
                <Select
                  multiple
                  value={form.technologies}
                  name="technologies"
                  onChange={handleChange}
                  input={
                    <OutlinedInput id="select-multiple-chip" label="Chip" />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                >
                  {allTechnologies.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth margin="dense" variant="standard">
                <InputLabel id="demo-simple-select-label">
                  Primary Technology
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  name="primaryTechnology"
                  value={form.primaryTechnology}
                  label="Primary Technology"
                  onChange={handleChange}
                >
                  {allTechnologies.map((tech, index) => (
                    <MenuItem value={tech} key={index}>
                      {tech}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleReset}>Cancel</Button>
              <Button type="submit" variant="contained" disabled={mode == 'edit' && form == projects.allProjects[index] || mode == 'new' && form.title == ''}>
                {mode === "edit" ? "Update Project" : "Create"}
                {updating && <CircularProgress size={15} color="inherit" style={{marginLeft: '4px'}}/>}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default UpdateProject;
