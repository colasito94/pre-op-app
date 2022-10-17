import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function FAQ() {
    return (
        <>
            <Link class="link" to="/"> <button> Go Back to Home Page </button> </Link>
            <h1>FAQ</h1>
            <HashLink class="link" to="#Question1"> Question 1 </HashLink>
            <HashLink class="link" to="#Question2"> Question 2 </HashLink>
            <HashLink class="link" to="#Question3"> Question 3 </HashLink>
            <HashLink class="link" to="#Question4"> Question 4 </HashLink>
            <HashLink class="link" to="#Question5"> Question 5 </HashLink>
            <HashLink to="#ContactUs"> Contact Us </HashLink>
            <br/>
            <br/>
            <h3 id="Question1"> Question 1 </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus pulvinar condimentum purus, consectetur viverra ante tempus a.
                    Pellentesque ultrices purus vitae magna fermentum sodales.
                </p>
            <h3 id="Question2"> Question 2 </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus pulvinar condimentum purus, consectetur viverra ante tempus a.
                    Pellentesque ultrices purus vitae magna fermentum sodales.
                </p>
            <h3 id="Question3"> Question 3 </h3>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus pulvinar condimentum purus, consectetur viverra ante tempus a.
                    Pellentesque ultrices purus vitae magna fermentum sodales.
                </p>
            <h3 id="Question4"> Question 4 </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus pulvinar condimentum purus, consectetur viverra ante tempus a.
                    Pellentesque ultrices purus vitae magna fermentum sodales.
                </p>
            <h3 id="Question5"> Question 5 </h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus pulvinar condimentum purus, consectetur viverra ante tempus a.
                    Pellentesque ultrices purus vitae magna fermentum sodales.
                </p>
            <br/>
            <h5> Can't find the answer to your question? Call or email us by clicking the link below: </h5>
            <Link id="ContactUs" class="link" to="/ContactUs"> Contact Us </Link>
            <br/>
            <br/>
        </>
    );
}

export default FAQ;
