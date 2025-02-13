import {
    Card,
    Input,
    Button,
    Typography,

} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";



const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [showPassword, setShowPassword] = useState(false)
    // const [response, setResponse] = useState(null);

    const { signUp } = useContext(AuthContext)

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, email, password, photoURL);

        if (!email.includes("@gmail.com")) {
            toast.error("Please provide a valid email...  ex: example@gmail.com")
            return
        }

        if (password.length < 6) {
            toast.warning("Password must be 6 character long")
            return
        } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(password)) {
            toast.warn("Password must contain At least one uppercase letter,one lowercase letter,one digit and at least one special character(`@$!%*?&)")
            return
        }

        signUp(email, password)
            .then(result => {

                console.log(result.user)
                toast.success(
                    <>
                        Account created succesfully
                        <Link to="/login" className="btn btn-sm bg-slate-200 text-center font-medium text-green-500 hover:text-blue-500">
                            <button className="">Log In
                            </button>
                        </Link>
                    </>
                )
                updateProfile(result.user,
                    {
                        displayName: name,
                        photoURL: photoURL
                    })
                // sendEmailVerification(result.user)
                // .then(toast.success("Verification email sent"))
            })

            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    toast.error("Email already in use")
                }
                else if (error.code === "auth/invalid-email") {
                    toast.error("Invalid email. Please provide a valid email")
                }
            }
            )


        setName("")
        setEmail("")
        setPassword("")
        photoURL("")

    };

    return (
        <>
            <Card color="transparent" shadow={false} className=" items-center h-fit md:w-fit md:mt-28 md:ml-[25%] w-screen mt-10 p-10 bg-slate-600 text-blue-400  lg:top-[5%] lg:ml-[40%] " >
                <Typography variant="h4">
                    Sign Up
                </Typography>
                <Typography color="blue" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="Your name"
                            className=" !border-t-blue-gray-200 rounded-xl p-2 w-full focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none rounder after:content-none",
                            }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}

                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 rounded-xl p-2 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none rounder after:content-none",
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            PhotoURL
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="http://example.com"
                            className=" !border-t-blue-gray-200 rounded-xl p-2 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none rounder after:content-none",
                            }}
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>

                        <div className="relative flex items-center">
                            <Input
                                type={showPassword ? "text" : "password"}
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 rounded-xl p-2 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span onClick={() => setShowPassword(!showPassword)} className="absolute right-3 text-2xl" >
                                {
                                    showPassword ?
                                        <IoIosEye />
                                        :
                                        <IoIosEyeOff />
                                }
                            </span>
                        </div>
                    </div>

                    <Button type="submit" className="mt-6 btn btn-primary" fullWidth>
                        sign up
                    </Button>
                    
                    <Typography color="deep-orange" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="/login" className="font-medium text-green-500 hover:text-blue-500">
                            Log In
                        </a>
                    </Typography>
                </form>
            </Card>
            <ToastContainer />

        </>
    );
};

export default SignUp;