function Fibonacci (limit){
    a = 0
    b = 1
    sum = 0
    result =[]
    for(i=0;i <= limit-1; i++){
        if(i == 0){
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
}
