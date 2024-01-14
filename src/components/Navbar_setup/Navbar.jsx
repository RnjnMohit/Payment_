import "./Navbar.css"
import NavbarButton from "./NavbarButton"

export default function Navbar(){
    return <>
        <div className="flex justify-between align-middle h-28 border-b border-blue-800">
            <p className=" m-10">LOGO</p>
            <div>
                <NavbarButton name="Personal" />
                <NavbarButton name="Buisness" />
                <NavbarButton name="Company" />
                <NavbarButton name="Help" />

                
                <NavbarButton name="Login"  custom="ml-28"/>
                <NavbarButton name="Sign Up →" custom="mr-20 bg-blue-800 text-stone-100 rounded-xl p-4 px-6 my-0 ml-0 hover:text-blue-800 hover:bg-blue-100 transition duration-150" />
            </div>
        </div>
    </>
}