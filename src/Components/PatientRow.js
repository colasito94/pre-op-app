import React from 'react';

function PatientRow({ patient }) {
    return (
        <>
            <tr>
                <td> {patient.first_name} </td>
                <td> {patient.last_name} </td>
                <td> {patient.dob} </td>
                <td> {patient.allergies} </td>
            </tr>
        </>
    );
}

export default PatientRow;
