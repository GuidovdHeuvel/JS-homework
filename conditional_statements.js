// 1 Function accept 2 integers display larger
function bigger(a, b) {
    if (a > b) {
        console.log(`1) ${a}`)
    } else {
        console.log(`1) ${b}`)
    }
}

bigger(7, 5);

// 2 Sort three numbers 
function simpSort(a) {
    console.log(`2) ${a.sort()}`)
}

simpSort([2, 7, 1]);

// 3 Find largest number 
function simpBiggest(b) {
    var c = b.sort(function (a, b) { return a - b })
    console.log(`3) ${c.slice(-1)}`)
}
simpBiggest([2182811, 7, 3, 123, 5]);

// 4 loop with message
function oddEven(a) {
    var b = [];
    var i;
    for (i = 0; i < a.length; i++) {
        if (a % 2 == 0) {
            b.push(a + " is an even number.")
        } else {
            b.push(a + " is an odd number.")
        }
    }
    return "4) " + b
}

console.log(oddEven([1]));


// 5 Loop till 100 3 = Fizz 5 = Buzz
console.log("5)")
function Fizz(a) {
    var b = []
    if (a % 5 == 0) {
        b.push("Buzz");
    } else if (a % 3 == 0) {
        b.push("Fizz");
    } else {
        b.push(a);
    }
    return "5)" + b
}

Fizz([5]);

// console.log("5)")
// function Fizz(a){
//     var b = []
//     for(var i = 1; i < a.length; ++i){
//         if (i % 3 == 0 && i % 5 == 0){
//             console.log("FizzBuzz");
//         } else if (i % 5 == 0){
//             console.log("Buzz");
//         } else if (i % 3 == 0){
//             console.log("Fizz");
//         } else{
//             console.log(a);
//         }
//     }
// }

// var b = console.log(...Array(100).keys())

// Fizz(5)
// 6 How many numbers divisible by 3 
function divThous(a) {
    var b = 0;
    for (i = 0; i < a; i++) {
        if (i % 3 == 0) {
            b += 1;
        }
    }
    return b
}
console.log("6) " + divThous(1000))

// 7 Pyramid
function Pyramid(n) {
    for (var i = 0; i < n; i++) {
        var str = '';
        for (var j = 1; j < n - i; j++) {
            str = str + ' ';
        }
        for (var k = 1; k <= (i + 1); k++) {
            str = str + k + " ";
        }
        console.log(str);
    }
}
console.log("7) Pyramid")
Pyramid(3)

// 8 Other thing
console.log("8)")
function Diamond(a) {
    for (i = 0; i <= a; i++) {
        txt = "";
        for (j = i; j < a * 2; j++) {
            txt += " ";
        }
        for (k = 0; k < (i + 1); k++) {
            txt += k + " ";
        }
        console.log(txt);
    }
    var txt = "";


    for (i = a - 1; i >= 0; i--) {
        txt = "";
        for (j = i; j < a * 2; j++) {
            txt += " ";
        }
        for (k = 0; k < (i + 1); k++) {
            txt += k + " ";
        }
        console.log(txt);
    }
}

Diamond(3)
