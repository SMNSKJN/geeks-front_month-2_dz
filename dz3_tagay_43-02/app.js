// 1 задача

let carsName = ["Honda","Audi","BMW","KIA","Fiat","Reno"]
for (let i = 0; i < 6; i++) {

let country;
switch (carsName[i]) {
    case "Honda":
    country = "🇯🇵";
    break;
    case "Audi":
    case "BMW":
    country = "🇩🇪";
    break;
    case "KIA":
    country = "🇰🇷";
    break;
    case "Fiat":
    country = "🇮🇹";
    break;
    case "Reno":
    country = "🇫🇷";
    break;
}
    console.log(carsName[i]+" "+ country);}

// 2 задача


    let grade100 = [40, 55, 22, 89, 14, 78, 56, 47, 59, 666]
    for (let i = 0; i < grade100.length; i++) {
        if (grade100[i] >= 0 && grade100[i] <= 20) {
            console.log(1)
        }else if (grade100[i] >= 21 && grade100[i] <= 40) {
            console.log(2)
        }else if (grade100[i] >= 41 && grade100[i] <= 60) {
            console.log(3)
        }else if (grade100[i] >= 61 && grade100[i] <= 80) {
            console.log(4)
        }else  if (grade100[i] >= 81 && grade100[i] <= 100) {
            console.log(5)
        }else {
            console.log("не сто бальная система")
        }
    }

// 3 задача

let cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]
let i =0
for( let card of cards){
    if(card[0]==="4"){
        i++
    }

}
console.log("count of visa card " + i + " of " + cards.length);
