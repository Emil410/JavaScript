// console.log(prompt("Adiviz nedi?"));
// console.log(prompt("Familyan nedi?"));
// console.log("Salam");
// var name = prompt("Adin ?");
// var surname = prompt("Soyadin ?");
// var age = prompt("Nece yasin var ?");
// var difference = (25 - age);
// console.log("Salam" +  " " + name + " " + surname + "Nece ilden sonra 25 yasin olacaq" + difference);
// var age = prompt("Nece yasin var?")
// console.log("Month" + " " + age * 12);
// console.log("Days" + " " +  age * 365);
// console.log("Hour" + " " +  age * 365 * 24);
// console.log("Minutes" + " " +  age * 365 * 24 * 60);
// console.log("Seconds" + " " +  age * 365 * 24 * 60 * 60)
// var age = prompt("Senin yasin neqederdi?");
// if (age < 5) {
//     console.log("Sen hele balacasan")
// }else if(age <=10){
//     console.log("Orta")
// }else{
//     console.log("boyuk")
// }
// var sentence = prompt("Cumle yaz!");
// var number = prompt("Bidene reqem yaz!");
// var age = 18;
// switch (age) {
//     case 16:
//         console.log("Usag");
//         break;
//     case 17:
//         console.log("Boyumusen amma helede usagsan");
//         break;
//     default:
//         console.log("boyumusen")
// } 
var str = prompt("Cumle yaz!");
var firstChar = str. charAt(prompt("Bidene regem yaz"));
console.log(firstChar);
if (firstChar = " "){
   alert("Bele bir herif yoxdu!")
}
if (confirm("Bide yazmag istiyirsense OK bas!") == true) {
    var firstChar = str. charAt(prompt("Bidene regem yaz"));
    console.log(firstChar);
  } else {
    console.log("You canceled!");
  }