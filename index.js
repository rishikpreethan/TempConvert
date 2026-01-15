document.getElementById("submit").onclick = function() {
    let temp = Number(document.getElementById("input").value);
    let fc = document.getElementById("fc").checked;
    let cf = document.getElementById("cf").checked;
    let ans;
    if(temp==""){
        document.getElementById("ans").textContent = "Please enter a number";
    }
    else{
        if (cf) {
            ans = temp * (9 / 5) + 32;
            document.getElementById("ans").textContent = ans + "°F";
        }
        else if (fc) {
            ans = (temp - 32) * (5 / 9);
            document.getElementById("ans").textContent = ans + "°C";
        }
        else {
            document.getElementById("ans").textContent = "Please select an option";
        }
    }
}
