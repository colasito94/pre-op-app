import React from 'react';
import PatientRow from "./PatientRow";

function PatientTable({ patients }) {
    return (
        <>
            <table id="patients">
                <caption> Patient Overview </caption>
                <thead>
                <tr>
                    <th> First Name </th>
                    <th> Last Name </th>
                    <th> Date of Birth </th>
                    <th> Allergies </th>
                </tr>
                </thead>

                <tbody>
                    {patients.map((patient, i) => <PatientRow patient={patient} />)}
                </tbody>
            </table>
        </>
    );
}

export default PatientTable;
