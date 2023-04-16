
import OrderSnippet from '@/components/orderSnippet'
import React, { useEffect, useState } from 'react'



const viewOrders = () => {
    const [Data, setData] = useState("")
    const getIds = () => {
        let dataO = JSON.parse(localStorage.getItem("orders"))
        setData(dataO)
    }
    useEffect(() => {
        getIds()

    }, [])
    
    return (
        <div>
            {Data != "" &&
            
                <div>   
                    {Data.map((id, i) => {
                        return (
                            <div key={i}>
                                <OrderSnippet id={id}/>
                                <br />
                            </div>
                        )
                    })}
                </div>
            
            }
        </div>
        
    )
}

export default viewOrders