import {useRouter} from 'next/router'
import { Card,CardBody,CardText } from 'reactstrap'

function ProductDetail() {
    const router = useRouter()
    const productId=router.query.productId
    return (
        <div>
            <h1>Details about Product {productId}</h1>
            <Card style={{width:'20rem',backgroundColor:'red'}}>
                <CardText>{productId}</CardText>
            </Card>
        </div>
    )
}

export default ProductDetail