var name1 = localStorage.getItem("p1N")
var name2 = localStorage.getItem("p2N")

document.getElementById("player1_name").innerHTML = name1
document.getElementById("player2_name").innerHTML = name2

document.getElementById("player1_score").innerHTML = score1
document.getElementById("player2_score").innerHTML = score2


document.getElementById("p1name").innerHTML = name1
document.getElementById("p2name").innerHTML = name2

function send(){
    number1 = document.getElementById("input1").value
    number2 = document.getElementById("input2").value
    actual_answer = parseInt(number1)*parseInt(number2)
    question_number = "<h4>" + number1 + "x" + number2 + "</h4>"
    input_box = "<br>Answer: <input type='number' class='form-control' id='input_check_box>"
    bTag = "<br><br> <button class='btn btn-primary' onclick='check()'>Check</button>"
    row = question_number + input_box + bTag
    document.getElementById("output").innerHTML = row
    document.getElementById("input1").value = ""
    document.getElementById("input2").value = ""
}

question_turn = "player1"
answer_turn = "player2"
if(get_answer == actual_answer){
    if(answer_turn == "player1"){
        update_player1_score = score1 + 1
        document.getElementById("player1_score").innerHTML = update_player1_score
    }
    else{
        update_player2_score = score2 + 1
        document.getElementById("player2_score").innerHTML = update_player2_score
    }
}
if(question_turn == "player1"){
    question_turn = "player2"
    document.getElementById("player_question").innerHTML = "Questioneer: " + name2
}
else{
    question_turn = "player1"
    document.getElementById("player_question").innerHTML = "Questioneer: " + name1
}

