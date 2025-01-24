import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const JoinUs = () => {
    return (
        <div className='page'>
            <Navbar />
            <div className='page-content'>
                <h1>Join Us</h1>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}

export default JoinUs;