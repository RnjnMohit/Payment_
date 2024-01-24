import React, { useContext, useEffect, useState } from 'react'
import './user.css'
import cookieContext from '../../context/cookie/cookieContext';
const User = () => {
    const context = useContext(cookieContext);
    const [disable, setDisable] = useState(true);
    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        upi:'',
        acNumber:''
      });
    const [originalData, setOriginalData] = useState({});
    
    useEffect(() => {
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
                const response2 = await fetch("http://localhost:3000/account/updateAccount", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${document.cookie.split('=')[1]}`
                    },
                });

                if (!response2.ok) {
                    throw new Error("Failed to fetch data");
                }

                const d2 = await response2.json();
                console.log(d2.upi);
                setData({firstName:d.firstName,lastName:d.lastName,email:d.email,phone:d.phone,upi:d2.upi,acNumber:d2.acNumber});
                setOriginalData(d)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
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
                <input disabled className="inp1 noborder" type="text" name="name" value={(data.firstName || '') + ' ' + (data.lastName || '')} onChange={onchange} />

                <label >
                    <p>Email:</p>
                    <input disabled={disable} className="inp2 noborder" type="email" name="email" value={data.email} onChange={onchange} />
                </label>
                <label >
                    <p>Phone:</p>
                    <input disabled={disable} className="inp3 noborder" type="number" name="phone" value={data.phone} onChange={onchange} />
                </label>
                <label >
                    <p>UPI:</p>
                    <input disabled={disable} className="inp3 noborder" type="text" name="upi" value={data.upi} onChange={onchange} />
                </label>
                <label >
                    <p>Account:</p>
                    <input disabled={disable} className="inp3 noborder" type="number" name="acNumber" value={data.acNumber} onChange={onchange} />
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