// 1 current date
var date = new Date()
console.log(`1) Today is: ${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`)

// 2 Leap Year
function leapyear(year){
if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    console.log(`2) True`);}
else {
    console.log(`2) False`);}
}

leapyear(2020)

//3 Consecutive array
function consArray(array) {
    var seq = 0;
    for (var i = 0; i < array.length-1; i++) {
        {         
           if (array[i+1] - array[i] != 1){
               seq += 1
           }
        }
    }
    if(seq < 1){
        console.log("3) True");
    } else{
        console.log("3) False");
    }
}

consArray([1,2,3,5]);

//4 check same number multiple times
function multipleTimes(array) {
    var seq = 0;
    array = array.sort();
    for (var i = 0; i < array.length-1; i++) {
        {         
           if (array[i+1] == array[i]){
               seq += 1
           }
        }
    }
    if(seq < 1){
        console.log("4) No duplicates found");
    } else{
        console.log("4) Array contains duplicate elements");
    }
}

multipleTimes([1,2,3,5,2]);

//5 script first element of array
function firstElement(n){
    var str = [7,9,0,-2]
    console.log("5) " + str.slice(0, n))
}

firstElement(6)

//6 join all elements array
    var array = ["Banana", "Tequila"];
    var joinArray = array.join(", ");
    console.log("6) " + joinArray);

//7 Most frequent item of an array
function mostFrequent(array){
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<array.length; i++)
{
        for (var j=i; j<array.length; j++)
        {
                if (array[i] == array[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = array[i];
                }
        }
        m=0;
}
console.log("7) " + item +" ( " +mf +" times ) ") ;

}

mostFrequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

//8 Combine arrays

function ordinal_suffix_of(i) {
    var color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"]
    var j = i % 10,
        k = i % 100;
    if (j == 1) {
        return "8) " + i + "st choice is " + color[0];
    }
    if (j == 2) {
        return "8) " + i + "nd choice is " + color[1];
    }
    if (j == 3) {
        return "8) " + i + "rd choice is " + color[2];
    }
    return "8) " + i + "th choice is " + color[i-1];
}
console.log(ordinal_suffix_of([3]));


//9 find duplicates
function findDuplicate(array) {
    var object = {};
    var result = [];

    array.forEach(function (item) {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (var prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

console.log(`9) ${findDuplicate([9, 9, 111, 2, 3, 4, 4, 5, 7, 6])}`);

//10 Function to reverse string
function reverseString(string){
    console.log("10) " + string.split("").reverse().join(""));
}
reverseString('Hello');

//11 Palindrome?
function palindrome(string){
    string = string.toLowerCase();
    if (string == string.split("").reverse().join("")){
        console.log(`11) "True"`)
    }
    else{
        console.log(`11) "False"`)
    }
}
palindrome('Lol');

//12 Generate all outcomes string dog d, do ,dog etc
function dog(string){
    a_list = []
    // for (var i=0; i<string.length; i++){
    //     console.log(string[i])
    //     if(string[i]  )
    //     // for (var j=1; j<string.length; j++){
    //     //     // console.log(string[i])
    //     //     console.log(string[j])
    //     //     if(!string.includes(string[i])){
    //     //         a_list.push(string[i])
    //     //     }
    //     // }


    // }
    // console.log(a_list)

}

dog("dog")



//13 Alphabetical string
function alphabetical(string){
    console.log("13) " + string.split("").sort().join(""));
}

alphabetical("nice");

//14 Return second highest and lowest
function second(){
    var array = [1,2,3,4,5];
    var a = array.slice(1, 2);
    var b = array.slice(-2, -1);
    console.log(`14) ${a}, ${b}`);
}
second();

//15 Remove all duplicates
function removeDuplicates(array){
    var removed = [];

    for(i=0; i< array.length; i++){
        if(removed.indexOf(array[i]) === -1){
            removed.push(array[i]);
        }
    }
    console.log("15) " + removed.join(""));
}

removeDuplicates("Thequickbrownfoxjumpsoverthelazydog")