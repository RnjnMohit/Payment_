import {  useContext, useState  } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import './Login.css';
import cookieContext from "../context/cookie/cookieContext";

const Login = (props) => {
    const navigate = useNavigate();
    const context = useContext(cookieContext);
    const {setCookie} = context;
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData, [event.target.name]: event.target.value
            }
        ))
    }

    async function submitHandler(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password
            })
        });
        const json = await response.json();
        console.log(json);
        props.settingCookie(json.cookie);
        setCookie(json.cookie);

        if (response.status === 404) {
            toast.error("Account do not exist")
            return;
        }
        if (response.status === 401) {
            toast.error("Password do not match")
            return;
        }
        props.setIsLoggedIn(true);
        toast.success('Logged in');
        navigate("/");
        /*v*/
    }


    return (
        <div className="complete">
            <form onSubmit={submitHandler}>
                <p className="heading">LOG IN TO CPAY</p>
                <p className="acc">
                    <a>Don't have an account?</a>
                    <a className='hi'>Register</a>
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
                <button className="btn">
                    Login
                </button>
                <div className="form-bottom">
                    <div className="continue"><p>------------------------Or continue with-----------------------</p></div>
                    <div className="login-with d-flex align-items-center lassi">
                        <a href="javascript:void(0)"><img src="src\assets\img\image-2.png" alt="image" /></a>
                        <a href="javascript:void(0)"><img src="src\assets\img\image-3.png" alt="image" /></a>
                    </div>
                    <div className="forget-pw">
                        <a href="forgot-password-2.html">Forgot your password?</a>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;