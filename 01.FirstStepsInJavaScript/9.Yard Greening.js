function YardGreening(input){
    let squaremeters = input[0];
    let priceforwholeyard = squaremeters * 7.61;
    let discount = 0.18 * priceforwholeyard;
    let finalprice = priceforwholeyard - discount;
    console.log(`The final price is: ${finalprice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}