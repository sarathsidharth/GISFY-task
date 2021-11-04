import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" >HOSPITAL</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

            <li class="nav-item active">
              <Link class="nav-link" to="/">HOME</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/DoctorList">DOCTORS DATA</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/PatientList">PATIENT DATA</Link>
            </li>
            <li class="nav-item active">
              <Link class="nav-link" to="/AddDoctor">Add New Doctor</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
