import { useState } from "react";

function Mult(){
    const [param, setParam] = useState('0')
    const [result, setResult] =useState([])
    const [error, setError] = useState(false)
    const regex = new RegExp("^[1-9][0-9]*$")

    function Multiples(limit){
        var result =[]
        var index = 0
        for(var i=1;i <= limit; i++){
            result[index]=i
            if (i%3 === 0){
                result[index]="AKE"
            }
            if (i%5 === 0){
                result[index]="LAB"
            }
            if (i%3 === 0 && i%5 === 0){
                result[index]="AKELAB"
            }
            index=index+1
        }
        return result
    }

    function mulClick() {
        console.log(param)
        setError(false)
        if(regex.test(param)){
            console.log("paso")
            let result = Multiples(param)
            console.log(param,result)
            setResult(result)
        }else{
            setError(true)
        }
    }

    function mulChange(e){
        e.preventDefault()
        setParam(e.target.value)
    }

    return(
        <div>
            <h4>Multiples</h4>
            <input type="text" onChange={mulChange} ></input>
            <button type="submit" onClick={mulClick}>Ejecutar</button>
            <div>
                <p>respuesta</p>
                {error === true ? <p>'Número no valido, debe ser mayor o igual a 1'</p> : 
                    <p>{"(" + result.join(', ') + ")"}</p>}
            </div>
        </div>

    );
}

export default Mult;