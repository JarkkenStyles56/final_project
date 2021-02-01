import { useState } from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Jumbotron from '../components/Jumbotron';

const Home = () => {
    // History and location are hooks we can use to manipulate our page's history!
    const location = useLocation();
    // For our redirect
    const [redirectToLogin, toggleRedirect] = useState(false);
    // This is the key part to our redirect. We can pull the prior location out here, if it exists
    const { from } = location.state || { from: { pathname: '/' } };


    if (redirectToLogin) {
        // If someone goes to login, this transfers the redirect
        return <Redirect to={{
            pathname: '/login',
            state: { from: from }
        }}
        />;
    }
    return (

        <div className='justify-content-center' className='text-center'>
            <Container>
                <Row>
                    <Col xs lg="12">
                        <h3>Welcome to YOUR Comic Book Vault!</h3>
                        <h4>
                            Here, you can sign up to create, and keep track of your own personalized comic book  collection!

                        </h4>

                        <Row className="justify-content-md-center" >
                            <p>
                                Need an account? <button onClick={() => toggleRedirect(true)}>Signup Here</button>
                            </p>
                        </Row>

                        <Row className="justify-content-md-center">

                            <p>
                                Already have an account? <button onClick={() => toggleRedirect(true)}>Login Here</button>
                            </p>

                        </Row>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Home;

