import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './Login.css';


const Login = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

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
        navigate("/");
        /*v*/
    }


    return(
    <div class="complete">
        <form  onSubmit={submitHandler}>
            <p class = "heading">LOG IN TO CPAY</p>
            <p class = "acc">
                <a>Don't have an account?</a>
                <a class='hi'>Register</a>
            </p>
            
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
            <button class="btn">
                Login
            </button>
            <div class="form-bottom">
            <div class="continue"><p>----------------------------------Or continue with---------------------------------</p></div>
            <div class="login-with d-flex align-items-center lassi">
                <a href="javascript:void(0)"><img src="src\assets\img\image-2.png" alt="image"/></a>
                <a href="javascript:void(0)"><img src="src\assets\img\image-3.png" alt="image"/></a>
            </div>
            <div class="forget-pw">
                <a href="forgot-password-2.html">Forgot your password?</a>
            </div>
        </div>
        </form>
    </div>
    )
}

export default Login;