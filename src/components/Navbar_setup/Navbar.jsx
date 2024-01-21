import toast from "react-hot-toast";
import "./Navbar.css"
import NavbarButton from "./NavbarButton"
import {Link} from "react-router-dom"

const Navbar = (props) => {

    const isLoggedIn = props.isLoggedIn;
    const setIsLoggedIn = props.setIsLoggedIn;

    return <>
        <div className="flex justify-between align-middle h-28 border-b border-blue-800">
            <p className="ml-10 mt-3 h-20 w-28"><img src="src\assets\WhatsApp Image 2024-01-15 at 22.43.31_2193eddb.jpg"></img></p>
            <div>
                <Link to="/profile">
                    <NavbarButton name="Profile" />
                </Link>
                <Link to="/wallet">
                    <NavbarButton name="Wallet" />
                </Link>
                <NavbarButton name="Company" />
                <NavbarButton name="Help" />
                    {
                        !isLoggedIn && <Link to="/login">
                            <NavbarButton name="Login"  custom="ml-28"/>
                        </Link>
                    }
                    {
                        !isLoggedIn && 
                        <Link to="/signup">
                            <NavbarButton name="Sign Up →" custom="mr-20 bg-blue-800 text-stone-100 rounded-xl p-4 px-6 my-0 ml-0 hover:text-blue-800 hover:bg-blue-100 transition duration-150" />
                        </Link>
                    }
                    {
                        isLoggedIn && <Link to="/">
                            <button className="ml-28 bg-blue-800 text-stone-100 rounded-xl p-4 px-6 my-0 ml-0 hover:text-blue-800 hover:bg-blue-100 transition duration-150"
                             onClick={() => {
                                setIsLoggedIn(false);
                                toast.success("Logged Out");
                            }}>Log Out</button>
                        </Link>
                    }

            </div>
        </div>
    </>
}

export default Navbar;