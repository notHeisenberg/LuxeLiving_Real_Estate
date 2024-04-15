import { Outlet } from "react-router-dom"
import { StickyNavbar } from "../Pages/Shared/StickyNavbar";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
    return (
        <div>
            <StickyNavbar></StickyNavbar>
            <div className="min-h-[calc(100vh-280px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;