var tempImgShow = null;
var tempIdShow = null;
var attemptCount = 0;

var displayDiv = document.getElementById("container");
var timer = document.createElement("div");
timer.setAttribute("id", "count");
timer.style = "font-weight:bold; font-size:24pt; margin: 30px; align: center;";
displayDiv.appendChild(timer);

var Turns = document.createElement("div");
Turns.setAttribute("id", "YourTurns");
Turns.style = "font-weight:bold; font-size:24pt; background-color: red; margin: 30px; align: center;";
displayDiv.appendChild(Turns);
document.getElementById("YourTurns").innerHTML = "Turns: " + 0;
var count = 0;
var timeInterval = setInterval(timeCount, 1000);

function timeCount() {

    document.getElementById("count").innerHTML = "Total time: " + count++;
}
var Board = document.createElement("div");
Board.setAttribute("id", "Board");
Board.style = "width:1000px; height: 500px;";
displayDiv.appendChild(Board);

for (let i = 0; i < 8; i++) {
    var puzzle = document.createElement("div");
    puzzle.setAttribute("id", "div" + i);
    puzzle.setAttribute("onclick", "Blocks(this)");
    puzzle.style = "border: 2px solid black; width:200px; height: 170px; margin:10px; float:left; background-color:yellow;";  
    Board.appendChild(puzzle);

}
var imgArray=["book1.jpeg","book3.jpeg","book4.jpeg","book2.jpeg","book1.jpeg","book3.jpeg","book4.jpeg","book2.jpeg"];
shuffle(imgArray);

function shuffle(array)
 {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
}
for (let i = 0; i < 8; i++) {
    var img = document.createElement("img");
    img.src = imgArray[i];
    img.setAttribute("id", "img" + i);
    img.style = "width:200px; height: 170px; visibility: hidden;";
    document.getElementById("div" + i).appendChild(img);

}

var gameEnd = false;
function Blocks(elements) {
    if(gameEnd)
    {
        return;
    }

    document.getElementById("YourTurns").innerHTML = "YourTurns: " + ++attemptCount;

    var DivC = document.getElementById(elements.id);
    var clicked = document.getElementById(elements.id).firstChild;
    clicked.style.visibility = "visible";

    if (tempImgShow == null) {
        tempImgShow = clicked.src;
        tempImgShow = elements.id;

    }
    else if (tempImgShow != null) {
        if (tempImgShow != clicked.src) {
            document.getElementById(tempIdShow).firstChild.style.visibility = "hidden";
            tempIdShow = null;
            tempImgShow = null;
            clicked.style.visibility = "hidden";

        }
        else if (tempVisibleImgPath == clicked.src && tempVisibleDivId != elements.id) {
            tempIdShow = null;
            tempImgShow = null;
            if (checkComplete()) {
                clearInterval(timeInterval);
                gameEnd = true;
            }

        }
    }
}

