import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          placeholder="Enter Id..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Username..."
          name="username"
          value={editFormData.username}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Label..."
          name="label"
          value={editFormData.label}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Sublabel..."
          name="sublabel"
          value={editFormData.sublabel}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Priority..."
          name="priority"
          value={editFormData.priority}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Duration..."
          name="duration"
          value={editFormData.duration}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Duration Confidence..."
          name="duration_confidence"
          value={editFormData.duration_confidence}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Start Date..."
          name="start_date"
          value={editFormData.start_date}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter End Date..."
          name="end_date"
          value={editFormData.end_date}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Status..."
          name="status"
          value={editFormData.status}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Complexity..."
          name="complexity"
          value={editFormData.complexity}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Task Group..."
          name="task_group"
          value={editFormData.task_group}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Description..."
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter #REF!..."
          name="ref"
          value={editFormData.ref}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Technical dependencies IDs..."
          name="technical_dependencies"
          value={editFormData.technical_dependencies}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="Enter Temporal dependencies IDs..."
          name="temporal_dependencies"
          value={editFormData.temporal_dependencies}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          placeholder="Enter Computed dependencies IDs..."
          name="computed_dependencies"
          value={editFormData.computed_dependencies}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
