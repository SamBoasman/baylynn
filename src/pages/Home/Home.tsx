import backgroundImage from '../../assets/rehearsal-background.png';
import './Home.scss';
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

const Home = () => {
    return (
        <div className='page'>
            <Navbar />
            <div className='page-content'>
                <div className='spacer pc' />
                <div className='banner'>
                    <img className='background-image' src={backgroundImage} alt='Background' />
                    <div className='background-gradient'>
                        <h1 className='banner-header'>BayLynn Youth Band Inc.</h1>
                        <div className='spacer' />
                        <p className='banner-body'>BayLynn Youth Band inc. (BLYB) is a fully inclusive ensemble made up of a variety of instruments. We are not your traditional concert band or symphony orchestra. We currently have close to 40 members ranging from Year 5 to university students. Our repertoire consist of a wide range of musical styles from light orchestral music to jazz. All of the music we play is specially arranged and adapted by the band's dedicated team of musical directors to accommodate the make-up of this band we grow and develop.</p>
                        <div className='spacer' />
                        <Link to={'/AboutUs'}>
                            <button className='alternate' tabIndex={-1}><strong>Learn More</strong></button>
                        </Link>
                    </div>
                </div>
                <div className='spacer' />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
