var sign = "X"

var count = 0

function boxClicked(boxID){
//   alert(`box with id ${boxID} is clicked   `)
if( $(`#${boxID}`).text()  == " "  ){
  $(`#${boxID}`).text(sign)
 var result = winnerLogic(sign)
 if(result != true  && result != "tied" ){
  if(sign == "X"){
    sign = "O"
    $("#player").text("Player2")
  }else{
      sign = "X"
      $("#player").text("Player1")
  }
}
}
}

function winnerLogic(sign){
    count++;
    if(  $("#box1").text() == sign  && $("#box2").text() == sign && $("#box3").text() == sign ||
    $("#box4").text() == sign  && $("#box5").text() == sign && $("#box6").text() == sign || 
    $("#box7").text() == sign  && $("#box8").text() == sign && $("#box9").text() == sign ||
    $("#box1").text() == sign  && $("#box4").text() == sign && $("#box7").text() == sign ||
    $("#box2").text() == sign  && $("#box5").text() == sign && $("#box8").text() == sign  ||
    $("#box3").text() == sign  && $("#box6").text() == sign && $("#box9").text() == sign ||
    $("#box1").text() == sign  && $("#box5").text() == sign && $("#box9").text() == sign ||
    $("#box3").text() == sign  && $("#box5").text() == sign && $("#box7").text() == sign  ){
        alert( `  ${$("#player").text()}  is the Winner!!!`)
        for( var i = 1 ; i <= 9 ; i++ ){
            $("#box"+ i).text(" ")
        }
        $("#player").text("Player1")
        sign = "X"
        count = 0
        return true

    }

    if(count == 9){
        alert("Game is tied!!")
        for( var i = 1 ; i <= 9 ; i++ ){
            $("#box"+ i).text(" ")
        }
        $("#player").text("Player1")
        sign = "X"
        count = 0
        return "tied"
    }

}

