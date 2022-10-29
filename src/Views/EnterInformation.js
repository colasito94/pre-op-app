import {Link} from "react-router-dom";

function EnterInformation() {
    return (
        <>
            <Link class="link" to="/"> <button> Go Back to Home Page </button> </Link>

            <h1>Enter Information</h1>
            <form>
                <h3>One more step to confirm your appointment! Answer the following questions below: </h3>
                <br/>
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
                Do you have any allergies or reactions to food or medications?
                <br/>
                If yes, please list them below. If no, leave the text area blank.
                <br/>
                <textarea id="question1" name="question1" rows="4" cols="50">
                </textarea>
                <br/>
                <Link class="link" to="/ConfirmInformation"> <input type="submit" value="Submit Information" /> </Link>
            </form>
        </>
    );
}

export default EnterInformation;
