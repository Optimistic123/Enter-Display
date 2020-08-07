import React, { useState } from "react";
//import { Redirect } from 'react-router-dom'
import './Form.css';
import Axios from "axios";
// import Particlecomponent from './Particlecomponent';

function Form(props) {

  const [student ,setStudent] = useState({
      username :'',
      imgURL:'',
      email:"",
      phone:"",
      cv:""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    
    setStudent(prevStudent => {
        return {
            ...prevStudent,
            [name]:value
        };
    });
   }

  const submitStudent = async e => {
    e.preventDefault();
    setStudent({ ...student, buttonText: 'Submitting' });
    try {
        const response = await Axios.post('http://localhost:5000/students/add',student)
        console.log(response);
        setStudent({
            ...student,
            username: '',
            imgURL:'',
            email: '',
            phone: '',
            cv:""
        });
        window.location = '/students';
    } catch (error) {
        console.log(error);
    }
  };

  const registerForm = () => (
        <form onSubmit={submitStudent}>
            <h1>Hello { student.username }</h1>
            <input type="text" name="username" onChange={handleChange} value={student.username} placeholder="Name" required />
            <input type="text" name="imgURL" onChange={handleChange} value={student.imgURL} placeholder="imgURL" required />
            <input  type="text"  name="email" onChange={handleChange} value={student.email} placeholder="Email" required />
            <input  type="tel"  name="phone" onChange={handleChange} value={student.phone} placeholder="Phone" pattern="[1-9]{1}[0-9]{9}" required />
            <input  type="text"  name="cv" onChange={handleChange} value={student.cv} placeholder="Resume/Cv" required />
            <button>Submit</button>
        </form>
   );

  return (
    <div className="container">
       {/* <div style={{position: "absolute",top:200,left: 0,width: "100%",height: "100%" }}> */}
        {/* <Particlecomponent /> */}
      {registerForm()}
  </div>
  );
}

export default Form;
