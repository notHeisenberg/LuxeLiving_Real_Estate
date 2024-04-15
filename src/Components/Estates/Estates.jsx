import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Estate from '../Estate/Estate';


const Estates = () => {
    const { data } = useContext(AuthContext)

    return (
        <div id="estates" className="mt-10" >
            <h1 className="text-4xl font-bold text-center">Our Estates</h1>
            <div className="mt-6 gap-3 grid grid-cols-1 lg:grid-cols-4" >
                {
                    data.map((item, idx) => (

                        <Estate
                            item={item}
                            key={idx}
                        ></Estate>
                    )
                    )
                }
            </div>
        </div>
    );
};

export default Estates;