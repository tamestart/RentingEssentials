import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'

const viewBook = () => {
    const router = useRouter()
    const {bookId} = router.query
    const [BodyC, setBodyC] = useState("")
    // setBookIda(window.location.href.split('/')[4])
    console.log(bookId)
    const [Data, setData] = useState(false)
    const bookInfo = async () => {
      // response = ""
      let response = await fetch('/api/bookData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: BodyC
      });
      console.log(response.body)
      setData(response.body)
    }

    
    // setData(response)

    const readyBody = () => {
      setBodyC(JSON.stringify({
        id: window.location.href.split('/')[4]
      }))
      // bookInfo();
    }
    useEffect(() => {
      // setTimeout(() => {
        // setBookIda(window.location.href.split('/')[4])
      // }, 3000)
      // setTimeout(readyBody, 4000)
      // setTimeout(bookInfo, 4500)
    }, [])
    
  return (
    <div>viewBook
      <br />
      <button onClick={readyBody}>Ready Data</button>
      <br />
      <button onClick={bookInfo}>Load Data</button>
    </div>
    
  )
}

export default viewBook