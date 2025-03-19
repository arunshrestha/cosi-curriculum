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
      <div className="bg-white p-4 rounded w-[800px] max-w-2xl shadow-lg">
        <h2 className="font-bold mb-4">
          {data.courseNum} - {data.courseTitle || 'No Title'}
        </h2>
        {/* Conditionally render prerequisite */}
        {data.coursePre && (
          <p>
            <strong>Prerequisite:</strong> {data['coursePre']}
          </p>
        )}
        {/* Conditionally render instructors */}
        {data.instructor && (
          <p>
            <strong>Instructors:</strong> {data.instructor}
          </p>
        )}
        {/* Add last offered if available */}
        {data.lastOffered && (
          <p>
            <strong>Last Offered:</strong> {data.lastOffered}
          </p>
        )}
        {/* Add nextOffer if available */}
        {data.nextOffer && (
          <p>
            <strong>Next Offer:</strong> {data.nextOffering}
          </p>
        )}
        <p></p>
        <p>
          <strong>Description:</strong> {data.courseDesc}
        </p>
      </div>
    </div>
  );
}
