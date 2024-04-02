function PlusOfNumbers(allnumbers) {
    let answer = [];
    let sum = 0; //0으로 초기화

    for (let a of allnumbers) {
        if (a % 2 === 1) { //홀수 구하기
        sum += a; //합계 구하기 
        }
    }
    return sum; //합계 반환
}
allnumbers = [1, 2, 3, 4, 5];
console.log(PlusOfNumbers(allnumbers)); //결과 출력