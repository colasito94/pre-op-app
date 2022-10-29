import {Link} from "react-router-dom";

function CancelAppointment() {
    return (
        <>
            <Link class="link" to="/"> <button> Go Back to Home Page </button> </Link>
            <h1>Cancel Appointment</h1>
            Please enter a reason for cancellation:
            <form>
                Please enter your First Name:
                <input id="firstname" name="firstname">
                </input>
                <br/>
                Please enter your Last Name:
                <input id="lastname" name="lastname">
                </input>
                <br/>
                Please enter your Date of Birth:
                <input id="DOB" name="DOB">
                </input>
                <br/>
                <textarea id="cancelreason" name="cancelreason" rows="4" cols="50">
                </textarea>
                <br/>
                <Link class="link" to="/ConfirmCancellation"> <input type="submit" value="Review Cancellation" /> </Link>
            </form>
        </>
    );
}

export default CancelAppointment;
