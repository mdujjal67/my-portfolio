import About from "../Components/About";
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Resume from "../Components/Resume";
import Skills from "../Components/Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Skills></Skills>
            <Footer></Footer>
        </div>
    );
};

export default Home;