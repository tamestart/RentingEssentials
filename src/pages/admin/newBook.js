import axios from 'axios'
import React, { useState } from 'react'

 const newBook = () => {
    const [Title, setTitle] = useState("")
    const [Price, setPrice] = useState("")
    const [Description, setDescription] = useState("")
    const [Authour, setAuthour] = useState("")
    const onTitleChange = (e) => {
        setTitle(e.target.value)
    } 
    const onDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const onPriceChange = (e) => {
        setPrice(e.target.value)
    }
    const onAuthourChange = (e) => {
        setAuthour(e.target.value)
    }
    const uploadBook = async (e) => {
        e.preventDefault()
        let body = JSON.stringify({
            title: Title,
            Description,
            Price,
            Authour
        })
        await axios.post('/api/newBook', {body}).then((res) => {
            console.log(res.data)
        })
    }
  return (
    <div>
        <form onSubmit={uploadBook}>
            <input type="text" onChange={onTitleChange} required placeholder='Title'/>
            <br />
            <br />
            <input type="number" onChange={onPriceChange} required placeholder='price'/>
            <br />
            <br />
            <input type="text" onChange={onDescriptionChange} required placeholder='Description'/>
            <br />
            <br />
            <input type="text" onChange={onAuthourChange} required placeholder='Authour'/>
            <br />
            <br />
            <button type="submit">Create New Book</button>
        </form>
    </div>
  )
}

export default newBook