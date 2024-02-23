import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"

export default function AddProdunct({ categories }) {
    const [category, setCategory] = useState([...categories])
    const { register, reset, handleSubmit, formState: { errors } } = useForm()
    const save = (data) => {
        setCategory([...category, { ...data, id: Date.now() }])
        reset()
    }
    console.log(category);
    return (<div className="div3">
        <h1>Add Category</h1>
        <form onSubmit={handleSubmit(save)} >
            <input type="text" placeholder="Enter name" {
               ...register("name",{
                required:"Enter name"
               }) 
            } />
            {errors.name && <p>{errors.name.message}</p>}
            <input placeholder="Enter image URL" {
                ...register("image",{
                    required:"Enter image  URL"
                })
            } />
            {errors.image && <p>{errors.image.message}</p>}

            <button className="save">save</button>
        </form>
    </div>)
}
export const getStaticProps = async () => {
    const { data } = await axios.get("https://api.escuelajs.co/api/v1/categories")
    return {
        props: {
            categories: data
        }
    }
}