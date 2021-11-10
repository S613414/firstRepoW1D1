init = function() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    document.getElementById("shufflebutton").addEventListener( "click", reStart, false );
    // initialize each piece
    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        
        // calculate x and y for this piece
        var x = ((i % 4) * 100) ;
        var y = (Math.floor(i / 4) * 100) ;

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        // div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';
        // store x and y for later
        div.x = x;
        div.y = y; 
    }   
         
};

function reStart() {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");
    var randNumbers = new Array();

    while (randNumbers.length < divs.length) {
        rand = Math.floor(Math.random() * divs.length + 1);
        if (!randNumbers.includes(rand)) {
            randNumbers.push(rand);
        }
    }

    for (var i=0; i< divs.length; i++) {
        var div = divs[i];
        div.textContent = randNumbers[i];
    }      
}

function onPush(){
     alert('Clicked !');
}

// onMove = function () {
//     for (var i = 0; i < rows * columns; i++){
//       randomNumber = Math.floor(Math.random()*rows * columns);
//       // If our random numer is unique, add it to the board.
//       if (arrayHasNumberBeenUsed[randomNumber] == 0) {
//         arrayHasNumberBeenUsed[randomNumber] = 1;
//         arrayOfNumbers.push(randomNumber);
//       }
//       else {// Our number is not unique. Try again.
//         i--;
//       }
//     }
// }

window.addEventListener( "load", init, false );