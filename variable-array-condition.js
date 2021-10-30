var bottolColor = 'yellow';
var bottolQuantity = 3;
var waterFull = false;

// array
var iteams = ['banana', 'pencile', 'mug', 'pen'];
var iteamIndex = iteams.indexOf('pen');
console.log(iteamIndex);


iteams.push('mobile');
iteams.push('leptop');
// console.log(iteams);
iteams.pop();
console.log(iteams);

// conditional
if (iteams.length >= 55) {
               console.log('you have too many stuff on your desk');
               
}
else if (iteams.length == 5) {
               console.log('Wow! You have a clean desk');
}
else{
               console.log('you have some stuff on your desk')
}