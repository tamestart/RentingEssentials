import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Book from '@/components/Book'
// import '@/styles/globals.css'
// import '@/styles/Index.module.css'
import styles from "@/components/Index.module.css"


export default function Home() {
  const [DataLoaded, setDataLoaded] = useState(false)
  const [Data, setData] = useState(false)
  const loadData = async () => {
    if (DataLoaded == false) {
      const response = await axios.get('/api/getBooks');
      const data = response.data.books
      setData(data)
      // console.log(data)
      setDataLoaded(true)
      if (localStorage.getItem('orders') == null) {
        localStorage.setItem('orders', JSON.stringify([]))
      }
    } 
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
      <center id='main'>
        <div style={{ fontFamily:'sans-serif' }}>
          <div id='heading'>
            <h1 >Renting Essentials</h1>
            {/* <br/> */}
            <hr></hr>
          </div>
          
          <br />


          {Data != false && Data !== [] &&
          
          Data.map((book, i) => {
            return (
            <div key={i} className={i} id={styles.container}>
              <Book doc={Data[i]}/>
              <br />
              <br />
            </div>
            )
            

          })}
          
          {Data === false && <h1>Loading...</h1>}
          
        </div>
        <br />
        <br />
        
          <button onClick={changeAddress} id={styles.rentNowButton}>Change address</button>
          {/* <button  id={styles.rentNowButton}> <a href='/viewOrders'>View Orders</a></button> */}
      </center>
    </>
  )
}
