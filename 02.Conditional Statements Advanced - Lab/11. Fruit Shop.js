function FruitShop(input){
    let fruit = String(input[0]);
    let day = String(input[1]);
    let amount = Number(input[2]);
    let price = 0;
    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday")
            {
                if (fruit == "banana")
                {
                    price = amount * 2.50;
                }
                else if (fruit == "apple")
                {
                    price = amount * 1.20;
                }
                else if (fruit == "orange")
                {
                    price = amount * 0.85;
                }
                else if (fruit == "grapefruit")
                {
                    price = amount * 1.45;
                }
                else if (fruit == "kiwi")
                {
                    price = amount * 2.70;
                }
                else if (fruit == "pineapple")
                {
                    price = amount * 5.50;
                }
                else if (fruit == "grapes")
                {
                    price = amount * 3.85;
                }
                else
                {
                    console.log("error");
                    return;
                }
            }
            else if (day == "Saturday" || day == "Sunday")
            {
                if (fruit == "banana")
                {
                    price = amount * 2.70;
                }
                else if (fruit == "apple")
                {
                    price = amount * 1.25;
                }
                else if (fruit == "orange")
                {
                    price = amount * 0.90;
                }
                else if (fruit == "grapefruit")
                {
                    price = amount * 1.60;
                }
                else if (fruit == "kiwi")
                {
                    price = amount * 3.00;
                }
                else if (fruit == "pineapple")
                {
                    price = amount * 5.60;
                }
                else if (fruit == "grapes")
                {
                    price = amount * 4.20;
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
                return;
            }
            console.log(`${price.toFixed(2)}`);
        }
    

