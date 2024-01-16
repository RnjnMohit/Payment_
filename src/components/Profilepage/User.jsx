import React from 'react'
import './user.css'
const User = () => {
    return (
        <>
            <form className='form'>
                <input disabled={'true'} className='inp1' type="text" value={"Pranav Gaur"} />

                <label >
                    <p>Email:</p>
                    <input disabled={'true'} className='inp2' type="email" value={"gasjdaj@gmail.com"} />
                </label>
                <label >
                    <p>Phone:</p>
                    <input disabled={'true'} className='inp3' type="number" value={67217313983} />
                </label>
                <div className="btns">

                    <button type="submit" className="Addbtn hide">Add</button>
                    <button className='editbtn'>Edit</button>
                </div>
            </form>

        </>
    )
}

export default User