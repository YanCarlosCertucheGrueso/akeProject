import { useState } from "react";

function Fibo() {
    const [param, setParam] = useState(0)
    const [result, setResult] =useState([])
    const [error, setError] = useState(false)

    function fiboClick() {
        let result = []
        console.log(param, result);
    }
    function fiboChange(e){
        e.preventDefault()
        setParam(e.target.value)
    }

    return (
      <div>
        <h4>Fibonacci</h4>
        <form>
        <input type="text" onChange={fiboChange}></input>
        <button type="submit" onClick={fiboClick}>Ejecutar</button>
        </form>
        <div>
            <p>respuesta</p>
            {error === true ? <p>'Número no valido, es menor a cero'</p> : <p>arreglo respuesta</p>}
        </div>

      </div>
    );
}
  
export default Fibo;