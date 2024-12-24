import Cabeto from "./Cabeto";

function Header(){
    return(
        <header className="w-full flex text-white py-10 justify-around">
            <div className="flex items-center space-x-2">
            <Cabeto/>
            <span className="font-semibold">CABETO</span>

            </div>
        <a href="">
            GitHub
        </a>
        </header>
    )
}
export default Header