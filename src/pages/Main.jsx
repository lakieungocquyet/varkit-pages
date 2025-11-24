import { Outlet } from "react-router";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Main () {
    return (
        <>
            <Header></Header>
            <div className="body">
                <Outlet />
            </div>
            <Footer></Footer>
        </>
    )
}
export default Main;



