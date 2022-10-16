function CancelAppointment() {
    return (
        <>
            <button> Go Back to Previous Page </button>
            <h1>Cancel Appointment</h1>
            Please enter a reason for cancellation:
            <form>
                <textarea id="cancelreason" name="cancelreason" rows="4" cols="50">
                </textarea>
                <br/>
                <input type="submit" value="Review Cancellation" />
            </form>
        </>
    );
}

export default CancelAppointment;
