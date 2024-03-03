var a = prompt("첫 번째 정수를 입력해주세요.")
var b = prompt("두 번째 정수를 입력해주세요.")

a = parseInt(a);
b = parseInt(b);

var plus = parseInt(a) + parseInt(b);
var minus =  parseInt(a) - parseInt(b);

document.querySelector('.plus_box input').value = plus;
document.querySelector('.minus_box input').value = minus;
