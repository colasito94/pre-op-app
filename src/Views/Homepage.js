import {Link} from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>Pre-op App</h1>
            <Link class="link" to="/rnlogin"> RN Login </Link>
            <Link class="link" to="/patientlogin"> Patient Login </Link>
        </>
    );
}

export default HomePage;
