function ReadingText(input){
    let text = String(input[0]);
    while(text !== "Stop"){
        console.log(text);
        text = String(input[1]);
    }
}