import home from "../../assets/home.png"
import penpaper from "../../assets/pen-paper.png"
import paint from "../../assets/paint.png"


const TheRenovation = () => {
    return (
        <div className="container mx-auto p-2 flex flex-col items-center md:flex-row mt-10 gap-10">
            <div className="w-1/2 space-y-3" >
                <h1 className="font-medium text-3xl " >Our expert will help you <br /> make <span className="font-bold" >the renovation</span></h1>

                <div className="flex flex-col gap-5 ">
                    <div className="flex gap-3" >
                        <img className="w-12 h-12" src={home} alt="" />
                        <div>
                            <h1 className="text-xl font-semibold">Find inspiration</h1>
                            <p className="text-slate-800 font-medium text-sm opacity-60">
                                Discover your dream home amidst a tapestry of possibilities. L</p>
                        </div>
                    </div>
                    <div className="flex gap-3" >
                        <img className="w-12 h-12" src={penpaper} alt="" />
                        <div>
                            <h1 className="text-xl font-semibold">Find architect/designer</h1>
                            <p className="text-slate-800 font-medium text-sm opacity-60">

                                Uncover the visionary architect or designer to transform your dreams into reality.</p>
                        </div>
                    </div>
                    <div className="flex gap-3" >
                        <img className="w-12 h-12" src={paint} alt="" />
                        <div>
                            <h1 className="text-xl font-semibold">Begin renovation</h1>
                            <p className="text-slate-800 font-medium text-sm opacity-60">

                                Embark on your renovation journey today, where every step brings you closer to your dream space. With meticulous planning and skilled craftsmanship</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:w-1/2 space-y-3 md:flex items-center gap-4" >
                <div>
                    <img className="rounded-lg" src="//newhome.qodeinteractive.com/wp-content/uploads/2023/03/main-home-img-4.jpg" alt="" />
                </div>
                <div className="space-y-3 md:flex md:flex-col gap-2">
                    <div>
                        <img className="rounded-lg" src="//newhome.qodeinteractive.com/wp-content/uploads/2023/03/main-home-img-5.jpg" alt="" />
                    </div>
                    <div>
                        <img className="rounded-lg" src="//newhome.qodeinteractive.com/wp-content/uploads/2023/03/main-home-img-6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TheRenovation;