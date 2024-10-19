// первая задача
let number1 = Number(prompt ("write first number"));
let number2 = Number(prompt("write second number"));
if (number1>number2) {
    console.log(number1+" > "+number2);
}else if (number1<number2) {
    console.log(number1+" < "+number2);
}else  {
    console.log(number1+" = "+number2);
}





// второе задание
let planet = prompt("choose number for 1 to 9");
let number = Number(planet);
switch (number) {
    case 1:
        console.log("меркурий");
        break;
    case 2:
        console.log("венера");
        break;
    case 3:
        console.log("земля");
        break;
    case 4:
        console.log("марс");
        break;
    case 5:
        console.log("юпитер");
        break;
    case 6:
        console.log("сатурн");
        break;
    case 7:
        console.log("уран");
        break;
    case 8:
        console.log("нептун");
        break;
    case 9:
        console.log("плутон");
        break;
    default:
        console.log("я не знаю");
        break;
}


// третья здача
let school = {
    name: "nlsit",  //название школы
    years: "1926",  //год оснавания
    address: "Toktogul68",  //адрес
    countOfStudent: "3200",     //количество учеников
    workSchedule: {
        monday:"07:00-18:30",
        tuesday:"07:00-18:30",
        wednesday:"07:00-18:00",
        thursday:"07:00-18:30",
        friday:"07:00-18:30",
        saturday:"dont work",
        sunday:"dont work",
    }
}
