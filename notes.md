## math object

Math.floor(Math.random() * 6); => returns a random # 0-5
Math.floor(Math.random() * 6) + 1; => returns a random # 1-6

- if/else
```
if(){

  //will run code if condition is true

  } else {

  //will run code if condition is false

}
```

- if/else if

```
if(parseInt(guess) === randomNumber){
  correctGuess = true;
} else if(){

} else if (){

}

// write another if/else to print the message to the page if it is correct or not correct
if (correctGuess){
  document.write('<p>You guessed the number!</p>')
} else {
  document.write('<p>Sorry, the correct number was ' + randomNumber + '.</p>');

}

* object literals

```
{
  firstName: "Lindsay",
  lastName: "Williams"
}
```

** the object has two properties with the values: firstName 'Lindsay' and lastName 'Williams'

* values denoting missing info are undefined (no value or uninitialized variables - var foo; foo => undefined) and null(no object)

### array methods
* var arr = [ 'a', 'b', 'c' ];

* arr.slice(1, 2)  // copy elements
[ 'b' ]
* arr.slice(1)
[ 'b', 'c' ]

* arr.push('x')  // append an element
4
* arr
[ 'a', 'b', 'c', 'x' ]

* arr.pop()  // remove last element
'x'
* arr
[ 'a', 'b', 'c' ]

* arr.shift()  // remove first element
'a'
* arr
[ 'b', 'c' ]

* arr.unshift('x')  // prepend an element
3
* arr
[ 'x', 'b', 'c' ]

* arr.indexOf('b')  // find the index of an element
1
* arr.indexOf('y')
-1

* arr.join('-')  // all elements in a single string
'x-b-c'
* arr.join('')
'xbc'
* arr.join()
'x,b,c'

#### Functions:
a set of instructions that you want to run over and over and over again.

1) basic structure of a function

```
function myFunction() {
  // do a bunch of stuff here
}
```
