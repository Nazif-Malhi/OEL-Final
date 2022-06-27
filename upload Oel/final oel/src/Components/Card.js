import React from 'react';
import profile from './profile.jpg';
import './Card.css'

const Card = ({name,role,age,phone,address,gender,language,salary}) => {
  return (<>
<div class="flip-card">
  <h1>{name}</h1>
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={profile} alt="Avatar" style={{width:'200px',height:'240px'}}/>
    </div>
    <div class="flip-card-back">
      <p>Role : {role}</p> 
      <p>Age : {age}</p>
      <p>Phone : {phone}</p>
      <p>Address : {address}</p>
      <p>Gender : {gender}</p>
      <p>Language : {language}</p>
      <p>Salary : {salary}</p>

    </div>
  </div>
</div>

</>)
}

export default Card