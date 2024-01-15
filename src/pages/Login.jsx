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

    async function submitHandler(event){
        event.preventDefault();
        const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email:formData.email,
                password:formData.password
            })
        });
        const json = await response.json();
        console.log(json);

        if(response.status === 404){
            toast.error("Account do not exist")
            return;
        }
        if(response.status === 401){
            toast.error("Password do not match")
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