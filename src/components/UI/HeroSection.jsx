import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
    const navigation=useNavigate();
    return(
        <>
        <div className="container">
            <div className="homepage-content">

            <div className="left-content">
                <h1>Explore the World,One Country at a Time</h1>
                <p>Discover the beauty and diversity of our planet with World Atlas. Your gateway to exploring countries, cultures, and landscapes around the globe.</p>
                <button onClick={()=>navigation("/country")}>Start Exploring <FaLongArrowAltRight /></button>
            </div>

            <div className="right-content">
                <img src="/images/world.png" alt="world beautiful" />
            </div>

            </div>
        </div>
        </>
    );
}