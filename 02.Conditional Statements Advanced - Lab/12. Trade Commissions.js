function TradeCommissions(input){
 
    let town = String(input[0]);
    let sales = Number(input[1]);
    let commission = 0;
                if (town == "Sofia")
                {
                    if (sales > 0 && sales <= 500)
                    {
                        commission = sales * 0.5 / 10;
                        console.log(`${commission.toFixed(2)}`);
 
                    }
                    else if (sales > 500 && sales <= 1000)
                    {
                        commission = sales * 0.7 / 10;
                        console.log(`${commission.toFixed(2)}`);
 
                    }
                    else if (sales > 1000 && sales <= 10000)
                    {
                        commission = sales * 0.8 / 10;
                        console.log(`${commission.toFixed(2)}`);
 
                    }
                    else if (sales > 10000)
                    {
                        commission = sales * 1.2 / 10;
                        console.log(`${commission.toFixed(2)}`);
                    }
                    else
                    {
                        console.log("error");
                        return;
                    }
                }
                else if (town == "Varna")
                {
                    if (sales > 0 && sales <= 500)
                    {
                        commission = sales * 0.45 / 10;
                        console.log(`${commission.toFixed(2)}`);
 
                    }
                    else if (sales > 500 && sales <= 1000)
                    {
                        commission = sales * 0.75 / 10;
                        console.log(`${commission.toFixed(2)}`);
 
                    }
                    else if (sales > 1000 && sales <= 10000)
                    {
                        commission = sales * 1.0 / 10;
                        console.log(`${commission.toFixed(2)}`);
 
                    }
                    else if (sales > 10000)
                    {
                        commission = sales * 1.3 / 10;
                        console.log(`${commission.toFixed(2)}`);
 
                    }
                    else
                    {
                        console.log("error");
                        return;
                    }
                }
                else if (town == "Plovdiv")
                {
                    if (sales > 0 && sales <= 500)
                    {
                        commission = sales * 0.55 / 10;
                        console.log(`${commission.toFixed(2)}`);
                    }
                    else if (sales > 500 && sales <= 1000)
                    {
                        commission = sales * 0.8 / 10;
                        console.log(`${commission.toFixed(2)}`);
 
                    }
                    else if (sales > 1000 && sales <= 10000)
                    {
                        commission = sales * 1.2 / 10;
                        console.log(`${commission.toFixed(2)}`);
                    }
                    else if (sales > 10000)
                    {
                        commission = sales * 1.45 / 10;
                        console.log(`${commission.toFixed(2)}`);
                    }
                    else
                    {
                        console.log("error");
                        return;
                    }
     
                }
                else
                {
                    console.log("error");
                }
 
    }