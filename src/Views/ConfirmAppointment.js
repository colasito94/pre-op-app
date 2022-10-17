import {Link} from "react-router-dom";

function ConfirmAppointment() {
    return (
        <>
            <Link class="link" to="/"> <button> Go Back to Home Page </button> </Link>
            <h1>Confirm Appointment</h1>
            I would like to confirm my appointment.
            <Link class="link" to="/EnterInformation"> <button> Confirm my appointment. </button> </Link>
        </>
    );
}

export default ConfirmAppointment;
