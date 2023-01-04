import React from 'react';

function Buttons({
  nextFunc,
  prevFunc,
  activateAddUser,
  isActive,
  deleteUser,
  directoryData,
  activateEditUser,
  editActive,
}) {
  return (
    <div className={isActive || editActive ? 'inactive' : 'button-container'}>
      <button onClick={prevFunc} className="nav-btn">
        Previous
      </button>
      <div className="blue-btn-container">
        <button
          onClick={() => {
            activateEditUser(directoryData);
          }}
          className="blue-btn"
        >
          Edit
        </button>
        <button
          onClick={() => deleteUser(directoryData.id)}
          className="blue-btn"
        >
          Delete
        </button>
        <button onClick={activateAddUser} className="blue-btn">
          New
        </button>
      </div>
      <button onClick={nextFunc} className="nav-btn">
        Next
      </button>
    </div>
  );
}

export default Buttons;
