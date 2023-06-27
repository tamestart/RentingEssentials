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
  const [Token, setToken] = useState("")


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

  const settoken = () => {
    setToken(localStorage.getItem("token"))
  }

  useEffect(() => {
    loadData();
    settoken()
  }, [])

  return (
    <>
      <Head>
        <title>Renting Essentials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <center id='main'>
        <div style={{ fontFamily: 'sans-serif' }}>
          <div id='heading' style={{ display: 'flex', justifyContent: 'space-around', width: '90vw', color: 'white', backgroundColor: 'black', paddingLeft: '3vw', paddingRight: '3vw', borderRadius: '7px' }}>
            <h1 >Renting Essentials</h1>
            {Token == null &&
              <div>
                <h2 ><Link href='/Login' style={{ textDecoration: 'none', color: 'whitesmoke' }}>Login</Link></h2>
                <h2 ><Link href='/Register' style={{ textDecoration: 'none', color: 'whitesmoke' }}>Register</Link></h2>
              </div>
            }
            {Token &&
              <div>
                <h2 ><a href='/Logout' style={{ textDecoration: 'none', color: 'whitesmoke' }}>Logout</a></h2>
                <h2 ><a href='/viewOrders' style={{ textDecoration: 'none', color: 'whitesmoke' }}>View My Orders</a></h2>
              </div>

            }
          </div>
          <br />
          <div id="wrapper-1a">
            {Data != false && Data !== [] &&
              Data.map((book, i) => {
                return (
                  <div key={i} className={i} id={styles.container}>
                    <Book doc={Data[i]} />
                    <br />
                    <br />
                  </div>
                )
              })}
            {Data === false && <h1>Loading...</h1>}
          </div>
        </div>
        <br />
        <br />
        <button onClick={changeAddress} id={styles.rentNowButton}>Change address</button>
      </center >
    </>
  )
}
