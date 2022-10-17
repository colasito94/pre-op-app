import {Link} from "react-router-dom";

function ConfirmCancellation() {
    return (
        <>
            <Link class="link" to="/CancelAppointment"> <button> Go Back to Previous Page </button> </Link>
            <h1>Confirm Cancellation</h1>
            <h3>I would like to cancel my appointment for the following reason:</h3>
            *Patient's Reason Here*.
            <br/>
            <br/>
            <Link class="link" to="/CancellationConfirmed"> <button> Cancel my appointment </button> </Link>
        </>
    );
}

export default ConfirmCancellation;
