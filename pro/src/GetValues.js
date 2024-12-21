import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
// import './App.css';

function GetValues() {
    const [userData,userSetData]=useState([])
    const [postData,postSetData]=useState([])
//npm i react-router dom
    useEffect(()=>{
        axios.get('http://localhost:3000/users').then((val)=>{
            userSetData(val.data)
        }).catch((e)=>{console.log(e)})
        axios.get('http://localhost:3000/posts').then((val)=>{
            postSetData(val.data)
        }).catch((e)=>{console.log(e)})

    },[]);
    let x=userData.map((i)=><div className='card'><div className='id'><span>ID</span>: {i.id} </div><div className='name'><span>Name:</span> {i.name}</div> 
        <div className="address"><span>Address:</span> {i.address.street} {i.address.city} {i.address.zipcode}</div> 
        <div className="email"><span>Email:</span> {i.email}</div><div className="phone"><span>PhoneNo:</span> {i.phone}</div></div>);
        let y=postData.map(i=><div className='card'><div className='id'><span>ID</span>: {i.id} </div>
        <div className='id'><span>USER ID</span>: {i.userId} </div><div className='name'><span>Title:</span> {i.title}</div> 
            <div className="address"><span>Body:</span> {i.body}</div> 
            </div>);

  return (
    <div>
        <label htmlFor="">USER DATA</label>
        <div className='cardBody'>{x}</div>

        <label htmlFor="">POST DATA</label>
        <div className='cardBody'>{y}</div>
        
    </div>

        

  )
}

export default GetValues