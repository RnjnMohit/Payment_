import React from 'react'
import './wallet.css';
import { FaWallet } from "react-icons/fa";
import { SiBitcoinsv } from "react-icons/si";

const Wallet = () => {
  return (
    <div class='big-box'>
      <div class="wallet">
        <h1 class="h1">Wallet</h1>
        <FaWallet className='wallet-icon' />
      </div>
      <div class="box">
        <div class="paisa">
          <p id='money-ref'>Available Amount:</p>
          <p id='money'>$500<br /></p>
          <p id='name'>Mohit Ranjan</p>
        </div>
        <div class="total-trans">
          <p id='trans'>Total Transaction:<br />20<br /><SiBitcoinsv className='price-icon'/></p> 
          <p id='send'>10<br />Send</p>
          <p id='recieved'>10<br />Received</p>
        </div>
      </div>
    </div>
  )
}

export default Wallet;