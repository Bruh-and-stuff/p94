function start(){
    var p1 = document.getElementById("inputP1").value;
    var p2 = document.getElementById("inputP2").value;
    localStorage.setItem("p1N", p1)
    localStorage.setItem("p2N", p2)
    window.location = "game.html"
}