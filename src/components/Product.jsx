import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Alert  from 'react-bootstrap/Alert'
import { useEffect } from "react"
import {useDispatch , useSelector} from 'react-redux'
import {addCart} from '../redux/cartSlice'
import {getProducts} from '../redux/productSlice'
import StatusCode from '../utils/StatusCode'

export default function Product() {
    const dispatch = useDispatch();
    const {data: products,status} = useSelector(state => state.products);
    console.log(products);
    useEffect(()=>{
        /* fetch('https://fakestoreapi.com/products')
        .then(data => data.json())
        .then(result =>getProducts(result) ) */
        dispatch(getProducts());
    },[]);
    
    if(status === StatusCode.LOADING){
        return <Alert key="secondary" variant="secondary" >Loading...</Alert>
    }

    if (status === StatusCode.ERROR){
        return <Alert key="danger" variant="danger" >Error! Try Again Later</Alert>
    }

    const addToCart =(product)=> {
        dispatch(addCart(product))
    }

    const cards = products.map(product => (
        <div className='col-md-3' style={{marginBottom:'10px'}} key={product.id}>
            <Card key={product.id} className='h-100'>
            <div className='text-center'>
            <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}}/>
            </div>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                {product.price}$
                </Card.Text>
            </Card.Body>
            <Card.Footer style={{background:'white'}}>
            <Button variant="primary" onClick={()=>addToCart(product)}>Add To Cart</Button>
            </Card.Footer>
            </Card>
        </div>
    ) )

    return (
    <>
     <h1 style={{textAlign:"center" ,margin:'8px'}} >Products Dashboard</h1>
     <div className='row'>
       {cards}
     </div>
    </>
  )
}
