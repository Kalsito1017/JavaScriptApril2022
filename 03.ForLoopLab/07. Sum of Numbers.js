function SumofNumbers(input){
    let data = input[0];
    let sum = 0;
    for(let index = 0; index < data.lenght; index++){
        let currentNumber = Number(data[index]);
        sum = sum + currentNumber;
    }
    console.log(`The sum of the digits is:${sum}`);
        
        
}