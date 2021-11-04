import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

export const AddPatient = () => {
  let history = useHistory();
  const [patient, setPatient] = useState({
    name: "",
    email: "",
    phone: "",
    ward: "",
    doctor: ""
  })
  const { name, email, phone, ward, doctor } = patient;

  useEffect(() => {
    axios.get("http://localhost:3003/doctor")
      .then(res => { console.log(res) })
      .then(err => { console.log(err) })
  }, []);

  const onInputChange = e => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  }

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/patient", patient);
    history.push("/");
  };

  return (
    <div>
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add Patient</h2>
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
              <label for="name">Select Ward :</label>
              <select name="ward" value={ward} onChange={e => onInputChange(e)}>
                <option >Select</option>
                <option value="ward 1">General Medicine</option>
                <option value="ward 2">General Surgery</option>
                <option value="ward 3">Paediatrics</option>
              </select>
            </div><br />
            <button className="btn btn-dark btn-block">Add Patient</button>
          </form>
        </div>
      </div>
    </div>
  )
}
