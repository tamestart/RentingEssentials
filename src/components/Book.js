import axios from 'axios'
import React, { useEffect } from 'react'
import styles from './Index.module.css'
const Book = ({doc}) => {

  const askFlat = async () => {
    if (localStorage.getItem("flat") == null) {
      let flat = await prompt("Please enter your flat number for delivery. (Refresh to cancel)")
      if (flat == null || flat == "") {
        await askFlat()
      }
      localStorage.setItem("flat", flat)
      return flat
    } else {
      return localStorage.getItem("flat")
    
    }

  }

    // let doc = docO
    // console.log(doc.bookName)
    const handleOrder = async(e) => {
        let index = e.target.parentNode.className
    let DataOfIndex = doc
    if (localStorage.getItem("flat") == null ) { 
      await alert("Thank you for choosing us to rent your books, by clicking OK you will be renting the book " + DataOfIndex.name + " for ₹" + DataOfIndex.hourlyRate + " per day.")
    } else {
      await alert(`Thank you for choosing us to rent your books, by clicking OK you will be renting the book ${DataOfIndex.name} for ₹${DataOfIndex.hourlyRate} per day. This book will be delivered to flat ${localStorage.getItem('flat')} at Ahad Opus.`)
    }
    let flat;
    flat = await askFlat();

    let days = await prompt("Please enter the number of days you want to rent the book for. (Maximum 7)")
    // console.log(days)
    
    
    let orderBody = {
      id: DataOfIndex._id,
      book: DataOfIndex.name,
      noOfDays: days,
      address: flat
  }
    // console.log(orderBody)
    const response = await axios.post('/api/newOrder', orderBody).then((res) => {
      // console.log(res.data)
    })




    alert(`The Book "${DataOfIndex.name}" has been successfully ordered. Please note a few things:
    1. The Book Will Be delivered to ${flat}, Ahad Opus by 7 p.m. \n
    2. Any Loss Or Damage of the book will lead to a fine of the full cost of the book\n
    3. The book will be collected ${days} days after the delivery \n
    4. A fine of ₹3 per day will be collected for late submissions \n
    5. Payment will be collected at the collection time in the for of cash \n
    Your total payment is for ₹${parseInt(days) * parseInt(DataOfIndex.hourlyRate)}, which we will collect on return of the book. Thanks for choosing us today! We hope you had a pleasant experience.`)
    
    }
    useEffect(() => {
      console.log(localStorage.getItem("flat"))
    
     
    }, [])
    
  return (
    <div>
        {doc.inStock &&
    
          <div id={styles.rect1}>
            <img id={styles.imgSrc} src='/redbook.png'></img>
            <h1 id={styles.heading}>{doc.name} By {doc.authour}</h1>
            <h3 id={styles.description}>{doc.description}</h3>
            <div style={{display:'flex', justifyContent: 'space-evenly'}}>
            <h4>₹{doc.hourlyRate}/Day</h4>       
            <button onClick={handleOrder} id={styles.rentNowButton}>Rent Now</button>
            </div>

          </div>
          
        }

    </div>

   
  )
}

export default Book