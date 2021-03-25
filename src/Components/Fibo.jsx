import { useState } from "react";

function Fibo() {
    const [param, setParam] = useState('0')
    const [result, setResult] =useState([])
    const [error, setError] = useState(false)
    const regex = new RegExp("^([1-9])*$")

    function Fibonacci (limit){
        var a = 0
        var b = 1
        var sum = 0
        var result =[]
        for(var i=0;i <= limit-1; i++){
            if(i === 0){
                result.push(1)
            }
            else{
                sum = a + b
                result.push(sum)
                a = b
                b = sum
            }
        }
        return result
    };

    function fiboClick() {
        console.log(param)
        setError(false)
        if(regex.test(param)){
            console.log("paso")
            let result = Fibonacci(param)
            console.log(param,result)
            setResult(result)
        }else{
            setError(true)
        }
    }

    function fiboChange(e){
        e.preventDefault()
        setParam(e.target.value)
    }

    return (
      <div>
        <h4>Fibonacci</h4>
        <input type="text" onChange={fiboChange}></input>
        <button type="submit" onClick={fiboClick}>Ejecutar</button>
        <div>
            <p>respuesta</p>
            {error === true ? <p>'Número no valido, debe ser mayor o igual a 1'</p> : 
                <p>{"(" + result.join(', ') + ")"}</p>}
        </div>

      </div>
    );
}
  
export default Fibo;