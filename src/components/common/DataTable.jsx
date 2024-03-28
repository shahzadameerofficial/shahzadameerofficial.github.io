// ParadoxTable.js

import { useState } from "react";
import Modal from "./Modal"; // Import your Modal component
import './DataTable.css'
import { Button } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import TableHeader from "./TableHeader";

const DataTable = ({
  data,
  tableTitle,
  headings,
  actions,
  onAction,
  checkbox,
}) => {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const handleActionClick = (index, rowId, type) => {
    if (type === "delete") {
      // If the action is 'delete', show the modal
      setShowModal(true);
      setSelectedAction({
        type,
        modalId: actions.find((action) => action.type === "delete").modalId,
      });
      setSelectedRowIndex(index);
    } else {
      // If the action is 'edit' or 'print', emit the onAction event
      emitActionEvent(index, rowId, type);
    }
  };

  const emitActionEvent = (index, rowId, type) => {
    if (typeof onAction === "function") {
      onAction({ index, rowId, type });
    }
  };

  const handleModalConfirm = () => {
    // If the modal is confirmed, emit the onAction event for 'delete'
    emitActionEvent(selectedRowIndex, data[selectedRowIndex].id, "delete");
    // Close the modal
    setShowModal(false);
  };

  const handleModalCancel = () => {
    // If the modal is canceled, close the modal without emitting the event
    setShowModal(false);
  };

  const handleCheckboxChange = (index) => {
    // Toggle the selected state of the row
    const newSelectedRows = [...selectedRows];
    newSelectedRows[index] = !newSelectedRows[index];
    setSelectedRows(newSelectedRows);
  };

  const handleSelectAllChange = () => {
    // Toggle the selected state for all rows
    const newSelectedRows = selectedRows.every((isSelected) => !isSelected)
      ? new Array(data.length).fill(true)
      : new Array(data.length).fill(false);
    setSelectedRows(newSelectedRows);
  };

  const handleBulkAction = (type) => {
    // Perform the bulk action for selected rows
    const selectedRowIndices = selectedRows.reduce(
      (indices, isSelected, index) => {
        if (isSelected) {
          indices.push(index);
        }
        return indices;
      },
      []
    );

    // Handle the bulk action based on the type (e.g., 'delete')
    if (selectedRowIndices.length > 0) {
      switch (type) {
        case "delete":
          // Show the modal for bulk delete
          setShowModal(true);
          setSelectedAction({
            type,
            modalId: actions.find((action) => action.type === "delete").modalId,
          });
          setSelectedRowIndex(selectedRowIndices);
          break;
        // Add other bulk action cases as needed
        default:
          break;
      }
    }
  };

  // Extract column names from the first data row or use headings if provided
  const columns = headings
    ? headings
    : data.length > 0
    ? Object.keys(data[0])
    : [];

  // Sort data based on the current sorting state
  const sortedData = [...data].sort((a, b) => {
    const columnA = a[sortBy];
    const columnB = b[sortBy];

    if (columnA === columnB) {
      return 0;
    }

    if (typeof columnA === "undefined") {
      return 1;
    }

    if (typeof columnB === "undefined") {
      return -1;
    }

    if (sortOrder === "asc") {
      return columnA.localeCompare
        ? columnA.localeCompare(columnB)
        : columnA - columnB;
    } else {
      return columnB.localeCompare
        ? columnB.localeCompare(columnA)
        : columnB - columnA;
    }
  });

  // Filter data based on the search term
  const filteredData = sortedData.filter((row) => {
    const rowValues = columns.map((column) =>
      row[column]
    );
    return rowValues.some((value) => value.includes(searchTerm.toLowerCase()));
  });

  return (
    <div className="paradox-table">
      <TableHeader tableTitle={tableTitle + ' ' + `${filteredData.length} - ${data.length}`} onChange={setSearchTerm} value={searchTerm}></TableHeader>
      
      {checkbox && (
        <div className="bulk-actions">
          <button onClick={() => handleBulkAction("delete")}>
            Delete Selected
          </button>
          {/* Add other bulk action buttons as needed */}
        </div>
      )}
      <table>
        <thead>
          <tr>
            {checkbox && (
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.every((isSelected) => isSelected)}
                  onChange={handleSelectAllChange}
                />
              </th>
            )}
            {columns.map((column) => (
              <th key={column} onClick={() => handleSort(column)}>
                {column.replace(/([a-zA-Z])([A-Z])([a-z])/g, '$1 $2$3')}
                {sortBy === column && (
                  <span>{sortOrder === "asc" ? " ▲" : " ▼"}</span>
                )}
              </th>
            ))}
            {actions && actions.length > 0 && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {checkbox && (
                <td data-label={columns[index]}>
                  <input
                    type="checkbox"
                    checked={selectedRows[index] || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
              )}
              {columns.map((column, colIndex) => (
                <td key={column} data-label={columns[colIndex]}>{row[column]}</td>
              ))}
              {actions && actions.length > 0 && (
                <td data-label='Actions'>
                  {actions.map((action) => (
                    <Button
                      key={action.type}
                      onClick={() =>
                        handleActionClick(index, row.id, action.type)
                      }
                      title={action.type == 'delete' ? 'Delete Item' : 'Edit Item'}
                      color={action.type == 'delete' ? 'error' : 'success'}
                    >
                      {action.type == 'delete' ? (<DeleteForeverIcon />) : (<EditIcon />)}
                    </Button>
                  ))}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && selectedAction && selectedAction.type === "delete" && (
        <Modal
          modalId={selectedAction.modalId}
          onConfirm={handleModalConfirm}
          onCancel={handleModalCancel}
        />
      )}
    </div>
  );
};

export default DataTable;
