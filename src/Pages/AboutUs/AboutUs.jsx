import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";


const AboutUs = () => {
    return (
        <div className="text-center container mx-auto p-8 rounded-lg">
        <div className="space-y-1">
            <h1 className="text-5xl font-bold">Luxurious Real Estate</h1>
            <p className="text-2xl">Welcome to our exclusive real estate platform!</p>
            <p>Experience luxury living like never before with our curated selection of premium properties.</p>

            <h2 className="text-2xl font-semibold">Our Vision</h2>
            <p>At Luxe Living, our vision is to redefine luxury living by:</p>
            <ul>
                <li>Offering unparalleled elegance and sophistication in every property</li>
                <li>Providing personalized services tailored to meet the needs of our discerning clientele</li>
                <li>Creating exquisite living spaces that inspire and captivate</li>
                <li>Building lasting relationships based on trust, integrity, and excellence</li>
            </ul>
            <div className="p-3 space-y-2">
                <hr className="container mx-auto border-dashed border-primary-content w-3/4 " />
                <h2 className="text-5xl font-bold">What We Offer</h2>
                <p className="text-2xl">Our platform features:</p>
                <ul>
                    <li>A curated collection of luxury properties including mansions, villas, penthouses, and estates</li>
                    <li>Detailed property listings with stunning photography, virtual tours, and floor plans</li>
                    <li>Exclusive amenities such as private pools, spas, home theaters, and more</li>
                    <li>Expert concierge services to assist with every aspect of your real estate journey</li>
                    <li>Access to a network of top-tier real estate professionals and industry experts</li>
                </ul>
            </div>
            <hr className="container mx-auto border-dashed border-primary-content w-3/4 " />
            <div className="p-3 space-y-2">
                <h2 className="text-5xl font-bold">Connect With Us</h2>
                <p className="text-2xl">Connect with us on social media for the latest updates and property listings:</p>
                <ul className="flex justify-center items-center gap-2">
                    <li className="text-3xl text-blue-500"><a href="#"><FaSquareFacebook /></a></li>
                    <li className="text-3xl text-blue-400"><a href="#"><FaSquareTwitter /></a></li>
                    <li className="text-3xl text-red-500 bg-red-50"><a href="#"><SiInstagram /></a></li>
                </ul>

                <p>For inquiries, property viewings, or partnership opportunities, please contact us at <a className="underline text-blue-500" href="mailto:contact@luxeliving.com">contact@luxeliving.com</a></p>

            </div>
        </div>

    </div>

    );
};

export default AboutUs;