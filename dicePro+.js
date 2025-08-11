function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for(let i=0;i<numOfDice;i++){
        // const value = math.floor(math.random()*6)+1;
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        //images.push(`<img src="assets /${values}.png">`);
        images.push(`<img src="assets/${value}.png" alt="Dice ${value}">`);
    }
    //diceResult.textContent = `dice: $ {values.join(', ')}`;
    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}