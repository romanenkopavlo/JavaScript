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
let button = document.getElementsByName("b_valid")[0];
let colors = document.getElementsByClassName("color");
let paragraph = document.getElementById("stage");
let errorParagraph = document.getElementById("error");
let paragraphBTS = document.getElementById("bts");
let paragraphLyceum = document.getElementById("astier");
let buttonSetDelete = document.getElementById("button");
let parentElement = document.getElementById("one");
let number = document.getElementById("number");
let counter = 0;
let counterButton = 0;

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

button.onclick = function () {
    counter++;
    if (counter % 2 === 0) {
        button.style.backgroundColor = null;
        element4.style.backgroundColor = null;

    } else {
        button.style.backgroundColor = "aqua";
        element4.style.backgroundColor = "grey";
    }
};

colors[0].onchange = function () {
    paragraph.style.color = colors[0].value;
}

colors[1].onchange = function () {
    paragraph.style.color = colors[1].value;
}

number.onkeyup = function () {
    if (number.value > 20) {
        errorParagraph.innerText = "La valeur incorrecte";
        errorParagraph.style.color = "red";
    } else {
        errorParagraph.innerText = null;
        errorParagraph.style.color = null;
    }
}

buttonSetDelete.value = "Delete the paragraphs";
paragraphBTS.innerText = "BTS CIEL";
paragraphLyceum.innerText = "Lycée Astier";

buttonSetDelete.onclick = function () {
    counterButton++;
    if (counterButton % 2 === 0) {
        buttonSetDelete.value = "Delete the paragraphs";
        paragraphBTS = document.createElement("p");
        paragraphLyceum = document.createElement("p");
        paragraphBTS.innerText = "BTS CIEL";
        paragraphLyceum.innerText = "Lycée Astier";
        paragraphBTS.id = "bts";
        paragraphLyceum.id = "astier";
        parentElement.appendChild(paragraphBTS);
        parentElement.appendChild(paragraphLyceum);
        parentElement.insertBefore(paragraphBTS, buttonSetDelete);
        parentElement.insertBefore(paragraphLyceum, buttonSetDelete);
    } else {
        paragraphBTS.remove();
        paragraphLyceum.remove();
        buttonSetDelete.value = "Set the paragraphs";
    }
}