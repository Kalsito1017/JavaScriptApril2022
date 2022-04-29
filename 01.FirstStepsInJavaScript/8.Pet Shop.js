function  PetShop(input){
    let numberoffoodfordogs = input[0];
    let numberoffoodforcats = input[1];
    let allfoodfordogs = numberoffoodfordogs * 2.50;
    let allfoodforcats = numberoffoodforcats * 4;
    let neededmoney = allfoodforcats + allfoodfordogs;
    console.log(`${neededmoney} lv.`)
  }