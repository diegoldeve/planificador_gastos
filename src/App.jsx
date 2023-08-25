import { useState } from 'react'

import './App.css'
import { Container } from './components/Container'

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cantidad, setCantidad] = useState()
  const [meses, setMeses] = useState()
  const [intereses, setInteres] = useState(0)


  
  function getMoney(e){
    setIsLoading(false)
    setCantidad(e)
  }
  function getMonths(e){
    setMeses(e)
    setIsLoading(false)

  }
  function handleSearch(e){
    let interes = 0;
    e.preventDefault();
    if(meses === undefined || cantidad === undefined || cantidad<100 ){
      alert('Todos los campos son obligatorios')
    }else{
      if(cantidad<1000){
        interes = cantidad * .3;
        setInteres(interes)
        return
      }else if(cantidad>=1000 && cantidad<5000){
        interes = cantidad * .5;
        setInteres(interes)
      }else if(cantidad>=5000 && cantidad < 10000){
        interes = cantidad * .7;
        setInteres(interes)
      }else if(cantidad>10000){
        interes = cantidad * .9;
        setInteres(interes)
      }
      console.log(`Préstamo: ${cantidad} Meses: ${meses}`)
      setIsLoading(true);
    }


  }
  
  return (
    <div className="App">
      <h2>Cotizador de préstamos</h2>
      <form action="">
        <label htmlFor="cantidad">Ingresa la cantidad:</label>
        <input type="number" placeholder='5000 pesos' id='cantidad' onChange={e => getMoney(e.target.value)}/>
        <label htmlFor="plazo">Plazo a pagar:</label>
        <select name="" id="plazo" onChange={e => getMonths(e.target.value)}>
          <option value="" selected disabled>Seleccionar</option>
          <option value="3">3 meses</option>
          <option value="6">6 meses</option>
          <option value="12">12 meses</option>
          <option value="24">24 meses</option>
        </select>
        <button type="submit" onClick={handleSearch} >Calcular</button>
      </form>
      {isLoading&&(
        <>
        <Container
        meses={meses}
        cantidad={cantidad}
        intereses = {intereses}/>
        </>
      )}

    </div>
  )
}

export default App
