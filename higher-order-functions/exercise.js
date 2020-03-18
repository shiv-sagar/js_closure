// Challenge 1
function addTwo(num) {
    return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
 console.log(addTwo(3));
 console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + "s";
}

// uncomment these to check your work
 console.log(addS('pizza'));
 console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
    let newArr = [];
    for(let i = 0; newArr.length < array.length; i++){
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
}

function addTwo(n) {
    return n + 2;
}

// console.log(map([1, 2, 3], addTwo));

// Challenge 4
let alphabet = ""; 

function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i , array);
    }  

}
var letters = ['a',"b","c","d"];
forEach(letter,(char) => alphabet += char );

console.log(alphabet);

// see for yourself if your forEach works!

//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
    let newArr = [];
    array.forEach(val => newArr.push( callback(val) ) );
    return newArr;
}

function addTwo(val) {
    return val + 2;
}

console.log(mapWith( arr, addTwo) );

//Extension 2
function reduce(array, callback, initialValue) {}

//Extension 3
function intersection(arrays) {}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union(arrays) { 
    let array = arrays.flat();
    let result = array.reduce((acc,cv, i) => {
        if( !acc.includes(cv) ) {
            acc.push(cv);
        }
        return acc;
    }, [])
    return result;
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5
function objOfMatches(array1, array2, callback) {
    let obj = callback(array1,array2);
    return obj;
}

function getObj(array1, array2) {
    let cpyArr2 = array2.map(val => val.toUpperCase());

    return array1.reduce((acc,cv)=> {
        let pos = cpyArr2.indexOf(cv.toUpperCase());
        
        if (pos !== -1 && !Object.keys(acc).includes(cv)) {
            acc[cv] = array2[pos];
        }
        return acc;
      },{});
}


// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6
function multiMap(arrVals, arrCallbacks) {
    return arrVals.reduce( (acc,cv) => {
        acc[cv] = arrCallbacks.map(callback => callback(cv));
        return acc;
    },{})
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
