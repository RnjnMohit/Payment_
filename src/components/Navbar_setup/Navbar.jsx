import "./Navbar.css"
import NavbarButton from "./NavbarButton"
import {Link} from "react-router-dom"

export default function Navbar(){
    return <>
        <div className="flex justify-between align-middle h-28 border-b border-blue-800">
            <p className=" m-10">LOGO</p>
            <div>
                <NavbarButton name="Personal" />
                <NavbarButton name="Buisness" />
                <NavbarButton name="Company" />
                <NavbarButton name="Help" />


                <Link to="/login">
                    <button>Log in</button>
                </Link>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </div>
        </div>
    </>
}