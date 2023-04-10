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
                <div>
                  <button>Delete Order</button>
                  <button>Book Given Order</button>
                  <button>Book Returned Order</button>
                </div>
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