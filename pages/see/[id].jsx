import axios from "axios";
import { useState } from "react";

export default function See({product}) {
    const [prod,setProd]=useState([...product])
    const deleteprod=(id)=>{
        setProd(...prod.filter(elm=>elm.id!=id))
    }

    return (<div className="div1">        
      {
        prod?.map(elm=>{
            return(<div className="div1-1">
                <h3>{elm.title}</h3>
                <p>{elm.description}</p>
                <p>{elm.price}</p>
                <p>{elm.category.name}</p>
                <img src={elm.category.image} alt="" width={150} />
                <button onClick={()=> deleteprod(elm.id)}>delete</button>

            </div>)
        })
      }
    </div>)
}

export const getServerSideProps=async({params})=>{
    const {data}=await axios.get(`https://api.escuelajs.co/api/v1/categories/${params.id}/products`)
    console.log("===>",data);
    return{
        props:{
            product:data
        }
    }
}