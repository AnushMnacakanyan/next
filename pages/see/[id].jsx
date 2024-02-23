import axios from "axios";
import { useState } from "react";

export default function See({product}) {
    const [prod,setProd]=useState([...product])
    return (<div className="div1">        
      {
        prod?.map(elm=>{
            return(<div className="div1-1">
                <h3>{elm.title}</h3>
                <p>{elm.description}</p>
                <p>{elm.price}</p>
                <p>{elm.category.name}</p>
                <img src={elm.category.image} alt="" width={150} />

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