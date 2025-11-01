import { Link } from "react-router-dom";

export default function Card({imgUrl,title,price,id}){
return(
    <Link to={`/shop/${id}`}>
    <div className="w-[300px] h-[400px] flex flex-col text-center shadow-2xl">
        <img src={imgUrl} alt="" />
        <span>{title}</span>
        <span>{price}$</span>
    </div>
    </Link>
)
} 