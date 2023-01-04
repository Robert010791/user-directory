import React from 'react';
import { useState, useEffect } from 'react';

function Edit({ editActive, cancelAdd, directoryData, submitEditedUser }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData({
      id: directoryData.id,
      first: directoryData.name.first,
      last: directoryData.name.last,
      city: directoryData.city,
      country: directoryData.country,
      employer: directoryData.employer,
      title: directoryData.title,
      favoriteMovies1: directoryData.favoriteMovies[0],
      favoriteMovies2: directoryData.favoriteMovies[1],
      favoriteMovies3: directoryData.favoriteMovies[2],
    });
  }, [directoryData]);

  const editUser = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const submitEdit = (e) => {
    e.preventDefault();

    submitEditedUser(userData);
  };

  return (
    <div className={editActive ? 'edit-form' : 'inactive'}>
      <form className="form-card" onSubmit={submitEdit}>
        <div className="name-form">
          <h3>First Name:</h3>

          <input
            className="name-input"
            value={userData.first}
            name="first"
            type="text"
            label="first"
            onChange={editUser}
          />

          <h3>Last Name:</h3>

          <input
            className="name-input"
            type="text"
            name="last"
            label="last"
            value={userData.last}
            onChange={editUser}
          />
        </div>
        <div className="user-stats">
          <div className="user-stat-input">
            <p>City:</p>
            <input
              className="name-input"
              type="text"
              name="city"
              label="city"
              value={userData.city}
              onChange={editUser}
            />
            <p>Country:</p>
            <input
              type="text"
              name="country"
              label="country"
              value={userData.country}
              onChange={editUser}
            />
          </div>
          <div className="user-stat-input">
            <p>Employer:</p>
            <input
              type="text"
              name="employer"
              label="employer"
              value={userData.employer}
              onChange={editUser}
            />
            <p>Job Title:</p>
            <input
              type="text"
              name="title"
              label="title"
              value={userData.title}
              onChange={editUser}
            />
          </div>
        </div>
        <div className="movie-form">
          <p>Favorite Movies:</p>
          <div>
            <input
              className="movie-input"
              type="text"
              name="favoriteMovies1"
              label="favoriteMovies1"
              value={userData.favoriteMovies1}
              onChange={editUser}
            />
            <br />
            <input
              className="movie-input"
              type="text"
              name="favoriteMovies2"
              label="favoriteMovies2"
              value={userData.favoriteMovies2}
              onChange={editUser}
            />
            <br />
            <input
              className="movie-input"
              type="text"
              name="favoriteMovies3"
              label="favoriteMovies3"
              value={userData.favoriteMovies3}
              onChange={editUser}
            />
          </div>
        </div>
        <div className="form-btn-div">
          <button className="submit-input" type="submit">
            Submit
          </button>
        </div>
      </form>
      <button onClick={cancelAdd} className="blue-btn cancel-edit-btn">
        Cancel
      </button>
    </div>
  );
}

export default Edit;
