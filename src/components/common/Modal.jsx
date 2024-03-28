// Modal.js

import { Button } from "@mui/material";
import "./Modal.css";
const Modal = ({ modalId, onConfirm, onCancel }) => {
  return (
    <div className="modal-overlay paradox-modal" id={modalId}  onClick={onCancel}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="mb-0">Confirm Delete</h5>
          <Button onClick={onCancel} color="error" style={{padding: 0, translate: '20px 0'}}>&#10005;</Button>
        </div>
        <div className="modal-body">
        <p>Are you sure you want to delete this item?</p>
        </div>
        <div className="modal-buttons">
          <Button variant="contained" color="error" size="small" onClick={onConfirm}>Confirm</Button>
          <Button variant="outlined" color="inherit" size="small" onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
