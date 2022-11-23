import { Outlet } from "react-router-dom";
import Rightbar from "./Rightbar/Rightbar";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
    return (
        <div className="flex relative">
            <Sidebar />
            <Rightbar />
            <div className="px-8 py-8 w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
