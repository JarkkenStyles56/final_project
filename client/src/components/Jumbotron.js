
import logo from '../images/Final_Project_Banner.jpg';

function Jumbotron(props) {
    return (
        <div
            style={{ height: 420, clear: 'both', paddingTop: 20, textAlign: 'center' }}
            className="jumbotron">
            <img alt='CBV' style={{ width: '700px', height: 'auto' }} src={logo} />
        </div>
    );
}

export default Jumbotron;