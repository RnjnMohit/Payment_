export default function Footer(){
    return<>
        <div className="bg-slate-900 pt-4 pb-4 text-stone-100">
            <div className="flex justify-between align-middle mb-4">
                <div className="">
                    <button className=" ml-52 mr-7 text-xl">About Us</button>
                    <button className="text-xl">Support</button>
                </div>
                <div className="flex space-x-3 mr-52">
                    <div>Insta</div>
                    <div>Fb</div>
                    <div>Twitter</div>
                    <div>LinkedIn</div>
                </div>
            </div>
            <hr></hr>
            <div className="flex justify-between align-middle mt-4">
                <div className="">
                    <p className="ml-28">Copyright © 2024 CredPay. All Rights Reserved</p>
                </div>
                <div className="flex space-x-3 mr-28">
                    <button className=" ml-7 mr-7 text-xl">Terms</button>
                    <button className="mr-7 text-xl">Privacy</button>
                </div>
            </div>
        </div>
    </>
}