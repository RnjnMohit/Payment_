import React from 'react'
import WalletTabs from './WalletTabs'

const Wallet = () => {
  return (
    <>
      <div >
        <div className='flex justify-left'>
          <input placeholder='Search' className=' w-96 p-3 rounded-lg my-10 shadow-xl ml-40 bg-stone-50'></input>
          <button className=' bg-blue-800 w- text-stone-100 rounded-xl hover:text-blue-800 hover:bg-blue-100 transition duration-150 my-10 p-2 ml-10'>Alerts</button>
        </div>
        <div className='flex '>
          <WalletTabs custom={"ml-40 w-2/5 px-0 "} name="Amount" amount="$500" />
          <WalletTabs custom={"ml-10 w-1/4 px-0 bg-blue-800 text-stone-100"} name="Balance" amount="$1200" />
        </div>
        <div className='flex my-10'>
          <WalletTabs custom={"ml-40 w-80 px-0 text-red-600"} name="Debited" amount="$200" />
          <WalletTabs custom={"ml-10 w-80 px-0 text-green-600"} name="Credited" amount="$700" />
          <WalletTabs custom={"ml-10 w-80 px-0"} name="Savings" amount="$700" />
        </div>
      </div>   
    </>
  )
}

export default Wallet