

const SIgnTonewsletter = () => {
    return (
        <div className=" bg-cover bg-no-repeat mt-10 md:p-40" style={{ backgroundImage: 'url(	https://newhome.qodeinteractive.com/wp-content/uploads/2023/03/main-home-img-7.jpg)' }} >
            <div className="container mx-auto  flex justify-center flex-col md:flex-row  p-10" >
                <div className="w-1/2 space-y-2 text-white">
                    <h1 className="text-4xl font-bold" >Find a home that <br /> truly suits you</h1>
                    <p>* Discover the perfect home tailored to your unique desires and needs.</p>
                </div>
                <div className="w-1/2 md:w-1/4 p-4 bg-gray-300 bg-opacity-60 space-y-2" >

                    <h1 className="text-2xl">Sign to newsletter</h1>
                    <p>Save your time and easily rent or sell your property with the lowest commission on the real estate market.</p>

                    <div className="flex">
                        <input type="text" placeholder="Your email" className="input input-bordered rounded-none border-r-0 w-3/4 " />
                        <button className="btn btn-info rounded-none ">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SIgnTonewsletter;