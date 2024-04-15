

const Banner = () => {

    const scrollToEstates = () => {
        const estatesSection = document.getElementById('estates');
        estatesSection.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <div className="hero h-[600px] rounded-lg" style={{ backgroundImage: 'url(https://uploads-ssl.webflow.com/61123b1d74f7e6e214ec9cab/61127627883dbb0802b613e3_Hero%20Background.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-sky-400 opacity-90 font-bold">Welcome To LuxeLiving</h1>
                    <h1 className="mb-5 text-3xl font-light">Your Gateway to Extraordinary Real Estate</h1>
                    <button onClick={scrollToEstates} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;