function calculateTip() {
    var bill = document.getElementById("bill").value;
    var service = document.getElementById("service").value;
    var numOfPeople = document.getElementById("peopleamnt").value;

    if (bill === "" || service == 0) {
        alert("Please enter values");
        return;
    }

    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } 
    else {
        document.getElementById("each").style.display = "block";
    }

    var per = bill * (service / 100);
    var total = (per / numOfPeople)*100;
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
  
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function() {
    calculateTip();
};