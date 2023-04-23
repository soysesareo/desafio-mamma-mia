import React from 'react'
import { useContext } from 'react'
import Context from '../context/Context'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Compra = () => {
  const { compra } = useContext(Context)
  
  return (
    <card >
      <div className="compraContainer">
        <p className="compraTexto">Detalles del pedido</p>
        <div className="compraPedido">
          {
            compra.map(item => (
              <div className="compraPizzaNombre" key={item.id}>
                <img height={"85px"} src={item.img} alt={item.name} />
                <h5>{item.name}</h5>
                <div>
                  <h5>${item.price}</h5>
                </div>
              </div>
            ))}
        </div>
        <div className="compraBotones">
          <Button className="compraBoton" variant="success">Ir a pagar</Button>
          <Link to={'/' }><Button className="compraBoton" variant="secondary">Seguir comprando</Button></Link>
          <Button className="compraBoton" variant="danger">Anular pedido</Button>
        </div>
      </div>
    </card>
  )
}

export default Compra