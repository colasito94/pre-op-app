import {Link} from "react-router-dom";

function ConfirmInformation() {
    return (
        <>
            <Link class="link" to="/EnterInformation"> <button> Go Back to Previous Page </button> </Link>
            <h1>Confirm Information</h1>
            <h4> Are the following information correct? </h4>
            Allergies/reactions: *Patient answer here*
            <Link class="link" to="/AppointmentConfirmed"> <button> Yes. Confirm my appointment. </button> </Link>
            <Link class="link" to="/EnterInformation"> <button> No, I'd like to edit my information. </button> </Link>
        </>
    );
}

export default ConfirmInformation;
