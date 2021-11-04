import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";


export const EditDoctor = () => {
  let history = useHistory();
  const { id } = useParams();
  const [doctor, setDoctor] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: ""
  })

  const { name, email, phone, department } = doctor;
  const onInputChange = e => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    loadDoctor();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/doctor/${id}`, doctor);
    history.push("/");
  };

  const loadDoctor = async () => {
    const result = await axios.get(`http://localhost:3003/doctor/${id}`);
    setDoctor(result.data);
  };


  //   const onSubmit = async e => {
  //     e.preventDefault();
  //     await axios.post("http://localhost:3003/doctor",doctor);
  //     history.push("/");
  //   };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update Doctor</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <label for="name">Doctor Name :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Doctor Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>


          <div className="form-group">
            <label for="name">Email :</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label for="name">Phone :</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div><br />

          <div className="form-group">
            <label for="name">Select Department :</label>
            <select name="department" value={department} onChange={e => onInputChange(e)}>
              <option >Select</option>
              <option value="General Medicine">General Medicine</option>
              <option value="General Surgery">General Surgery</option>
              <option value="Paediatrics">Paediatrics</option>
              <option value="Orthopaedics">Orthopaedics</option>
            </select>
          </div><br />
          <button className="btn btn-dark btn-block">UPDATE</button>
        </form>
      </div>
    </div>
  )
}