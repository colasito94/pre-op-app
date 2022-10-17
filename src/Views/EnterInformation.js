import {Link} from "react-router-dom";

function EnterInformation() {
    return (
        <>
            <Link class="link" to="/"> <button> Go Back to Home Page </button> </Link>

            <h1>Enter Information</h1>
            <form>
                <h3>One more step to confirm your appointment! Answer the following questions below: </h3>
                Do you have any allergies or reactions to food or medications?
                <br/>
                <textarea id="question1" name="question1" rows="4" cols="50">
                </textarea>
                <br/>
                <Link class="link" to="/ConfirmInformation"> <input type="submit" value="Submit Information" /> </Link>
                <Link class="link" to="/ConfirmInformation"> <input type="submit" value="No, I do not have any allergies or reaction to food or medications." /> </Link>
            </form>
        </>
    );
}

export default EnterInformation;
