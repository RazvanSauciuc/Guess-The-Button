var num, num1, num2;    
num = Math.floor(Math.random() * 3); 
do {
    num1 = Math.floor(Math.random() * 3); // 0...2
} while (num === num1);
do {
    num2 = Math.floor(Math.random() * 3); // 0...2
} while (num2 === num || num2 === num1);

function display(){
    if (num === 0) {
        alert('Winner!');
    } else {
        alert('Loser!')
    }
}
function display1(){
    if (num1 === 0) {
        alert('Winner!');
    } else {
        alert('Loser!');
    }
}
function display2(){
    if (num2 === 0) {
        alert('Winner!');
    } else {
        alert('Loser!');
    }
}