import { useRouter } from 'next/router'
import React from 'react'

const view = () => {
    const router  = useRouter()
    let query = router.query
    console.log(query)
  return (
    <div>view</div>
  )
}

export default view