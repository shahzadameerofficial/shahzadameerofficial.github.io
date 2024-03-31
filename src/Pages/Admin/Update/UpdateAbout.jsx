import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { createNewDocument } from "../../../firebase/firestore";
import { useSelector } from "react-redux";
import Uploader from "../../../components/common/Uploader";
import PInput from "../../../components/common/PInput";
import { CircularProgress } from "@mui/material";
function UpdateAbout() {
  const currentVariant = "outlined"; // can be 'outlined', 'filled', 'standard';
  const { about } = useSelector((state) => state.portfolio);
  const [form, setForm] = useState({
    googleSheetUrl: "",
    tagline: "",
    description: "",
    workOneIcon: "",
    workOneTitle: "",
    workOneDescription: "",
    workTwoIcon: "",
    workTwoTitle: "",
    workTwoDescription: "",
    resume: "",
    profilePicture: "",
    fullName: "",
    email: "",
    headline: "",
    headlineSmall: "",
    dateOfBirth: "",
    designation: "",
    status: "",
    contactNo: "",
    address: "",
    city: "",
    country: "",
    qualification: "",
    languages: [],
    hobbies: [],
    titles: [],
    skills: [],
    fiverr: "",
    upwork: "",
    linkedIn: "",
    skype: "",
    zoom: "",
    facebook: "",
    youtube: "",
    github: "",
    instagram: "",
    peoplePerHour: "",
    guru: "",
    truelancer: "",
    freelancer: "",
  });
  const [updating, setUpdating] = useState(false);
  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: !files ? value : files[0],
    }));
  };
  const onDocumentUpload = (url) => {
    setForm((prevData) => ({
      ...prevData,
      resume: url,
    }));
  };
  const onImageUpload = (url) => {
    setForm((prevData) => ({
      ...prevData,
      profilePicture: url,
    }));
  };
  const handleUpdate = () => {
    if (confirm("Are you sure to update About Details?")) {
      createNewDocument("about", form, setUpdating).catch((err) => {
        console.log(err);
      });
    }
  };
  useEffect(() => {
    if (about.tagline) {
      setForm(about);
    }
  }, [about]);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mb-3">
          <Typography variant="h6" fontSize={18} lineHeight={1} color="primary">
            About
          </Typography>
          <Typography
            variant="subtitle1"
            color="#696969"
            fontSize={14}
            gutterBottom
          >
            Read or Update your portfolio About Section
          </Typography>
        </div>
        <div className="col-12 mb-3">
          <TextField
            label="Contact URL(Google Sheets)"
            name="googleSheetUrl"
            value={form.googleSheetUrl}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
          />
        </div>
        <div className="col-12">
          <div className="row mb-3">
            <div className="col-12">
              <h6 style={{ fontWeight: "600", color: "#696969" }}>
                Personal Details
              </h6>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-7 order-2 order-sm-1">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Full Name"
                    name="fullName"
                    value={form.fullName}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    title="Date Of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={form.dateOfBirth}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Designation"
                    name="designation"
                    value={form.designation}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Qualification"
                    name="qualification"
                    value={form.qualification}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Contact No."
                    name="contactNo"
                    value={form.contactNo}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="City"
                    name="city"
                    value={form.city}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Country"
                    name="country"
                    value={form.country}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Contact No."
                    name="contactNo"
                    value={form.contactNo}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Address"
                    name="address"
                    value={form.address}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-12">
                  <PInput
                    label="Skills"
                    type="multiple"
                    name="skills"
                    multiples={form.skills}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <PInput
                    label="Titles"
                    type="multiple"
                    name="titles"
                    multiples={form.titles}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12">
                  <PInput
                    label="Hobbies"
                    type="multiple"
                    name="hobbies"
                    multiples={form.hobbies}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5 order-1 order-sm-2 mb-2">
              <Uploader
                style={{ aspectRatio: "1/1", objectFit: "contain" }}
                width="100%"
                label="Profile Picture"
                accept="image/*"
                id="forpp"
                src={form.profilePicture}
                onUploaded={onImageUpload}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-12">
              <h6 style={{ fontWeight: "600", color: "#696969" }}>
                Professional Details
              </h6>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-5 mb-2">
              <Uploader
                renderPdf
                style={{
                  aspectRatio: "1/1",
                  objectFit: "contain",
                  overflow: "hidden",
                }}
                width="100%"
                label="Current CV"
                id="forcv"
                src={form.resume}
                accept="application/pdf"
                onUploaded={onDocumentUpload}
              />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-7">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Fiverr Profile Link"
                    name="fiverr"
                    value={form.fiverr}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Upwork Profile Link"
                    name="upwork"
                    value={form.upwork}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Github Profile Link"
                    name="github"
                    value={form.github}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Skype Link"
                    name="skype"
                    value={form.skype}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Zoom Link"
                    name="Zoom"
                    value={form.zoom}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Facebook Link"
                    name="facebook"
                    value={form.facebook}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Youtube Channel"
                    name="youtube"
                    value={form.youtube}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="LinkedIn Profile Link"
                    name="linkedIn"
                    value={form.linkedIn}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Instagram Profile Link"
                    name="instagram"
                    value={form.instagram}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="PeoplePerHour Profile Link"
                    name="peoplePerHour"
                    value={form.peoplePerHour}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Guru Profile Link"
                    name="guru"
                    value={form.guru}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <TextField
                    label="Truelancer Profile Link"
                    name="truelancer"
                    value={form.truelancer}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    label="Freelancer Profile Link"
                    name="freelancer"
                    value={form.freelancer}
                    onInput={handleChange}
                    variant={currentVariant}
                    fullWidth
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <h6 style={{ fontWeight: "600", color: "#696969" }}>Other Details</h6>
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            label="Headline"
            name="headline"
            value={form.headline}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            label="Headline Response"
            name="headlineSmall"
            value={form.headlineSmall}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
          />
        </div>
        <div className="col-12 mb-3">
          <TextField
            label="Tagline"
            name="tagline"
            value={form.tagline}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
          />
        </div>
        <div className="col-12 mb-3">
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
            multiline
            rows={4}
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            label="Work 1 Icon"
            name="workOneIcon"
            value={form.workOneIcon}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            label="Work 1 Title"
            name="workOneTitle"
            value={form.workOneTitle}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
          />
        </div>
        <div className="col-12 mb-3">
          <TextField
            label="Work 1 Description"
            name="workOneDescription"
            value={form.workOneDescription}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
            multiline
            rows={4}
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            label="Work 2 Icon"
            name="workTwoIcon"
            value={form.workTwoIcon}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
          />
        </div>
        <div className="col-md-6 mb-3">
          <TextField
            label="Work 2 Title"
            name="workTwoTitle"
            value={form.workTwoTitle}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
          />
        </div>
        <div className="col-12">
          <TextField
            label="Work 2 Description"
            name="workTwoDescription"
            value={form.workTwoDescription}
            onInput={handleChange}
            variant={currentVariant}
            fullWidth
            multiline
            rows={4}
          />
        </div>
        <div className="col-12 mt-2">
          <Button
            variant="contained"
            onClick={handleUpdate}
            disabled={about === form}
          >
            Update{" "}
            {updating && (
              <CircularProgress
                color="inherit"
                size={15}
                style={{ marginLeft: "4px" }}
              />
            )}
          </Button>
          <Button
            variant="outlined"
            style={{ marginLeft: ".5rem" }}
            disabled={about === form}
            onClick={() => setForm(about)}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UpdateAbout;
