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
import { Navigate, useParams, useNavigate } from "react-router-dom";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const { user, login, googleSignUp, githubSignIn } = useContext(AuthContext)
    const { userId } = useParams();
    const navigate = useNavigate();




    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email, password);

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


        login(email, password)
            .then(result => {
                toast.success("login succesfully")
                console.log(result.user)
                
                navigate("/update-profile");
            }
            )
            .catch(error => toast.error(error))


        setEmail("")
        setPassword("")

    };

    const handleGoogleLogin = () => {
        googleSignUp()
            .then(result => {
                toast.success("Google login succesfully")
                console.log(result.user)
                navigate("/update-profile");
            })
            .catch(error => toast.error(error))

    }

    const handleGithubLogin = () => {
        githubSignIn()
            .then(result => {
                toast.success("Google login succesfully")
                console.log(result.user)
                navigate("/update-profile");
            })
            .catch(error => toast.error(error))

    }

    return (
        <>
            <Card color="transparent" shadow={false} className=" items-center h-fit md:w-fit md:mt-28 md:ml-[25%] w-screen mt-10 p-10 bg-slate-600 text-blue-400  lg:top-[5%] lg:ml-[40%] " >
                <Typography variant="h4" color="blue-gray">
                    Login
                </Typography>
                <Typography color="blue" className="mt-1 font-normal">
                    Enter your details to login.
                </Typography>
                <form onSubmit={handleSubmit} className=" mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6">

                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 rounded-xl p-2 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none rounde after:content-none",
                            }}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                                className=" !border--blue-gray-200 rounded-xl p-2 focus:!border-t-gray-900"
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
                        Login
                    </Button>
                    <div className="flex justify-center items-center gap-3 mt-6" >
                        <Button onClick={handleGoogleLogin} className=" btn btn-ghost rounded-full w-1/2" >
                            <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                        </Button>
                        <Button onClick={handleGithubLogin} className=" btn btn-ghost rounded-full w-1/2" >
                            <FaGithub className="text-4xl text-stone-950" ></FaGithub>
                        </Button>
                    </div>
                    <Typography className="mt-4 text-center font-normal">
                        Don't  have an account?{" "}
                        <a href="/register" className="font-medium text-green-500 hover:text-blue-500">
                            Sign up
                        </a>
                    </Typography>
                </form>
            </Card>
            <ToastContainer />

        </>
    );
};

export default Login;
