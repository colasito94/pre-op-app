import {useEffect, useState} from "react";
import PatientTable from "../Components/PatientTable";

function PatientOverview() {
    const [patients, setPatients] = useState([]);

    // Read/retrieve function
    const loadPatients = async () => {
        const response = await fetch('/patients');
        const patients_data = await response.json();
        setPatients(patients_data);
    }

    useEffect(() => {
        loadPatients();  // Will only be called once in the lifecycle
    }, []);

    return (
        <>
            <h1>Patient Overview</h1>
            <PatientTable patients={patients}>
            </PatientTable>
        </>
    );
}

export default PatientOverview;
