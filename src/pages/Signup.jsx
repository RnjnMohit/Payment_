import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
const Signup = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
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
        if (formData.password !== formData.confirmPassword) {
            toast.success('Password do not match');
            return;
        }

        setIsLoggedIn(true);
        toast.success('Account Created');
        const accounData = {
            ...formData
        };
        const response = await fetch("http://localhost:3000/user/signUp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName:formData.firstName,
                lastName:formData.lastName,
                email:formData.email,
                password:formData.password,
                phone:123456789
            })
        });
        const json = await response.json();

        console.log('account created');
        console.log(accounData);
        navigate("/");
    }


    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    First Name<sup>*</sup>
                </p>
                <input
                    required
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeHandler}
                    placeholder="Enter First Name" />
            </label>
            <label>
                <p>
                    Last Name<sup>*</sup>
                </p>
                <input
                    required
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={changeHandler}
                    placeholder="Enter last Name" />
            </label>
            <label>
                <p>
                    Email Address<sup>*</sup>
                </p>
                <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Enter email"
                    onChange={changeHandler} />
            </label>
            <label>
                <p>
                    Create Pssworrd<sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder="Enter passowrd"
                />
            </label>
            <span onClick={() => setShowPassword((prev) => !prev)}>
                {
                    showPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
                }
            </span>
            <label>
                <p>
                    Confirm Password<sup>*</sup>
                </p>
                <input
                    required
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Enter confirm Password"
                    onChange={changeHandler} />
            </label>
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {
                    showConfirmPassword ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)
                }
            </span>
            <button>
                Create Account
            </button>
        </form>
    )
}

export default Signup;