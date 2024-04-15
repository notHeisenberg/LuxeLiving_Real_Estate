import teamUp from "../../assets/undraw_Team_up_re_84ok.png"
import join from "../../assets/undraw_Join_re_w1lh.png"

const OurGoals = () => {
    return (
        <div className="container mx-auto p-2 flex mt-10 gap-10">
            <div className="w-1/2" >
                <h1 className="text-blue-400 font-bold text-md " >OUR GOAL</h1>
                <p className="text-4xl md:text-5xl font-bold opacity-80 " >We are dedicated to finding a Estate that you'll love.</p>
                <div className="flex flex-col md:flex-row ">
                    <img className="w-52" src={teamUp} alt="" />
                    <img className="w-52" src={join} alt="" />
                </div>
            </div>

            <div className="w-1/2 space-y-3 " >
                <p className="opacity-80" >We are committed to delivering unparalleled service to our clients, ensuring a seamless and satisfying experience in every transaction.We strive to curate a collection of luxury properties that embody elegance, sophistication, and exclusivity, catering to the discerning tastes of our clientele.Building enduring relationships with our clients is paramount. We aim to be a trusted partner throughout their real estate journey, providing personalized guidance and support.
                </p>
                <div className="flex gap-2" >
                    <img className="w-12 h-12 rounded-full border-2 border-sky-300" src="https://assets-global.website-files.com/611241814e94ea45ef03890c/6112797eff4178db12e71005_Example%20Profile%20Image%204.jpg" alt="" />
                    <div>
                        <h1>Ava Orn</h1>
                        <h2 className="opacity-80 text-xs " >MANAGING BROKER</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurGoals;