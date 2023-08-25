import {useState } from 'react'
import '../container.css'
const Container = ({meses, cantidad, intereses}) => {

  // const [intereses, setInter] = useState()
 
  // console.log(meses,cantidad)

  return (
    <div className='container'>
        <h2>Cantidad a prestar: {cantidad}</h2>
        <h2>Meses: {meses}</h2>
        <h2>Intereses: {intereses}</h2>

        
    </div>
  )
}

export {Container}