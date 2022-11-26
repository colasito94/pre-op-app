import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";

function EnterInformation() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [dob, setDOB] = useState('');
    const [allergies, setAllergies] = useState('');

    // Create function

    const navigate = useNavigate();

    const addPatient = async () => {
        const newPatient = { first_name, last_name, dob, allergies };
        const response = await fetch('/patients', {
            method: 'POST', // Call /exercises and POST endpoints
            body: JSON.stringify(newPatient), // Converts Javascript Object to a JSON string
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added the patient!");
        } else {
            alert(`Failed to add patient, status code = ${response.status}`);
        }
    };
    return (
        <>
            <Link class="link" to="/"> <button> Go Back to Home Page </button> </Link>

            {/*Old Enter Information Form*/}
            {/*<h1>Enter Information</h1>*/}
            {/*<form>*/}
            {/*    <h3>One more step to confirm your appointment! Answer the following questions below: </h3>*/}
            {/*    <br/>*/}
            {/*    Please enter your First Name:*/}
            {/*    <input id="firstname" name="firstname">*/}
            {/*    </input>*/}
            {/*    <br/>*/}
            {/*    Please enter your Last Name:*/}
            {/*    <input id="lastname" name="lastname">*/}
            {/*    </input>*/}
            {/*    <br/>*/}
            {/*    Please enter your Date of Birth:*/}
            {/*    <input id="DOB" name="DOB">*/}
            {/*    </input>*/}
            {/*    <br/>*/}
            {/*    Do you have any allergies or reactions to food or medications?*/}
            {/*    <br/>*/}
            {/*    If yes, please list them below. If no, leave the text area blank.*/}
            {/*    <br/>*/}
            {/*    <textarea id="question1" name="question1" rows="4" cols="50">*/}
            {/*    </textarea>*/}
            {/*    <br/>*/}
            {/*    <Link class="link" to="/ConfirmInformation"> <input type="submit" value="Submit Information" /> </Link>*/}
            {/*</form>*/}

            {/*New Enter Information Form*/}
            <form>
                <fieldset>
                    <legend> One more step to confirm your appointment! Please provide the following information: </legend>
                    <label>First Name:
                        <input type="text"
                               value={first_name}
                               onChange={e => setFirstName(e.target.value)} />
                    </label><br/>
                    <label>Last Name:
                        <input type="text"
                               value={last_name}
                               onChange={e => setLastName(e.target.value)} />
                    </label><br/>
                    <label>Date of Birth:
                        <input type="text"
                               value={dob}
                               onChange={e => setDOB(e.target.value)} />
                    </label><br/>
                    <label>Allergies:
                        <input type="text"
                               value={allergies}
                               onChange={e => setAllergies(e.target.value)} />
                    </label><br/>


                    {/*Submit button with event handler*/}
                    <button
                        // Event handler that calls addExercise()
                        onClick={ () => {
                            addPatient();  {/*Call state update function*/}
                            navigate("/");
                        }}>
                        Submit
                    </button>
                </fieldset>
            </form>

        </>
    );
}

export default EnterInformation;
