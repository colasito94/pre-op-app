import {Link} from "react-router-dom";

function FAQ() {
    return (
        <>
            <h1>FAQ</h1>
            <Link class="link" to="/Question1"> Question 1 </Link>
            <Link class="link" to="/Question1"> Question 2 </Link>
            <Link class="link" to="/Question1"> Question 3 </Link>
            <br/>
            <br/>
            Question 1 Answer
            <br/>
            Question 2 Answer
            <br/>
            Question 3 Answer
            <br/>
            <br/>
            Can't find the answer to your question? Call or email us by clicking the link below:
            <Link class="link" to="/ContactUs"> Contact Us </Link>
        </>
    );
}

export default FAQ;
