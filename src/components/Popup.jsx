// Inside your Popup.js component

import React from 'react';
import './Popup.css'
const Popup = ({
  segmentName,
  setSegmentName,
  selectedSchema,
  setSelectedSchema,
  addedSchemas,
  setAddedSchemas,
  handleAddNewSchema,
  handleSaveSegment,
}) => {
  return (
    <div className="popup-container">
      <input
        type="text"
        placeholder="Enter segment name"
        value={segmentName}
        onChange={(e) => setSegmentName(e.target.value)}
      />
      <div className="blue-box">
        <select value={selectedSchema} onChange={(e) => setSelectedSchema(e.target.value)}>
          <option value="">Select Schema</option>
          <option value="first_name">First Name</option>
          <option value="last_name">Last Name</option>
          <option value="gender">Gender</option>
          <option value="account_name">Account Name</option>
          <option value="city">City</option>
          <option value="state">State</option>
        </select>
        <br/>
        <button className="add-schema-button" onClick={handleAddNewSchema}>
          +Add new schema
        </button>
      </div>
      <button className="save-segment-button" onClick={handleSaveSegment}>
        Save the Segment
      </button>
    </div>
  );
};

export default Popup;
