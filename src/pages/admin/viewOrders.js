import axios from 'axios'
import React, { useEffect, useState } from 'react'
const viewOrders = () => {
  const [Data, setData] = useState([])
  const [loaded, setloaded] = useState(false)
  const loadOrders = async () => {
    if (!loaded) {
      let response = await axios.get('/api/getOrders')
      setData(response.data)
      setloaded(true)
      console.log(Data)
    }

  }

  const orderReturned = async (e) => {
    let dataO = await data(e)
    await axios.get('/api/orderReturned', dataO)
  }

  const orderDelivered = async (e) => {
    let dataO = await data(e)
    await axios.get('/api/orderDelivered', dataO)
  }

  const deleteOrder = async (e) => {
    console.log(e.target.parentNode.id)
    await axios.get('/api/deleteOrder', JSON.stringify({id: e.target.parentNode.id}))
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
    const userOffset = new Date().getTimezoneOffset()*60*1000;
    const utcDate = new Date(dateCurrent.getTime() + userOffset);
    console.log(dateCurrent)
    return(dateToTime(dateCurrent))
  }

  const data  = (e) => {
    return {id: e.target.parentNode.id}
  }

  useEffect(() => {
    loadOrders()
  }, [])
  
  return (
    <div>
      <center>
        <h1> Admin Orders View Page </h1>
        <br />
        {!loaded && <h1>Loading...</h1>}
        {loaded && Data != [] &&
          Data.map((doc, i) => {
            return (
              <div>
                <h1>Book: {doc.bookName}</h1>
                <h3>Address: {doc.address}</h3>
                <h3>Days To Be Rented: {doc.days}</h3>
                <h4>Date Rent: { 
                
                  
                  convertDate(doc.dateRentOut)
                
                
                }</h4>
                <div>Time Left: </div>
              </div>
            )
          })
        }
      </center>
    </div>
  )
}
export default viewOrders