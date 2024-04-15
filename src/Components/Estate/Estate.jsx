
import {
    Card,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";



const Estate = ({ item }) => {

    const { estate_title, segment_name, titles, bedrooms, bathrooms, rooms, price, status, area, location, facilities, image } = item || {}
    console.log(item)

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div data-aos="zoom-in" >

            <Card
                item={item}
                className={` h-[670px] container mx-auto mt-10  overflow-hidden cursor-pointer border hover:drop-shadow-sm`}
            >
                <Card
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className=" h-[350px] relative rounded-none rounded-t-lg ">
                    <img
                        src={image}
                        className="w-full h-full "
                        alt="card-image"
                    />

                    <p
                        className={status === 'Sale' ? `font-serif  btn btn-sm w-16 btn-warning absolute inset-2`
                            :
                            `font-serif  btn btn-sm w-16 btn-error absolute inset-2`
                        } >
                        {status}
                    </p>
                </Card>
                <CardBody className="p-4">
                    <div className="space-y-1 mb-4 text-center">
                        <Typography variant="h6" className="opacity-70">{segment_name} {titles} </Typography>
                        <Typography variant="h4" className="font-semibold">{estate_title}</Typography>
                    </div>

                    <div className=" my-4 flex flex-wrap  gap-2">
                        {facilities && facilities.slice(0, 3).map((tag, index) => (
                            <p key={index} className="text-blue-400 bg-blue-50 btn btn-sm rounded-btn">{tag}</p>
                        ))}
                        {facilities.length > 3 && (
                            <p className="text-blue-800 underline">many more...</p>
                        )}
                    </div>

                    <hr className="border-dashed  bg-slate-400" />
                    <div className="flex flex-wrap justify-between mt-2 font-medium">

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


                    <div className="flex  justify-between my-4 font-medium">

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

                    <Link to={`/estate-details/${item.id}`} >
                        <button className="btn btn-block btn-info" >View details</button>
                    </Link>

                </CardBody>
            </Card>

        </div>
    );
};

export default Estate;