import WantToBuy from "../../Components/WantToBuy/WantToBuy";
import { getFromLocalstorage } from "../../utils/localstorage";


const SpecialRoute = () => {
    const wantToBuy = getFromLocalstorage("want-to-buy")
    console.log(wantToBuy)
    return (
        <div>
            <div className="container mx-auto mt-10" >
                <h1 className="text-4xl font-bold text-center">Your Listings</h1>
                <div className="mt-6 gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                    {
                        wantToBuy.map((item, idx) => (

                            <WantToBuy
                                item={item}
                                key={idx}
                            ></WantToBuy>
                        )
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default SpecialRoute;