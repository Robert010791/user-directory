import './App.css';
import { useState, useEffect } from 'react';
import UserCard from './components/UserCard';
import Nav from './components/Nav';
import Buttons from './components/Buttons';
import AddUser from './components/AddUser';
import Edit from './components/Edit';
import data from './data/data';

const userData = data;

function App() {
  const [masterData, setMasterData] = useState(userData);
  const [directoryData, setDirectoryData] = useState(masterData[0]);
  const [userCount, setUserCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [editActive, setEditActive] = useState(false);
  const [directoryCount, setDirectoryCount] = useState(25);
  const [editUserData, setEditUserData] = useState({});

  useEffect(() => {
    setDirectoryData(masterData[userCount]);
    // setEditUserData(masterData[userCount]);
    setDirectoryCount(masterData.length);
  }, [masterData, userCount]);

  const resetUsers = () => {
    setDirectoryData({
      id: 1,
      name: { first: 'No registered', last: 'users' },
      city: 'please',
      country: 'click',
      employer: 'new button',
      title: 'to add a user',
      favoriteMovies: ['', '', ''],
    });
  };

  //Add user
  const addUser = (user) => {
    const nameObj = { first: user.first, last: user.last };
    const movieArray = [];
    movieArray.push(
      user.favoriteMovies1,
      user.favoriteMovies2,
      user.favoriteMovies3
    );
    const { city, country, employer, title } = user;
    let id = masterData.length + 1;

    const newUser = {
      id: id,
      name: nameObj,
      city: city,
      country: country,
      employer: employer,
      title: title,
      favoriteMovies: movieArray,
    };

    setMasterData([...masterData, newUser]);
    setUserCount(masterData.length);

    cancelAdd();
  };

  //Edit user
  const submitEditedUser = (user) => {
    const nameObj = { first: user.first, last: user.last };
    const movieArray = [];
    movieArray.push(
      user.favoriteMovies1,
      user.favoriteMovies2,
      user.favoriteMovies3
    );
    const { city, country, employer, title } = user;
    let id = user.id;

    let editedData = masterData.map((item) => {
      if (item.id === 1) {
        return {
          ...item,
          id: id,
          name: nameObj,
          city: city,
          country: country,
          employer: employer,
          title: title,
          favoriteMovies: movieArray,
        };
      }
      return item;
    });

    setMasterData(editedData);

    cancelAdd();
  };

  //Delete user
  const deleteUser = (id) => {
    setMasterData(masterData.filter((user) => user.id !== id));

    if (masterData.length === 0) {
      setUserCount(0);
    } else if (masterData.length === userCount + 1) {
      setUserCount(masterData.length - 2);
    }
  };

  //Next user
  const nextFunc = () => {
    setUserCount(() => {
      if (userCount !== masterData.length - 1) {
        return userCount + 1;
      } else {
        return 0;
      }
    });
  };

  //Previous user
  const prevFunc = () => {
    setUserCount(() => {
      if (userCount !== 0) {
        return userCount - 1;
      } else {
        return masterData.length - 1;
      }
    });
  };

  //Activate add user card
  const activateAddUser = () => {
    setIsActive(true);
  };

  //Activate edit user
  const activateEditUser = (item) => {
    console.log(directoryData.id);

    setEditActive(true);
  };

  //Cancel add user
  const cancelAdd = () => {
    setIsActive(false);
    setEditActive(false);
  };

  return (
    <div>
      <div className="body-container">
        <Nav />
        <UserCard
          editActive={editActive}
          resetUsers={resetUsers}
          directoryCount={directoryCount}
          isActive={isActive}
          directoryData={directoryData}
          userCount={userCount}
        />
        <AddUser
          directoryCount={directoryCount}
          addUser={addUser}
          cancelAdd={cancelAdd}
          isActive={isActive}
        />
        <Edit
          submitEditedUser={submitEditedUser}
          editActive={editActive}
          cancelAdd={cancelAdd}
          directoryData={directoryData}
        />
        <Buttons
          editActive={editActive}
          activateEditUser={activateEditUser}
          directoryData={directoryData}
          deleteUser={deleteUser}
          isActive={isActive}
          activateAddUser={activateAddUser}
          prevFunc={prevFunc}
          nextFunc={nextFunc}
        />
      </div>
    </div>
  );
}

export default App;
