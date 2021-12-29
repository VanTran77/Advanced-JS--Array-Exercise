// --------------------- Exercise 1 ------------------------------- //
// Write a function filterRange(arr, a, b) that gets an array arr, 
// looks for elements between a and b in it and returns an array of them.

let filterRange = (arr, a, b) => {
    return arr.filter((item, i) => { //item numbers of arr, i: index of arr run from 0-7
        val=item;
        if (val < a || val > b) {
            return false;
        }
        return true;
    })
}

let arr=[2,3,4,0,2,9,5,16,12,11];
let filtered = filterRange(arr,1, 5);
alert(filtered);
alert(arr);

// ------------------------------------------------------------ //
// ---------------- Exercises 2 -------------------- //
// You have an array of user objects, each one has user.name. 
// Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(x => x.name);

console.log(names);
alert(names);
// -------------------------------------------------- //

// ---------------- Exercises 3 ---------------------//
// Write the function getAverageAge(users) that gets 
// an array of objects with property age and gets the average.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

let getAverageAge = age => {
    let ages = age.map(x => x.age);
    return everageAge =  ages.reduce((total, amount, index, array) => {
            // console.log(index);
            // console.log(array.length);
            total += amount;
            if (index === array.length-1){
                return total / array.length;
            }else {
                return total;
            }
    });
}

console.log(getAverageAge(arr));
