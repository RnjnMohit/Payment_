import React, { useEffect, useState } from 'react'
import './user.css'
const User = () => {
    const [disable, setDisable] = useState(true);
    let originalData = {
        name: "Pranav Gaur",
        email: "gasjdaj@gmail.com",
        phone: "67217313983"
    }
    const [data, setData] = useState(originalData);
    const onEdit = (e) => {
        e.preventDefault();
        setDisable(!disable);
        if (document.querySelector('.editbtn').innerHTML === "Edit") {
            document.querySelector('.editbtn').innerHTML = "Cancel";
            document.querySelector('.Addbtn').classList.remove("hide");
            
        }
        else{
            setData(originalData)
            document.querySelector('.editbtn').innerHTML = "Edit";
            document.querySelector('.Addbtn').classList.add("hide");
        }
    }

    const onchange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler=(e)=>{
        e.preventDefault();
    }
    return (
        <>
            <form className='form'>
                <input disabled={disable} className="inp1 noborder" type="text" name="name" value={data.name} onChange={onchange} />

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