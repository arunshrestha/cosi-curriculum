import React from 'react';

export default function Popup({ visible, onClose, data }) {
  const handleOnClose = (e) => {
    if (e.target.id === 'Container') onClose();
  };

  if (!visible) return null;
  console.log('Course Data:', data);

  return (
    <div
      id="Container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-2 rounded w-100 shadow-lg">
        <h2 className="font-bold mb-4">
          {data.courseNum} - {data.courseTitle}
        </h2>
        {/* Conditionally render prerequisite */}
        {data.coursePre && (
          <p>
            <strong>Prerequisite:</strong> {data.coursePre}
          </p>
        )}
        <p>
          <strong>Description:</strong> {data.courseDesc}
        </p>
      </div>
    </div>
  );
}
