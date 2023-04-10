import axios from 'axios'
import React, { useState } from 'react'

 const newBook = () => {
    const [Title, setTitle] = useState("")
    const [Price, setPrice] = useState("")
    const [Description, setDescription] = useState("")
    const [Authour, setAuthour] = useState("")
    const [Image, setImage] = useState(null)
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
    const onImageChange = async (formData) => {
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
              console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            },
          };
      
          const response = await axios.post('/api/bookImageUpload', formData, config);
      
          console.log('response', response.data);
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
        alert("New Book Created!")
        const bodyImage = new FormData();
        // console.log("file", image)
        bodyImage.append("file", Image); 
        const config = {
            headers: { 'content-type': 'multipart/form-data' },
            onUploadProgress: (event) => {
              console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
            },
          };
      
        //   const response = await axios.post('/api/bookImageUpload', bodyImage, config);
      
          // console.log('response', response.data); 
    }
  return (
    <div>
        <form onSubmit={uploadBook} encType="multipart/form-data">
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
            {/* <br />
            <br />
            <input type="file" onChange={onImageChange} required placeholder='Upload Image' name='theFiles'/> */}
            <br />
            <br />
            <button type="submit">Create New Book</button>
        </form>
    </div>
  )
}

export default newBook