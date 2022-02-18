import React from 'react'
import {useRouter} from 'next/router'
import Card from '../../../../components/Card'


function Review() {
    const router = useRouter()
    const {productId,reviewId}=router.query
    return (
        <div>
            <h2>of {productId}</h2>
        </div>
    )
}

export default Review
