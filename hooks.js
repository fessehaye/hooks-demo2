import React, { useState, useEffect } from 'react';
const axios = require('axios');

export function useFetchUsers() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  //https://randomuser.me/documentation
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
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
    }, 1500)
  }, []);

  return [loading, users];
}

export function useFormInput(defaultValue) {
  const [value,setValue] = useState(defaultValue);

  function handleChange(e) {
    setValue(e.target.value)
  }

  return {
    value,
    onChange: handleChange
  }

}