import { useState } from "react"
import toast from "react-hot-toast";


const Login = ({setIsLoggedIn}) => {

    const [formData, setFormData] = useState({
        phoneNumber:"",
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
        if(formData.phoneNumber.length !== 10){
            toast.error('incorrect phone number')
            return;
        }
        setIsLoggedIn(true);
        toast.success('Logged in');
        /*v*/
    }


    return(
        
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Phone Number<sup>*</sup>
                </p>
                <input 
                required 
                type="number"
                placeholder="Enter you phone no."
                name="phoneNumber"
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