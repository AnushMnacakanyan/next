import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, categories }) {
  const [product, setProduct] = useState([...products])
  const [category,setCategory]=useState([...categories])
  const deleteprod = (id) => {
    setProduct([...product.filter(elm => elm.id != id)])
  }
  const deletecat = (id) => {
    setCategory([...category.filter(elm => elm.id != id)])
  }
  return (
    <div className="div">
      <div className="div1">
        {product?.map(elm => {
          return (<div key={elm.id} className="div1-1" >
            <h3>{elm.title}</h3>
            <p>{elm.price}</p>
            <p>{elm.description}</p>
            {elm.images?.map(elm => {
              return (<img src={elm} width={150} alt=""></img>)
            })}
            <button onClick={()=>deleteprod(elm.id)}>delete</button>
          </div>)
        })}
      </div>
      <hr></hr>
      <div className="div2">
        {category.map(elm => {
          return (<div  className="div2-1" key={elm.id}>
            <h3>{elm.name}</h3>
            <Link href={"/see/" + elm.id}>see category</Link>
            <img src={elm.image} width={150}></img>
            <button onClick={()=>deletecat(elm.id)}>delete</button>

          </div>)
        })}
      </div>

    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get("https://api.escuelajs.co/api/v1/products")
  const cat = await axios.get("https://api.escuelajs.co/api/v1/categories")
  console.log("===>", data, cat);
  return {
    props: {
      products: data,
      categories: cat.data
    }
  }
}
