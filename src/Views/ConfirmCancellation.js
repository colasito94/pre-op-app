function ConfirmCancellation() {
    return (
        <>
            <button> Go Back to Previous Page </button>
            <h1>Confirm Cancellation</h1>
            <h3>I would like to cancel my appointment for the following reason:</h3>
            *Patient's Reason Here*.
            <br/>
            <br/>
            <button> Yes, cancel my appointment. </button>
            <button> No, keep my appointment. </button>

        </>
    );
}

export default ConfirmCancellation;
