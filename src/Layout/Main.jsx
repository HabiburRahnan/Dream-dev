import { Outlet } from "react-router-dom";
import Navbar from "../Page/Sheard/Navbar/Navbar";
import Footer from "../Page/Sheard/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;