let $con = document.querySelector("#con");
let $energ = document.querySelector("#energ");
let $humButton = document.querySelector("#hum");


function plusCon () {
    let conValue = Number($con.innerText);
    if (conValue <2000) {
        conValue++;
    }
    $con.innerText = conValue;
}

function minusEnerg () {
    let energValue = Number($energ.innerText)
    if (energValue>0) {
    energValue--;
    }
    $energ.innerText = energValue;
}
function click(){
    minusEnerg();
    plusCon()
}
$humButton.onclick = click;





