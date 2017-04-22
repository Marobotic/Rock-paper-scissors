//Turned off but kept if is needed for later!

function Loading() {

    function makeyourmove() {
        var move = "x";
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                move = "Rock";
                break;
            case 1:
                move = "Paper";
                break;
            case 2:
                move = "Scissors";
                break;
        }
        return move;
    }


    //Result Functions
    function Rules(player, comp) {
        //Logging things for later
        console.log("p1: " + player);
        console.log("com: " + comp);

        if (player == "Paper" && comp == "Rock") {
            console.log("Winner");
            document.getElementById("end_game").innerHTML = "Player Wins";
            document.getElementById('block_color').style.backgroundColor = "#4bd836";
        } else if (player == "Paper" && comp == "Scissors") {
            console.log("Loser");
            document.getElementById("end_game").innerHTML = "Computers > Humans";
            document.getElementById('block_color').style.backgroundColor = "#d83636";
        } else if (player == "Rock" && comp == "Paper") {
            console.log("Loser");
            document.getElementById("end_game").innerHTML = "Computers > Humans";
            document.getElementById('block_color').style.backgroundColor = "#d83636";
        } else if (player == "Rock" && comp == "Scissors") {
            console.log("Winner");
            document.getElementById("end_game").innerHTML = "Player Wins";
            document.getElementById('block_color').style.backgroundColor = "#4bd836";
        } else if (player == "Scissors" && comp == "Paper") {
            console.log("Winner");
            document.getElementById("end_game").innerHTML = "Player Wins";
            document.getElementById('block_color').style.backgroundColor = "#4bd836";
        } else if (player == "Scissors" && comp == "Rock") {
            console.log("Loser");
            document.getElementById("end_game").innerHTML = "Computers > Humans";
            document.getElementById('block_color').style.backgroundColor = "#d83636";
        } else {
            console.log("Draw");
            document.getElementById("end_game").innerHTML = "Draw";
            document.getElementById('block_color').style.backgroundColor = "#cfd836";
        }
        document.getElementById("p1").innerHTML = "Player: " + player;
        document.getElementById("com").innerHTML = "AI: " + comp;
    }

    $('#Rock_move').click(function() {
        Rules("Rock", makeyourmove());

    });


    $('#Paper_move').click(function() {
        Rules("Paper", makeyourmove());

    });
    $('#Scissor_move').click(function() {
        Rules("Scissor", makeyourmove());

    });

    var x = 1;
    var myVar;
    $('#auto').click(function() {
        if (x === 1) {
            myVar = setInterval(function() {
                myTimer();
            }, 2000);
            document.getElementById("auto").innerHTML = "Running...";
            x = 2;
        } else if (x === 2) {
            document.getElementById("auto").innerHTML = "Auto Pilot";
            x = 1;
            myStopFunction();
        }
        console.log(x);
    });

    function myTimer() {
        player = makeyourmove();
        comp = makeyourmove();
        Rules(player, comp);
        console.log("Time up");
    }

    function myStopFunction() {
        clearInterval(myVar);
    }
}
