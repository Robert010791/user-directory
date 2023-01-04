import React from 'react';
import { useState } from 'react';

function AddUser({ isActive, cancelAdd, addUser, directoryCount }) {
  const [inputData, setInputData] = useState({
    first: '',
    last: '',
    city: '',
    country: '',
    employer: '',
    title: '',
    favoriteMovies1: '',
    favoriteMovies2: '',
    favoriteMovies3: '',
  });
  const [disableBtn, setDisableBtn] = useState(false);

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const submitNewUser = (e) => {
    e.preventDefault();

    addUser(inputData);
    setInputData({
      first: '',
      last: '',
      city: '',
      country: '',
      employer: '',
      title: '',
      favoriteMovies1: '',
      favoriteMovies2: '',
      favoriteMovies3: '',
    });
  };

  return (
    <div className={isActive ? 'active-form' : 'inactive'}>
      <form className="form-card" onSubmit={submitNewUser}>
        <div className="name-form">
          <h3>First Name:</h3>

          <input
            required
            value={inputData.first}
            className="name-input"
            onChange={handleInput}
            type="text"
            name="first"
            label="first"
          />

          <h3>Last Name:</h3>

          <input
            required
            value={inputData.last}
            className="name-input"
            onChange={handleInput}
            type="text"
            name="last"
            label="last"
          />
        </div>
        <div className="user-stats">
          <div className="user-stat-input">
            <p>City:</p>
            <input
              required
              value={inputData.city}
              onChange={handleInput}
              type="text"
              name="city"
              label="city"
            />
            <p>Country:</p>
            <input
              required
              value={inputData.country}
              onChange={handleInput}
              type="text"
              name="country"
              label="country"
            />
          </div>
          <div className="user-stat-input">
            <p>Employer:</p>
            <input
              required
              value={inputData.employer}
              onChange={handleInput}
              type="text"
              name="employer"
              label="employer"
            />
            <p>Job Title:</p>
            <input
              required
              value={inputData.title}
              onChange={handleInput}
              type="text"
              name="title"
              label="title"
            />
          </div>
        </div>
        <div className="movie-form">
          <p>Favorite Movies:</p>
          <div>
            <input
              value={inputData.favoriteMovies1}
              className="movie-input"
              type="text"
              onChange={handleInput}
              name="favoriteMovies1"
              label="favoriteMovies"
              placeholder="Number 1 favorite movie"
            />
            <br />
            <input
              value={inputData.favoriteMovies2}
              className="movie-input"
              type="text"
              onChange={handleInput}
              name="favoriteMovies2"
              label="favoriteMovies"
              placeholder="Number 2 favorite movie"
            />
            <br />
            <input
              value={inputData.favoriteMovies3}
              className="movie-input"
              type="text"
              onChange={handleInput}
              name="favoriteMovies3"
              label="favoriteMovies"
              placeholder="Number 3 favorite movie"
            />
          </div>
        </div>
        <div className="form-btn-div">
          <button disabled={false} className="submit-input" type="submit">
            Submit
          </button>
        </div>
      </form>
      <button onClick={cancelAdd} className="blue-btn cancel-btn">
        Cancel
      </button>
    </div>
  );
}

export default AddUser;
