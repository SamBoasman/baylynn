import backgroundImage from '../../assets/rehearsal-background.png';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <div style={{ height: 50 }}></div>
            <div className='banner'>
                <img className='background-image' src={backgroundImage} alt='Background' />
                <div className='background-gradient'>
                    <h1 className='banner-header'>BayLynn Youth Band Inc</h1>
                    <p className='banner-body'>BayLynn Youth Band inc. (BLYB) is a fully inclusive ensemble made up of a variety of instruments. We are not your traditional concert band or symphony orchestra. We currently have close to 40 members ranging from Year 5 to university students. Our repertoire consist of a wide range of musical styles from light orchestral music to jazz. All of the music we play is specially arranged and adapted by the band's dedicated team of musical directors to accommodate the make-up of this band we grow and develop.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
