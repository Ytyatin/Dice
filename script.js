
var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;
console.log(rand1 + " " + rand2);


switch (rand1) {
    case 1: {
        document.querySelector("#b15").classList.add("red");
        break;
    }
    case 2: {
        document.querySelector("#b12").classList.add("red");
        document.querySelector("#b18").classList.add("red");
        break;
    }

    case 3: {
        document.querySelector("#b12").classList.add("red");
        document.querySelector("#b15").classList.add("red");
        document.querySelector("#b18").classList.add("red");
        break;
    }

    case 4: {

        document.querySelector("#b11").classList.add("red");
        document.querySelector("#b13").classList.add("red");
        document.querySelector("#b17").classList.add("red");
        document.querySelector("#b19").classList.add("red");
        break;
    }

    case 5: {
        document.querySelector("#b11").classList.add("red");
        document.querySelector("#b13").classList.add("red");
        document.querySelector("#b15").classList.add("red");
        document.querySelector("#b17").classList.add("red");
        document.querySelector("#b19").classList.add("red");
        break;
    }

    case 6: {
        document.querySelector("#b11").classList.add("red");
        document.querySelector("#b13").classList.add("red");
        document.querySelector("#b14").classList.add("red");
        document.querySelector("#b16").classList.add("red");
        document.querySelector("#b17").classList.add("red");
        document.querySelector("#b19").classList.add("red");

        break;
    }

    default:
        break;
}

switch (rand2) {
    case 1: {
        document.querySelector("#b25").classList.add("red");
        break;
    }

    case 2: {
        document.querySelector("#b22").classList.add("red");
        document.querySelector("#b28").classList.add("red");
        break;
    }

    case 3: {
        document.querySelector("#b22").classList.add("red");
        document.querySelector("#b25").classList.add("red");
        document.querySelector("#b28").classList.add("red");
        break;
    }

    case 4: {

        document.querySelector("#b21").classList.add("red");
        document.querySelector("#b23").classList.add("red");
        document.querySelector("#b27").classList.add("red");
        document.querySelector("#b29").classList.add("red");
        break;
    }

    case 5: {
        document.querySelector("#b21").classList.add("red");
        document.querySelector("#b23").classList.add("red");
        document.querySelector("#b25").classList.add("red");
        document.querySelector("#b27").classList.add("red");
        document.querySelector("#b29").classList.add("red");
        break;
    }

    case 6: {
        document.querySelector("#b21").classList.add("red");
        document.querySelector("#b23").classList.add("red");
        document.querySelector("#b24").classList.add("red");
        document.querySelector("#b26").classList.add("red");
        document.querySelector("#b27").classList.add("red");
        document.querySelector("#b29").classList.add("red");

        break;
    }

    default:
        break;
}


if (rand1 > rand2) {
    document.querySelector("h1").innerText = "Player 1 Wins";
}
else if (rand1 == rand2) {
    document.querySelector("h1").innerText = "Match Tie";
}
else {
    document.querySelector("h1").innerText = "Player 2 Wins";
}