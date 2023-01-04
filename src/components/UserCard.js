import React from 'react';
import PropTypes from 'prop-types';

function UserCard({
  directoryData,
  isActive,
  directoryCount,
  userCount,
  resetUsers,
  editActive,
}) {
  if (directoryData === undefined) {
    resetUsers();
  }

  return (
    <div
      className={!isActive && !editActive ? 'user-card-container' : 'inactive'}
    >
      <div className="user-data">
        <h2 className="user-name">
          {directoryData.name.first} {directoryData.name.last}
        </h2>
        <div className="user-stats">
          <ul>
            <li>
              <h3> From:</h3>
              <p>
                {directoryData.city} {directoryData.country}
              </p>
            </li>
            <li>
              <h3> Job Title:</h3>
              <p>{directoryData.employer}</p>
            </li>
            <li>
              <h3> Employer:</h3>
              <p>{directoryData.title}</p>
            </li>
          </ul>
        </div>
        <div className="user-movies">
          <ol>
            <h3>Favorite Movies:</h3>
            <li>{directoryData.favoriteMovies[0]}</li>
            <li>{directoryData.favoriteMovies[1]}</li>
            <li>{directoryData.favoriteMovies[2]}</li>
          </ol>
        </div>
      </div>
      <h2 className="card-count">
        {userCount + 1}/{directoryCount}
      </h2>
    </div>
  );
}

export default UserCard;
