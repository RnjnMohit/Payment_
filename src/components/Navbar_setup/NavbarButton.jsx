export default function NavbarButton({ name, custom }){

    const defaultClass = "mx-4 my-10 text-orange-800 font-bold text-lg font-sans";
    const combinedClass=`${defaultClass} ${custom}`;

    return <>
        <button className={combinedClass} >{name}</button>
    </>
}