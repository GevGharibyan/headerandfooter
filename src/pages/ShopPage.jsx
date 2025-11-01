import { useEffect, useState } from "react";
import Card from "../components/Card";

function Shop() {
    const [prods,setProds] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(res=>setProds(res.products));
    },[])
  return (
    <div className="App">
     <div className="flex max-w-[1440px] gap-5 min-h-screen flex-wrap mx-auto justify-center items-center">
        {
            prods.map((e)=>{
                return(
                <Card imgUrl={e.images[0]} key={e.id} id={e.id } title={e.title} price={e.price}/>
                )
            })
        }
     </div>
    </div>
  );
}

export default Shop;
