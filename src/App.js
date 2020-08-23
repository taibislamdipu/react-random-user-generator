import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [user, setUser] = useState([])
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => setUser(data.results))
  }, [])

  return (
    <div className="App">
      <Heading></Heading>
      <header className="App-header">
        {console.log("Amar API", user)}
        {
          user.map(u => <Users
            fname={u.name.first}
            lname={u.name.last}
            email={u.email}
            phone={u.phone}
            image={u.picture.large}
          >
          </Users>)
        }
      </header>
    </div>
  );
}

function Heading() {
  return (
    <h1>Load 5 New Random User Everytime Relaod</h1>
  )

}
function Users(props) {

  const userStyle = {
    border: '3px solid purple',
    width: '500px',
    marginTop: '30px',
    paddingTop: '50px'
  }

  return (

    <div style={userStyle}>
      <img src={props.image} alt="picture" />
      <h1>Name: {props.fname + " " + props.lname}</h1>
      <h4>Email: {props.email}</h4>
      <h4>Phone: {props.phone}</h4>
    </div>
  )
}

export default App;
