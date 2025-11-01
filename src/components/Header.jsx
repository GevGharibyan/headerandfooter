import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="w-full h-10 flex justify-around  items-center bg-blue-400 ">
            <div>
                <Link to={"/"}>Logo</Link>
            </div>
            <nav>
                <ul className="flex gap-5">
                    <li><Link to={"/"}> Home</Link></li>
                    <li><Link to={"/shop"}>Shop</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
} 