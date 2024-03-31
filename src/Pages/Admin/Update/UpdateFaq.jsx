import DataTable from "../../../components/common/DataTable";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Stack,
  DialogTitle,
  DialogContentText,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useSelector } from "react-redux";
import { createNewDocument } from "../../../firebase/firestore";

function UpdateFaq() {
  let { faqs } = useSelector((state) => state.portfolio);
  const [form, setForm] = useState({
    question: "",
    answer: "",
    isActive: true
  });
  let [open, setOpen] = useState(false);
  let [mode, setMode] = useState("new"); // can be edit or new
  let [index, setIndex] = useState(null); // can be edit or new
  let [updating, setUpdating] = useState(false); // can be edit or new

  const handleAction = (action) => {
    if (action.type == "edit") {
      setForm(faqs.allFaqs[action.index]);
      setMode(action.type);
      setOpen(true);
      setIndex(action.index);
    } else if (action.type == "delete") {
      var newFaqs = {
        allFaqs: [],
      };
      faqs.allFaqs.map((item) => {
        newFaqs.allFaqs.push(item);
      });
      newFaqs.allFaqs.splice(action.index, 1);
      createNewDocument("faqs", newFaqs, handleUpdating);
    } else if (action.type == "visibility") {
      newFaqs = {
        allFaqs: [],
      };
      faqs.allFaqs.map((item) => {
        newFaqs.allFaqs.push(item);
      });

      newFaqs.allFaqs.splice(action.index, 1);
      let newVisibility = !faqs.allFaqs[action.index].isActive;
      newFaqs.allFaqs.splice(action.index, 0, {
        ...faqs.allFaqs[action.index],
        isActive: newVisibility,
      });
      createNewDocument("faqs", newFaqs);
    }
  };
  const handleUpdating = (value) => {
    setUpdating(value);
    setOpen(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode == "edit" && index != null) {
      var newFaqs = {
        allFaqs: [],
      };
      faqs.allFaqs.map((item) => {
        newFaqs.allFaqs.push(item);
      });
      newFaqs.allFaqs[index] = form;
      createNewDocument("faqs", newFaqs, handleUpdating);
    } else {
      let newFaqs = {
        allFaqs: [...faqs.allFaqs, form],
      };
      createNewDocument("faqs", newFaqs, handleUpdating);
    }
  };
  const handleReset = () => {
    setOpen(false);
    setMode("new");
    setForm({
      question: "",
      answer: "",
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const handleDrag = (allFaqs) => {
    const newFaqs = {
      allFaqs,
    };
    createNewDocument("faqs", newFaqs);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
            <div>
              <Typography
                variant="h6"
                fontSize={18}
                lineHeight={1}
                color="primary"
              >
                FAQs
              </Typography>
              <Typography
                variant="subtitle1"
                color="#696969"
                fontSize={14}
                gutterBottom
              >
                Read or Update your portfolio FAQ Section
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
            data={faqs.allFaqs}
            actions={[{ type: "delete", modalId: "abc" }, { type: "edit" }]}
            onAction={handleAction}
            tableTitle="FAQs"
            headings={["question", "answer"]}
            onDrag={handleDrag}
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
              {mode === "new" ? "New FAQ" : "Update FAQ"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText>
                {mode === "new"
                  ? "Enter the required details to add it as a new FAQ in your portfolio."
                  : "Make any changes with your FAQ to update it in your portfolio."}
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                name="question"
                label="Question"
                type="text"
                value={form.question || ""}
                onInput={handleChange}
                fullWidth
                variant="standard"
              />
              <TextField
                required
                margin="dense"
                name="answer"
                label="Answer"
                type="text"
                value={form.answer || ""}
                onInput={handleChange}
                multiline
                fullWidth
                variant="standard"
                rows={3}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleReset}>Cancel</Button>
              <Button
                type="submit"
                variant="contained"
                disabled={
                  (mode === "edit" && form === faqs.allFaqs[index]) ||
                  (mode === "new" && form.question == "") ||
                  (mode === "new" && form.answer == "")
                }
              >
                {mode === "edit" ? "Update FAQ" : "Create"}
                {updating && (
                  <CircularProgress
                    size={15}
                    color="inherit"
                    style={{ marginLeft: "4px" }}
                  />
                )}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default UpdateFaq;
