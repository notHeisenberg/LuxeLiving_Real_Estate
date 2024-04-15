import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { useParams } from 'react-router-dom';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

import { ToastContainer } from "react-toastify";
import { saveTolocalstorage } from "../../utils/localstorage";



const EstateDetails = () => {
    const { id } = useParams()
    console.log(id)
    const { data } = useContext(AuthContext)
    const [singleData, setSingleData] = useState({});

    useEffect(() => {
        if (data) {
            const singleData = data.find((item) => item.id == id);
            setSingleData(singleData);
        }
    }, [data, id]);


    const { estate_title, segment_name, titles, description, bedrooms, bathrooms, rooms, price, area, location, facilities, image } = singleData || {}


    const handleWantToBuy = () => {
        saveTolocalstorage(singleData, 'want-to-buy')
    }

    return (
        <Card className="container mx-auto mt-10  md:flex-col  gap-5 overflow-hidden">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0  shrink-0 rounded-lg"
            >
                <img
                    src={image}
                    alt="card-image"
                    className=" w-full h-full "
                />
            </CardHeader>
            <CardBody className="space-y-5">

                <Typography color="gray" className="mb-4 text-4xl font-bold">
                    {estate_title}
                </Typography>

                <hr className="border-dashed  bg-slate-400" />
                <Typography variant="h4" color="blue-gray" className="mb-2 flex gap-3">
                    {segment_name} {titles}                                     <p
                        className={singleData.status === 'Sale' ? `font-serif  btn btn-sm btn-warning`
                            :
                            `font-serif  btn btn-sm btn-error`
                        } >
                        {singleData.status}
                    </p>
                </Typography>
                <hr className="border-dashed  bg-slate-400" />

                <Typography color="gray" className="mb-8 font-normal text-[#131313B2]">
                    <span className="font-bold text-black">Descriptiopn : </span>{description}
                </Typography>

                <div className="flex flex-wrap gap-5 items-center font-bold">
                    <p>Facilities :</p>

                    {facilities && facilities.map((tag, index) => (
                        <p key={index} className="text-blue-400 bg-blue-50 btn btn-sm rounded-btn">{tag}</p>
                    ))}
                </div>
                <hr className="border-dashed  bg-slate-400" />
                <div className="flex justify-between items-center gap-12 text-[#131313B2]">
                    <div className="flex flex-wrap gap-2 justify-between mt-2 font-medium">

                        <div className="flex gap-2 items-center">
                            <img width="32" height="32" src="/src/assets/icons8-price-tag-euro.gif" alt="price-tag-euro" />
                            <h1>{price}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img width="32" height="32" className="bg-none" src="/src/assets/icons8-place-marker.gif" alt="" />
                            <h1>{location}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/length-ft.png" alt="length-ft" />
                            <p>{area}</p>
                        </div>
                    </div>

                    <div className="flex gap-2 justify-between mt-5 font-medium">
                        <div className="flex gap-2 items-center">
                            <img width="32" height="32" src="https://img.icons8.com/doodle/48/empty-bed.png" alt="empty-bed" />
                            <h1>{bedrooms}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img width="32" height="32" src="https://img.icons8.com/emoji/48/person-taking-bath.png" alt="person-taking-bath" />
                            <h1>{bathrooms}</h1>
                        </div>
                        <div className="flex gap-2 items-center">
                            <img width="32" height="32" src="https://img.icons8.com/isometric-line/50/door.png" alt="door" />
                            <p>{rooms}</p>
                        </div>
                    </div>


                    <div>
                        <Button onClick={handleWantToBuy} variant="text" className=" p-3 border text-white bg-[#50B1C9]">
                            Want to Buy
                        </Button>

                    </div>

                </div>

            </CardBody>
            <ToastContainer />
        </Card>
    );
};

export default EstateDetails;