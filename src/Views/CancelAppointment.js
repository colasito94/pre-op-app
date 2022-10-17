import {Link} from "react-router-dom";

function CancelAppointment() {
    return (
        <>
            <Link class="link" to="/"> <button> Go Back to Home Page </button> </Link>
            <h1>Cancel Appointment</h1>
            Please enter a reason for cancellation:
            <form>
                <textarea id="cancelreason" name="cancelreason" rows="4" cols="50">
                </textarea>
                <br/>
                <Link class="link" to="/ConfirmCancellation"> <input type="submit" value="Review Cancellation" /> </Link>
            </form>
        </>
    );
}

export default CancelAppointment;
