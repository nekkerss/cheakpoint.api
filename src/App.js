
import './App.css';
import UserList from './UserList';
import React, { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
const[data,setdata]=useState([]);
const[erroe,seterroe]=useState(null);
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => setdata(res.data))
    .catch(err =>seterroe(err))
},[])
console.log(data);
  return (
    <>
    <UserList data={data}/></>
 
  );
}

export default App;
