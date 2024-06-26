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
  const [ payNow, setPayNow ] = useState(true);
  const [accountData, setAccountData] = useState('');
  const [fupi, setFupi] = useState('');


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
      if (searchData.searchResults.length === 0) {
        console.log('Account Not Found');
        toast.error('Account Not Found');
      }
      toast.success('Account Found');
      setResults(searchData.searchResults);
      console.log(results);
      if (results.length > 0) {
        const firstResult = results[0];
        const upi = firstResult.upi;
        console.log(upi);
      }
      setFupi(upi);
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

        setAccountData(accountData);
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

  const handlePayment = async () => {
    const amount = document.getElementById('amount').value;
    // const receiverUpi = results.upi;
    // // const senderUpi = document.getElementById('senderUpi').value;
    try {
      const response = await fetch('http://localhost:3000/transaction/createTransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          receiver: { receiver_upi: fupi },
          sender: { sender_upi: accountData.upi }
        })
      });

      const data = await response.json();
      console.log(data);
      if (response.status==200) {
        toast.success("Payment Successful");

      } else if(response.status===402){
        toast.error('Insufficient Balance');
      }
      else if(response.status===404 || response.status===400 || response.status===500) {
        toast.error(data.error || "Payment Not Successful");
      }
    } catch (error) {
      console.error(error);
      toast.error("Payment Not Successful");
    }
  }

  function handlepaynow() {
    const box = document.getElementById('paynow');
    if(payNow){
      box.showModal();
    } else {
      box.close();
    }
  }

  function handleClosePayNow() {
    const box = document.getElementById('paynow');
    box.close();
  }

  return (
    <>
    <dialog id="paynow" >
      <div className='m-10'>
        <input type="number" placeholder='Amount' id='amount'/>
        {/* <input type="text" placeholder='Reciever Upi Address' id='receiverUpi'/> */}
        {/* <input type="text" placeholder='Sender Upi Address' id='senderUpi' /> */}
        <div className='flex justify-evenly'>
        <button className=' bg-blue-800 text-stone-100 rounded-xl px-4 py-2 hover:text-blue-800 hover:bg-blue-100 transition duration-150' onClick={handlePayment}>Pay</button>
        <button className=' bg-blue-800 text-stone-100 rounded-xl px-4 py-2 hover:text-blue-800 hover:bg-blue-100 transition duration-150' onClick={handleClosePayNow} >Close</button>
        </div>
      </div>
    </dialog>
    <div className="big-box">
      <div id='dibba' className="wallet">
        <h1 className="h1">WALLET</h1>
        <FaWallet className="wallet-icon" />
      </div>
      <div className="box">
        <div className="paisa">
          <p id="money-ref">Available Amount:</p>
          <p id="money">${balance}<br /></p>
          <p id='upi'>UPI: {upi}</p>
          <p id="name">{firstName} {lastName}</p>
          <div>
            <button id="money-add" onClick={handlePayment}>Pay Now</button>
            <input id='search'
              type='text'
              placeholder='UPI or Account Number'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button id='acc-search' onClick={fetchSearchResults}>🔍</button>

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
      {results.length && <div className='box paisa text-stone-100 justify-evenly pt-28 to-blue-900'>
        {results.map((result) => (
          <p key={result._id}>
            UPI: {result.upi},
            <br></br>
            <br></br>
            Account Number: {result.acNumber}
          </p>
        ))}
        <div>
          <button className='pt-2 bg-blue-900 p-2' onClick={handlepaynow}>Pay Now</button>
        </div>
      </div>}
    </div>
    </>
  );
};

export default Wallet;
