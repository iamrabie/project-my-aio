import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

const Layout = ({children}) => {
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <div><Navbar /></div>
        <div>{children}</div>
        <div><Footer /></div>
        </div>
        </>
    );
}


export default Layout;