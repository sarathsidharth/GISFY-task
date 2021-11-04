import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Doctor = () => {
    const [doctors, setUser] = useState([]);

    useEffect(() => {
        loadDoctors();
    }, []);

    const loadDoctors = async () => {
        const result = await axios.get("http://localhost:3003/doctor")
        setUser(result.data.reverse())
    }
    const deleteDoctor = async id => {
        await axios.delete(`http://localhost:3003/doctor/${id}`);
        loadDoctors();
    };

    return (
        <div>
            <br />
            <h5>DOCTOR LIST</h5><br />
            <div class="container">
                <div class="container-table">
                    <table class="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {doctors.map((doc, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{doc.name}</td>
                                    <td>{doc.department}</td>
                                    <td>{doc.email}</td>
                                    <td>{doc.phone}</td>

                                    <td>
                                        <Link class="btn btn-dark mr-3" to={`/EditDoctor/${doc.id}`}>Edit</Link>
                                        <Link class="btn btn-dark" onClick={() => deleteDoctor(doc.id)}>Delete</Link>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}
