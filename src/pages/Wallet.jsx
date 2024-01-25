import React, { useState, useEffect } from 'react';
import './wallet.css';
import { FaWallet } from 'react-icons/fa';
import { SiBitcoinsv } from 'react-icons/si';
import toast from "react-hot-toast";

const Wallet = (props) => {
  const [balance, setBalance] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [upi, setUpi] = useState('');
  const [transactions, setTransactions] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const fetchSearchResults = async () => {
    try {
      const searchResponse = await fetch(`http://localhost:3000/search/searchAccount?searchTerm=${searchTerm}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!searchResponse.ok) {
        throw new Error('Failed to fetch search results');
      }

      const searchData = await searchResponse.json();
      if(searchData.searchResults.length===0){
        console.log('Account Not Found');
        toast.error('Account Not Found');
      }
      toast.success('Account Found');
      console.log(searchData);
      setResults(searchData.searchResults);
    } catch (error) {
      console.error('Error fetching search results:', error.message);
    }
  };

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

        const [accountData, userData] = await Promise.all([
          accountResponse.json(),
          userDetailsResponse.json(),
        ]);

        console.log(accountData);
        console.log(userData);
        setFirstName(userData.firstName);
        setLastName(userData.lastName);
        setUpi(accountData.upi);
        setBalance(accountData.balance);
        setTransactions(accountData.transactions);

        // Additional data processing if needed from userDetailsResponse

      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchBalance();
  }, [searchTerm]);

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
          <div>
            <button id="money-add">Pay Now</button>
            <input id='search'
              type='text'
              placeholder='UPI or Account Number'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button id='acc-search' onClick={fetchSearchResults}>🔍</button>
            <ul>
              {results.map((result) => (
                <li key={result._id}>
                  UPI: {result.upi}, Account Number: {result.acNumber}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="total-trans">
          <p id="trans">Total Transaction:<br />{transactions}<br /><SiBitcoinsv className="price-icon" /></p>
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
