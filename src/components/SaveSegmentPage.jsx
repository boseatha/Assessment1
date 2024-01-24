// SaveSegmentPage.js

import React, { useState } from 'react';
import Popup from './Popup';

const SaveSegmentPage = () => {
  const [popupVisible, setPopupVisible] = useState(false); // Add this line
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchema, setSelectedSchema] = useState('');
  const [addedSchemas, setAddedSchemas] = useState([]);

  const handleSaveSegment = async () => {
    const webhookURL = 'https://webhook.site/';
    const data = {
      segment_name: segmentName,
      schema: addedSchemas.map(({ value }) => ({ [value]: value })),
    };

    try {
      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data successfully sent to server!');
      } else {
        console.error('Failed to send data to server.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddNewSchema = () => {
    if (selectedSchema) {
      setAddedSchemas([...addedSchemas, { value: selectedSchema, label: selectedSchema }]);
      setSelectedSchema('');
    }
  };

  return (
    <div>
      
      <div className='savesegment'>  <button onClick={() => setPopupVisible(true)}>Save Segment</button></div>


      
    
      {popupVisible && (
        <Popup
          segmentName={segmentName}
          setSegmentName={setSegmentName}
          selectedSchema={selectedSchema}
          setSelectedSchema={setSelectedSchema}
          addedSchemas={addedSchemas}
          setAddedSchemas={setAddedSchemas}
          handleAddNewSchema={handleAddNewSchema}
          handleSaveSegment={handleSaveSegment}
        />
      )}
    </div>
  );
};

export default SaveSegmentPage;
