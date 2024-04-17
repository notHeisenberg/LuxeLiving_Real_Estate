

import Banner from '../../Components/Banner/Banner';
import Estates from '../../Components/Estates/Estates';
import Maplocation from '../../Components/MapLocation/Maplocation';
import OurGoals from '../../Components/OurGoals/OurGoals';
import Sliders from '../../Components/Sliders/Sliders';


const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Sliders></Sliders>
            <OurGoals></OurGoals>
            <Estates></Estates>
            {/* <Maplocation></Maplocation> */}
        </>
    );
};

export default Home;