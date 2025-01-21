import backgroundImage from '../../assets/rehearsal-background.png';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div style={{ height: 50 }}></div>
            <div className="background-wrapper">
                <img className="background-image" src={backgroundImage} alt="Background" />
                <div className="background-gradient"></div>
            </div>
        </div>
    );
};

export default Home;
