import OrderSnippet from '@/components/OrderSnippet'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const viewOrders = () => {
    const [Data, setData] = useState("")
    const getIds = async () => {
        await axios.post("/api/getUserOrders", { token: localStorage.getItem("token") }).then((res) => {
            setData(res.data.Orders)
        })
        console.log(Data)
    }
    useEffect(() => {
        getIds()

    }, [])

    return (
        <div>
            {Data != "" &&

                <div>
                    <center>
                        {Data.map((id, i) => {
                            return (
                                <div key={i}>
                                    {console.log(id)}
                                    <OrderSnippet obj={id} />
                                    <br />
                                </div>
                            )
                        })}
                    </center>


                </div>

            }
        </div>

    )
}

export default viewOrders