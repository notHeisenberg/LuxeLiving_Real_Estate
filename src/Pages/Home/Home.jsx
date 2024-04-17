

import Banner from '../../Components/Banner/Banner';
import Estates from '../../Components/Estates/Estates';
import OurGoals from '../../Components/OurGoals/OurGoals';
import SIgnTonewsletter from '../../Components/SignToNewslletter/SIgnTonewsletter';
import Sliders from '../../Components/Sliders/Sliders';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Sliders></Sliders>
            <OurGoals></OurGoals>
            <Estates></Estates>
            <SIgnTonewsletter></SIgnTonewsletter>
        </>
    );
};

export default Home;