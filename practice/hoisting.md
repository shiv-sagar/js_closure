## Hoisting Exercises

1. If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
//output - undefined
```

```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
// error - animal is not defined, cannot access "animal" before initializaion.
```

```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
// error - animal is not defined, cannot access "animal" before initializaion.
```

```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
//output will be the alert message "Hey Everyone"
```

```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
//output will be the alert message "Hey Everyone"
```

```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
//error-sayHello is not a function
```

```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
//error- sayHello is not defined, if will give reference error: cannot access "sayHello" before initialization.
```
