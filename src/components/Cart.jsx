import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useDispatch, useSelector} from 'react-redux';
import {removeCart} from '../redux/cartSlice'

export default function Cart() {
  const dispatch = useDispatch();
  const state = useSelector(store => store.cartReducer);
  const handleRemove = (id)=>{
      dispatch(removeCart(id)) 
  }

  const cards = state.cart.map(product => (
    <div className='col-md-12' style={{marginBottom:'10px'}} key={product.id}>
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
        <Button variant="danger" onClick={() => handleRemove(product.id)}>Remove Item</Button>
        </Card.Footer>
        </Card>
    </div>
) )

  return (
    <>
     <h1 style={{textAlign:"center"}}>Cart</h1>
     <div className='row'>
      {cards}
     </div>

    </>
  )
}
