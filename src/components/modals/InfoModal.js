import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function InfoModal({ onClose, data }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // const overlayStyle = {
  //   position: 'fixed',
  //   top: 0, left: 0, right: 0, bottom: 0,
  //   backgroundColor: 'rgba(0, 0, 0, 0.3)',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   zIndex: 1000,
  // };

  // const modalStyle = {
  //   background: 'white',
  //   borderRadius: '8px',
  //   padding: '20px',
  //   width: '300px',
  //   boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  // };

  // const tableStyle = {
  //   width: '100%',
  //   marginTop: '10px',
  //   fontSize: '14px',
  // };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded w-[800px] max-w-2xl shadow-lg" ref={modalRef}>
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
    </div>,
    document.body
  );

  // return ReactDOM.createPortal(
  //   <div style={overlayStyle}>
  //     <div style={modalStyle} ref={modalRef}>
  //       <h3>Node Information</h3>
  //       <table style={tableStyle}>
  //         <tbody>
  //           {Object.entries(data).map(([key, value]) => (
  //             <tr key={key}>
  //               <td style={{ fontWeight: 'bold', paddingRight: '10px' }}>{key}</td>
  //               <td>{String(value)}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>,
  //   document.body
  // );
}

export default InfoModal;
