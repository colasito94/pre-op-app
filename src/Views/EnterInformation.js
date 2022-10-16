function EnterInformation() {
    return (
        <>
            <h1>Enter Information</h1>
            <form>
                Do you have any allergies or reactions to food or medications?
                <br/>
                <textarea id="question1" name="question1" rows="4" cols="50">
                </textarea>
                <br/>
                <input type="submit" value="Submit Information" />
                <input type="submit" value="No, I do not have any allergies or reaction to food or medications." />
            </form>
        </>
    );
}

export default EnterInformation;
