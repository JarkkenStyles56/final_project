import { Link } from 'react-router-dom';
import useAuth from '../hooks/auth';


const Navbar = () => {
    const { isLoggedIn, logout, getProfile } = useAuth();
    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Comic Book VAULT</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">

                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
                        <li class="nav-item">
                            <Link to="/">Home</Link>
                        </li>
                        &nbsp; &nbsp;
                        <li class="nav-item"><Link to='/notes'>Search</Link></li>
                        &nbsp; &nbsp;

                        <li class="nav-item"><Link to='/collection'>My Collection</Link></li>
                        &nbsp; &nbsp;

                        {isLoggedIn() ?
                            <>
                                <li class="nav-item"> <Link onClick={() => logout()} to='/'>Logout</Link></li>
                            </>
                            :
                            <>
                                <li class="nav-item"><Link to="/signup">Signup</Link></li>
                                &nbsp; &nbsp;
                                <li class="nav-item"><Link to="/login">Login</Link></li>
                            </>}
                            &nbsp; &nbsp; &nbsp; &nbsp;
                        {isLoggedIn() &&
                            <span class="navbar-text">
                                <li>Hello, {getProfile().email}</li>
                            </span>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

