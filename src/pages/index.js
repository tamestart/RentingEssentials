import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'



export default function Home() {
  const [DataLoaded, setDataLoaded] = useState(false)
  const [Data, setData] = useState(false)
  const loadData = async () => {
    if (DataLoaded == false) {
      const response = await axios.get('/api/getBooks');
      const data = response.data.books
      setData(data)
      console.log(data)
      setDataLoaded(true)
    }
    
    
    
  }
  let final = [];

  // if ( Data) {
  //   for (let  book of Data) {
  //     console.log(Data[1].children())
  //     final.push(
  //     <div>
  //       <h1>{book.name}</h1>
  //       <br />
  //       <h3>{book.description}!</h3>
  //       <br/>
  //       <h3>{book.hourlyRate}</h3>
  //       <h4>/Day</h4>
  //       <button><a href={'/view/' + book._id}>Rent Now!</a></button>
  //     </div>);  
  //   }
  // }
  const handleOrder = async (e) =>  {
    let index = e.target.parentNode.className
    let DataOfIndex = Data[index]
    if (localStorage.getItem("flat") == null ) {
      await alert("Thank you for choosing us to rent your books, by clicking OK you will be renting the book " + DataOfIndex.name + " for ₹" + DataOfIndex.hourlyRate + " per day.")
    } else {
      await alert(`Thank you for choosing us to rent your books, by clicking OK you will be renting the book ${DataOfIndex.name} for ₹${DataOfIndex.hourlyRate} per day. This book will be delivered to flat ${localStorage.getItem('flat')} at Ahad Opus.`)
    }
    let flat;
    if (localStorage.getItem("flat") == null) {
      flat = await prompt("Please enter your flat number for delivery.")
      console.log(flat)
      localStorage.setItem("flat", flat)
    } else {
      flat  = localStorage.getItem("flat")
      console.log(flat)
    }

    let days = await prompt("Please enter the number of days you want to rent the book for. (Maximum 7)")
    console.log(days)
    
    
    let orderBody = {
      id: DataOfIndex._id,
      book: DataOfIndex.name,
      noOfDays: days,
      address: flat
  }
    console.log(orderBody)
    const response = await axios.post('/api/newOrder', orderBody).then((res) => {
      console.log(res.data)
    })




    alert(`The Book "${DataOfIndex.name}" has been successfully ordered. Please note a few things:
    1. The Book Will Be delivered to ${flat}, Ahad Opus by 7 p.m. \n
    2. Any Loss Or Damage of the book will lead to a fine of the full cost of the book\n
    3. The book will be collected ${days} days after the delivery \n
    4. A fine of ₹3 per day will be collected for late submissions \n
    5. Payment will be collected at the collection time in the for of cash \n
    Your total payment is for ₹${parseInt(days) * parseInt(DataOfIndex.hourlyRate)}, which we will collect on return of the book. Thanks for choosing us today! We hope you had a pleasant experience.`)
    
  } 

  const changeAddress = (e) => {
    let newFlat = prompt('Please Enter Your new Flat.')
    localStorage.setItem('flat', newFlat)
  }
  useEffect(() => {
    loadData();
   }, [])

  return (
    <>
      <Head>
        <title>Renting Essentials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <center>
        <div>
          <h1>Renting Essentials</h1>
          <br />


          {Data != false && Data !== [] &&
          
          Data.map((book, i) => {
            {console.log(book)}
            {console.log(i)}
            {console.log(Data[i].name)}
            
            return (<div key={i} className={i}>
              <h1>{Data[i].name}</h1>
              <h3>{Data[i].description}</h3>
              <h4>₹{Data[i].hourlyRate}/Day</h4>
              
              <button onClick={handleOrder}>Rent Now</button>
            </div>)
            

          })}
          
          
          
          {console.log(Data)}
          {Data === false && <h1>Loading...</h1>}
          
        </div>
        <br />
        <br />
        
          <button onClick={changeAddress}>Change address</button>
      </center>
    </>
  )
}
