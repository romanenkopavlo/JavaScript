document.onreadystatechange = function () {
    console.log(document.readyState)
    if(document.readyState == 'interactive') {
        console.log("c'est ok")
    }
}
let elementH1 = document.getElementById("my_id");
let elementH2 = document.getElementsByTagName("h2");
let element3 = document.getElementsByClassName("c1");
let element4 = document.getElementById("etudiant");

elementH1.style.fontSize = "20px";
elementH1.style.color = "yellow";
elementH1.style.backgroundColor = "purple";

for (let i = 0; i < elementH2.length; i++) {
    elementH2[i].style.fontSize = "30px";
}

elementH2[0].style.fontSize = "10px";
elementH2[1].style.fontSize = "20px";
elementH2[2].style.fontSize = "30px";

for (let i = 0; i < element3.length; i++) {
    element3[i].style.fontStyle = "italic";
    element3[i].style.fontSize = "24px";
    element3[i].style.color = "aqua";
}

console.log("Inner Text: " + document.getElementById("id2").innerText);
console.log("Inner HTML: " + document.getElementById("id2").innerHTML);
console.log("Text Content: " + document.getElementById("id2").textContent);

document.getElementsByName("b_valid")[0].onclick = function () {
    element4.style.color = "grey";
};