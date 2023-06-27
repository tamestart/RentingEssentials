import axios from 'axios'
import React, { useState } from 'react'

const OrderSnippet = ({ obj }) => {
  const [CurrentDataDeletion, setCurrentDataDeleteion] = useState("")


  const handleDelete = async (e) => {
    e.preventDefault()
    let deleteId = e.target.parentNode.className
    console.log(deleteId)
    setCurrentDataDeleteion(deleteId)
    console.log(CurrentDataDeletion)
    // await axios.post('/api/deleteOrder', {
    // id: CurrentDataDeletion
    // })

  }


  const dateToTime = date => date.toLocaleString('en-GB', {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: 'numeric',
    minute: 'numeric'
  });

  const convertDate = (dateEpoch) => {
    let dateCurrent = new Date(dateEpoch);
    const userOffset = new Date().getTimezoneOffset() * 60 * 1000;
    const utcDate = new Date(dateCurrent.getTime() + userOffset);
    // console.log(dateCurrent)
    return (dateToTime(dateCurrent))
  }

  return (
    <div style={{ borderRadius: '19px', maxWidth: "400px", fontFamily: 'sans-serif', backgroundColor: '#5cbbff', padding: '20px' }} className={obj._id}>
      <h2>Order Id <b>{obj._id}</b></h2>
      <h1>{obj.bookName}</h1>
      <h2>Book Rented Out At {convertDate(obj.dateRentOut)}</h2>
      <form className={obj._id} onSubmit={handleDelete}>
        <button style={{ padding: '0.5rem', backgroundColor: '#c42eff', borderRadius: '10px', cursor: 'pointer', border: 'none' }} type='submit' >Delete Order</button>
      </form>


    </div>
  )
}

export default OrderSnippet