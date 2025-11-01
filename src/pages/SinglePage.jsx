import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function SinglePage() {
    const { id } = useParams()

    const [prod, setProd] = useState(null)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(res => setProd(res));
    }, [id])


    if (!prod) {
        return (
            <div className="flex min-w-full min-h-screen items-center justify-center">
                <div className="flex flex-row gap-2 ">
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center p-10">
            <h2 className="text-3xl ">{prod.title}</h2>
            <p>{prod.category}</p>
            <div className="w-full flex gap-5 flex-wrap justify-center items-center">
                {prod.images.map((img, index) => (
                    <img alt=""
                        key={index}
                        src={img}
                        className="w-48 h-auto rounded shadow" />
                ))}
              
            </div> 
             <h3 className="text-4xl">Raiting Is: {prod.rating}</h3>
        </div>)

}



