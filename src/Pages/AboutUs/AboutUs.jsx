import { FaSquareTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";


const AboutUs = () => {
    return (
        <div className="text-center container mx-auto  p-8 rounded-lg">
            <div className="space-y-1">
                <h1 className="text-5xl font-bold">About Us</h1>
                <p className="text-2xl">Welcome to our book website!</p>
                <p>We are passionate about books and literature, and our goal is to provide a platform where book lovers can explore, discover, and engage with their favorite reads.</p>

                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p>At our book website, our mission is to:</p>
                <ul>
                    <li>Connect readers with their next favorite book</li>
                    <li>Promote literacy and a love for reading</li>
                    <li>Support authors and their works</li>
                    <li>Foster a vibrant and inclusive reading community</li>
                </ul>
                <div className="p-3 space-y-2">
                    <hr className="container mx-auto border-dashed border-primary-content w-3/4 " />
                    <h2 className="text-5xl font-bold">What We Offer</h2>
                    <p className="text-2xl">Our website features:</p>
                    <ul>
                        <li>A comprehensive catalog of books spanning various genres, authors, and topics</li>
                        <li>Detailed book listings with synopses, author biographies, reviews, and ratings</li>
                        <li>User-friendly search and filtering options to help you find your next great read</li>
                        <li>Community features including book clubs, discussion forums, and user-generated content</li>
                        <li>Regularly updated blog articles, book recommendations, and literary news</li>
                    </ul>
                </div>
                <hr className="container mx-auto border-dashed border-primary-content w-3/4 " />
                <div className="p-3 space-y-2">
                    <h2 className="text-5xl font-bold">Connect With Us</h2>
                    <p className="text-2xl">We &quot;d love to hear from you! Connect with us on social media:</p>
                    <ul className="flex justify-center items-center gap-2">
                        <li className="text-3xl text-blue-500"><a href="#"><FaSquareFacebook /></a></li>
                        <li className="text-3xl text-blue-400"><a href="#"><FaSquareTwitter /></a></li>
                        <li className="text-3xl text-red-500 bg-red-50"><a href="#"><SiInstagram /></a></li>
                    </ul>

                    <p>For inquiries, suggestions, or partnership opportunities, please email us at <a className="underline text-blue-500" href="mailto:contact@bookchain.com">contact@luxeliving.com</a></p>

                </div>
            </div>

        </div>

    );
};

export default AboutUs;