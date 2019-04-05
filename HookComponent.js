import React, { useState, useEffect } from 'react';
const axios = require('axios');

export default function HooksComponent(props) {

  const [firstName,setFirstName] = useState("");
  const [loading,setLoading] = useState(false);
  const [users,setUsers] = useState([]);

  //https://randomuser.me/documentation
  useEffect(()=> {
    setLoading(true);
    setTimeout(()=> { 
      axios.get('https://randomuser.me/api/?results=50')
        .then(function (response) {
          // handle success
          setUsers(response.data.results);
          setLoading(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      },3000) 
  },[]);

  const filteredUsers = users.filter((user) => { return user.name.first.indexOf(firstName) > -1});


  return (
      <section className="section">
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)}/>
          </div>
        </div>

        {loading && <div class="notification is-primary">
          Loading Users
        </div>}

        <table class="table">
          <thead>
            <tr>
              <th><abbr title="name">Name</abbr></th>
              <th>Gender</th>
              <th><abbr title="Cell">Cell</abbr></th>
              <th><abbr title="Email">Email</abbr></th>
              <th><abbr title="Age">Age</abbr></th>
            </tr>
          </thead>
          <tbody>
            
            {filteredUsers.map((user) => {
              return (<tr>
              <th>{user.name.first}</th>
              <td>{user.gender}</td>
              <td>{user.cell}</td>
              <td>{user.email}</td>
              <td>{user.dob.age}</td>
            </tr>)
            })}
            
          </tbody>
        </table>

      </section>
    );
}
