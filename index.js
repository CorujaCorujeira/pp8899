function addUser() {
    var P1=document.getElementById("p1").value;
    var P2=document.getElementById("p2").value;

    localStorage.setItem("P1",P1);
    localStorage.setItem("P2",P2);

    window.location="game.html";

}