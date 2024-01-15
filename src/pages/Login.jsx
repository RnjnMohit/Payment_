import { useState } from "react"
import toast from "react-hot-toast";


const Login = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })

    function changeHandler(event){
        setFormData((prevData) => (
            {
                ...prevData, [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success('Logged in');
        /*v*/
    }


    return(
        
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email<sup>*</sup>
                </p>
                <input 
                required 
                type="email"
                placeholder="Enter you email id"
                name="email"
                value={formData.phoneNumber}
                onChange={changeHandler}
                  />
            </label>
            <label>
                <p>
                    Password<sup>*</sup>
                </p>
                <input 
                required
                type="password"
                placeholder="Enter password"
                name="password"
                value={formData.password}
                onChange={changeHandler} />
            </label>
            <button>
                Login
            </button>
        </form>



    )
}

export default Login;