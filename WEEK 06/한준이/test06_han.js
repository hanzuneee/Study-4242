// 숫자 배열에서 최댓값과 최솟값 비교하기

function MaxOrMin(numbers) {
    // 숫자 입력이 비어있을 경우 "숫자를 다시 입력해주세요." 출력
    if (numbers.trim() === "") {
        return "숫자를 다시 입력해주세요.";
    }
    
    // 각 배열 요소를 숫자로 변환
    // split입력된 숫자들을 공백을 기준으로 구별하여 숫자 배열로 변환
    const arr = numbers.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }

    let max = arr[0]; // 최댓값 초기화
    let min = arr[0]; // 최솟값 초기화

    // 최댓값과 최솟값 찾기
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // 현재값과 최댓값 비교, 현재값이 최대값보다 크면 최대값으로 변경
        } else if (arr[i] < min) {
            min = arr[i]; // 현재값과 최솟값 비교, 현재값이 최솟값보다 작으면 최솟값 변경
        }
    }

    // 결과 반환
    return "최댓값은 " + max + ", 최솟값은 " + min;
}

// 임의의 숫자 5개 지정 (ex: 10 9 4 5 2)
const numbersInput = "3 100 2 6 0 5";
console.log(MaxOrMin(numbersInput)); // 결과 출력