// alert("Hello");

function getRoll() {
    var roll = Math.random() * 6;
    roll = Math.floor(roll) + 1;
    return roll;
}

function getDiceImage(num) {
    return "images/dice" + num + ".png";
}

function setDiceOneImage(image) {
    document.querySelector(".img-1").setAttribute("src", image);
}

function setDiceTwoImage(image) {
    document.querySelector(".img-2").setAttribute("src", image);
}

function setTitle(html) {
    document.querySelector("h1").innerHTML = html
}

function startRolls() {
    var dice1Roll = getRoll();
    var dice2Roll = getRoll();

    setDiceOneImage(getDiceImage(dice1Roll));
    setDiceTwoImage(getDiceImage(dice2Roll));

    if (dice1Roll > dice2Roll) {
        setTitle("🚩 Player 1 wins!!");
    } else if (dice1Roll < dice2Roll) {
        setTitle("Player 2 wins!! 🚩");
    } else {
        setTitle("It's a draw");
    }
}

startRolls();