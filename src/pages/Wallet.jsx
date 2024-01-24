import React, { useState, useEffect } from 'react';
import './wallet.css';
import { FaWallet } from 'react-icons/fa';
import { SiBitcoinsv } from 'react-icons/si';

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [upi,setUpi] = useState('');

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const token = document.cookie.split('=')[1];

        const [accountResponse, userDetailsResponse] = await Promise.all([
          fetch('http://localhost:3000/account/updateAccount', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }),
          fetch('http://localhost:3000/user/userDetails', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }),
        ]);

        if (!accountResponse.ok || !userDetailsResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const accountData = await accountResponse.json();
        const userData = await userDetailsResponse.json();
        console.log(accountData);
        console.log(userData);  
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setUpi(accountData.upi); 
        setBalance(accountData.balance);
        
        // Additional data processing if needed from userDetailsResponse

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="big-box">
      <div className="wallet">
        <h1 className="h1">Wallet</h1>
        <FaWallet className="wallet-icon" />
      </div>
      <div className="box">
        <div className="paisa">
          <p id="money-ref">Available Amount:</p>
          <p id="money">${balance}<br /></p>
          <p id='upi'>UPI: {upi}</p>
          <p id="name">{firstName} {lastName}</p>
          <button id="money-add">Pay Now</button>
        </div>
        <div className="total-trans">
          <p id="trans">Total Transaction:<br />20<br /><SiBitcoinsv className="price-icon" /></p>
          <p id="send">10🔴<br />Send</p>
        </div>
        <div>
          <p id='received'>10🟢<br />Received</p>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
