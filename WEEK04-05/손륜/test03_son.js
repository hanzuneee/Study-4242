const student = {
    name: '한준이',
    age: '21살',
    scores: {
        a : 100,
        b : 80,
        c : 90,
    },
};

const total = student.scores.a + student.scores.b + student.scores.c;
console.log('총 점수는 ' + total);

const average =  total / 3;
console.log('평균 점수는 ' + average);