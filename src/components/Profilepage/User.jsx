import React, { useContext, useEffect, useState } from 'react'
import './user.css'
import cookieContext from '../../context/cookie/cookieContext';
const User = () => {
    const context = useContext(cookieContext);
    const {cookie} = context;
    const [disable, setDisable] = useState(true);
    const [data, setData] = useState({});
    const [originalData, setOriginalData] = useState({});
    
    useEffect(() => {
        console.log(document.cookie.split('=')[1]);
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/user/userDetails", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${document.cookie.split('=')[1]}`
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const d = await response.json();
                setData(d);
                setOriginalData(d)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    console.log(data);
    const onEdit = (e) => {
        e.preventDefault();
        setDisable(!disable);
        if (document.querySelector('.editbtn').innerHTML === "Edit") {
            document.querySelector('.editbtn').innerHTML = "Cancel";
            document.querySelector('.Addbtn').classList.remove("hide");

        }
        else {
            setData(originalData)
            document.querySelector('.editbtn').innerHTML = "Edit";
            document.querySelector('.Addbtn').classList.add("hide");
        }
    }

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <form className='form'>
                <input disabled={disable} className="inp1 noborder" type="text" name="name" value={data.firstName + data.lastName } onChange={onchange} />

                <label >
                    <p>Email:</p>
                    <input disabled={disable} className="inp2 noborder" type="email" name="email" value={data.email} onChange={onchange} />
                </label>
                <label >
                    <p>Phone:</p>
                    <input disabled={disable} className="inp3 noborder" type="number" name="phone" value={data.phone} onChange={onchange} />
                </label>
                <div className="btns">

                    <button type="submit" className="Addbtn hide" onClick={submitHandler}>Add</button>
                    <button className="editbtn" onClick={onEdit}>Edit</button>
                </div>
            </form>

        </>
    )
}

export default User