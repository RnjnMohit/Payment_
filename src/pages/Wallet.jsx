import React, { useState, useEffect } from 'react';
import './wallet.css';
import { FaWallet } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";

const Wallet = () => {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        // Use a more secure method to get the JWT token (e.g., from HttpOnly cookie)
        const token = document.cookie.split('=')[1];

        const response = await fetch("http://localhost:3000/account/updateAccount", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        console.log(response);
        const accountData = await response.json();
        setBalance(accountData.balance);
        console.log(accountData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className='big-box'>
      <div className="wallet">
        <h1 className="h1">Wallet</h1>
        <FaWallet className='wallet-icon' />
      </div>
      <div className="box">
        <div className="paisa">
          <p id='money-ref'>Available Amount:</p>
          <p id='money'>${balance}<br /></p>
          <p id='name'>Mohit Ranjan</p>
          <button id='money-add'>Add To Wallet</button>
        </div>
        <div className="total-trans">
          <p id='trans'>Total Transaction:<br />20<br /><SiBitcoinsv className='price-icon'/></p> 
          <p id='send'>10<br />Send</p>
          <p id='recieved'>10<br />Received</p>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
