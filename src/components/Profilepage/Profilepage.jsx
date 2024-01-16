import React from 'react'
import './Profilepage.css'
import profile from '../../assets/profile.jpg'
import User from './User'
const Profilepage = () => {
    return (
        <>
            <section className='topbg'>

            </section>
            <section className="details">
                <div className="photobar">
                    <span><a href="#">User Details</a></span>
                    <div className="profileImg">
                        <img src={profile} alt="" />
                    </div>
                    <span><a href="#">Account Details</a></span>
                </div>
                <User/>
            </section>
        </>
    )
}

export default Profilepage