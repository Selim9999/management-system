import React from "react";

const EditableRow = ({ editFormData, handleEditFormChange, item }) => {
  return (
    <tr>
      <td>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Id..."
          name="id"
          value={editFormData.id}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Username..."
          name="username"
          value={editFormData.username}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="label"
          value={editFormData.label}
          onChange={handleEditFormChange}
        >
          <option value="">Select Label</option>
          <option value="Development">Development</option>
          <option value="Testing">Testing</option>
          <option value="Deployment">Deployment</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Sublabel..."
          name="sublabel"
          value={editFormData.sublabel}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="priority"
          value={editFormData.priority}
          onChange={handleEditFormChange}
        >
          <option value="">Select Priority</option>
          <option value="Urgent">Urgent</option>
          <option value="High Priority">High Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="Low Priority">Low Priority</option>
          <option value="Future">Future</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Duration..."
          name="duration"
          value={editFormData.duration}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="duration_confidence"
          value={editFormData.duration_confidence}
          onChange={handleEditFormChange}
        >
          <option value="">Select Duration Confidence</option>
          <option value="Confident">Confident</option>
          <option value="Default">Default</option>
          <option value="Guess/have no idea">Guess/have no idea</option>
          <option value="Not Confident">Not Confident</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Start Date..."
          name="start_date"
          value={editFormData.start_date}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter End Date..."
          name="end_date"
          value={editFormData.end_date}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="status"
          value={editFormData.status}
          onChange={handleEditFormChange}
        >
          <option value="">Select Status</option>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </td>
      <td>
        <select
          name="complexity"
          value={editFormData.complexity}
          onChange={handleEditFormChange}
        >
          <option value="">Select Complexity</option>
          <option value="Simple">Simple</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Task Group..."
          name="task_group"
          value={editFormData.task_group}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Description..."
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter #REF!..."
          name="ref"
          value={editFormData.ref}
          onChange={handleEditFormChange}
        />
      </td>
      <td>
        <select
          name="technical_dependencies"
          value={editFormData.technical_dependencies}
          onChange={handleEditFormChange}
        >
          <option value="">Select Technical Dependencies</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        <select
          name="temporal_dependencies"
          value={editFormData.temporal_dependencies}
          onChange={handleEditFormChange}
        >
          <option value="">Select Temporal Dependencies</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </td>
      <td>
        {" "}
        <input
          type="text"
          required="required"
          placeholder="Enter Computed dependencies IDs..."
          name="computed_dependencies"
          value={editFormData.computed_dependencies}
          onChange={handleEditFormChange}
        />
      </td>
    </tr>
  );
};

export default EditableRow;
