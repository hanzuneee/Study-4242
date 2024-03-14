function agecalc () {
    var x = 22, result;
    result = --x;
    
    if (result === 21) {
        var str = 'Correct, My age is ';
        alert(str += result);
    }  
    else {
        alert("Try again");
    }
}