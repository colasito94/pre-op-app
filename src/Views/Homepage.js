import {Link} from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>Pre-op App</h1>
            <Link class="link" to="/rnlogin"> RN Login </Link>
            <Link class="link" to="/patientlogin"> Patient Login </Link>
            <br/>
            <br/>
            <br/>
            <h3>*New Feature!*</h3>
            You can now quickly confirm or cancel an appointment by clicking the link below:
            <Link class="link" to="/ConfirmAppointment"> Confirm Appointment </Link>
            <Link class="link" to="/CancelAppointment"> Cancel Appointment </Link>
        </>
    );
}

export default HomePage;
