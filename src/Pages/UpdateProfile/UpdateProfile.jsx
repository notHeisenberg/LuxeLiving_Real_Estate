
import { updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Components/Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

export default function UpdateProfile() {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        updateProfile(user,
            {
                displayName: data.DisplayName,
                photoURL: data.PhotoURL,
            }
        )
            .then(
                toast.success("Update succesfull")
            )
            .catch((error) =>
                toast.warning(error)
            )
        console.log(errors);

    }

    return (
        <>
            <div className='text-center container mx-auto font-semibold text-2xl text-gray-700 bg-slate-300 mt-10 p-8 space-y-2 border-2 border-error rounded-lg'>
                <p>Name : {user.displayName} </p>
                <p>Email : {user.email} </p>
                <p>PhotoURL : {user.photoURL} </p>
            </div>
            <h1 className='text-center mt-10 text-blue-500 text-4xl font-bold' >Update Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='container mx-auto h-[600px] mt-5 border-4 border-sky-200 p-28 flex flex-col items-center' style={{ backgroundImage: 'url("https://assets-global.website-files.com/611241814e94ea45ef03890c/61126371cd508f2b9fd63055_California%20St%20Wide%20Image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }} >

                <input name='DisplayName' className='h-20 lg:w-1/2 border-2 focus:border-4 focus:border-emerald-200 rounded-lg p-3 mt-2' type="text" placeholder="Display name" {...register("DisplayName", { required: true })} />
                <input name='PhotoURL' className='h-20 lg:w-1/2 border-2 focus:border-4 focus:border-emerald-200 rounded-lg p-3 mt-2' type="text" placeholder="Photo URL" {...register("PhotoURL", { required: true })} />
                <input className='h-20 lg:w-1/2 border-2 text-white text-xl focus:border-4 focus:border-emerald-200 rounded-lg p-3 mt-2' type="submit" />
            </form>
            <ToastContainer></ToastContainer>
        </>
    );
}