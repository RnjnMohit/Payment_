export default function WalletTabs({ name, amount, custom }){
    
    const cssclass = "flex justify-between p-5 rounded-lg shadow";
    const combinedClass = ` ${cssclass} + ${custom}`
    
    return <>
        <div className={combinedClass} >
            <p className="px-10 ">
                {name}
            </p>
            <p className="px-10">
                {amount}   
            </p>
        </div>
    </>
}