import React from 'react'

const OrderSnippet = ({id}) => {
    const handleDelete = (e) => {
        let deleteId = e.target.parentNode.className
        console.log(deleteId) 
    }
  return (
    <div style={{ display: 'flex', backgroundColor: rgba(46, 255, 205, 24), borderRadius: '19px', justifyContent: 'space-evenly', maxWidth: "700px" }} className={id}>
        <h3>Order Id <b>{id}</b></h3>
        <button style={{ padding: '0.5rem', backgroundColor: '#5A7FFF6B', borderRadius: '10px' }} onClick={handleDelete}>Delete Order</button>
        
    </div>
  )
}

export default OrderSnippet