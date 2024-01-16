export default function Info(){
    return <>
        <div className=" flex my-32 justify-between align-middle font-sans">
            <div className="ml-10">
                <p className=" text-blue-500 font-bold text-2xl">Trusted By Over 4M Customers</p>
                <p className="text-8xl text-blue-900 font-bold">Pay Anyone,</p>
                <p className="text-8xl text-blue-900 font-bold mb-5">Anywhere</p>
                <p className=" w-2/5 text-blue-950 text-2xl">Quickly and easily send, receive and request money online with _______ Money Transfer App. Get a customised solution to fit your business needs.</p>
                <div className="flex mt-5">
                    <button className="bg-blue-800 text-stone-100 rounded-xl p-4 px-6 my-0 ml-0 hover:text-blue-800 hover:bg-blue-100 transition duration-150 flex justify-between align-middle border border-blue-800 mr-5" >Open a free account</button>
                    <button className="hover:bg-blue-800 hover:text-stone-100 rounded-xl p-4 px-6 my-0 ml-0 text-blue-800 bg-blue-100 transition duration-150 flex justify-between align-middle border border-blue-800 mr-5">See how it works</button>
                </div>
            </div>
            
            <div className=" h-auto w-3/5 mx-40 align-middle justify-center flex-row shadow-2xl rounded-2xl bg-slate-100 ">
                <div className="bg-blue-200 h-1/5 mt-4 mx-10 w-80 p-5 rounded-2xl align-middle justify-center flex text-2xl">
                    Amount
                </div>
                <div className="mx-10 text-xl mt-5">
                    <p className="my-3">Show Calculation</p>
                    <p className="my-3">--</p>
                    <p className="my-3"> Your Currency </p>
                    <p className="my-3"> -- </p>
                    <p className="my-3"> Converted Currency </p>
                    <p className="my-3"> -- </p>
                </div>
                <div className="bg-blue-200 h-1/5 mt-4 mx-10 w-80 p-5 rounded-2xl align-middle justify-center flex text-2xl">
                    Wallet
                </div>
            </div>
            
        </div>
    </>
}