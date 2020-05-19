# **Introduction to Built-In Higher Order Function in Javascript**

## **What is Higher Order Function ?**

Simply put, Higher Order Function (HOF) is a function that takes function as an argument AND/OR returns another function. 

## **Why Use it ?**

There are already such thing as For loop, While loop and other looping function, then why bother learn HOF ?

[This Article](https://programmingwithmosh.com/javascript/what-are-higher-order-functions-in-javascript/) lists the benefits of using HOF, there are:

- Simple and Elegant Code
- Fewer Bug
- Easy to Test and Debug

## **Constraint**

This post will cover only the built-in higher order function in Javascript for Array, there are:

- Array.prototype.forEach
- Array.prototype.map
- Array.prototype.filter

If you want to dive in more into higher order function concept, please visit [this link](https://eloquentjavascript.net/05_higher_order.html)

## **Built-in higher order function**

In Javascript, there's **so many** built in function you can use, it sometimes became **overwhelming**. So we start simple, just 3 built-in function that are frequently used both in Frontend and Backend, that is map(), forEach(), and filter().

We'll use this array for the rest of the examples below.
```javascript
const animals = [
  {
    type: "Cat",
    sound: "Meow!",
    legs: 4
  },
  {
    type: "Dog",
    sound: "Woof!",
    legs: 4
  },
  {
    type: "Duck",
    sound: "Quack!",
    legs: 2
  },
]
```

## **Array.prototype.forEach**

**forEach() anatomy**
> array.forEach( function( currentValue, index, arr ), thisValue )

forEach() function is useful when you ***only need to loop the item in the array ONCE***, meaning that you can't make a new array based on another array using forEach by directly assigned to it.

Say we want to print the "sound" value in the animals array.

In traditional for loop, we do it this way:
```javascript
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i].sound)
}

//output:
// Meow!
// Woof!
// Quack!
```

In built-in forEach() function is done this way:
```javascript
animals.forEach((item) => { 
  console.log(item.sound)
})

//output:
// Meow!
// Woof!
// Quack!
```

As you can see the output is the same, the different here is just in forEach() you don't need to provide exact length of the array, it will automatically detect the length and loop it in order.

## **Array.prototype.map**

**map() anatomy**
> array.map( function( currentValue, index, arr ), thisValue )

The map() function is useful when you want to ***make a new array based on another array***. You can assign it directly to array you want to create.

Let's say we want to make a new array that only store the type of the animals.

In traditional for loop, we do it this way:
```javascript
let newAnimals = []

for (let i = 0; i < animals.length; i++) {
  newAnimals.push(animals[i].type)
}

console.log(newAnimals); 
//output [ 'Cat', 'Dog', 'Duck' ]
```

In built-in map() function is done this way:
```javascript
let newAnimals = animals.map((item) => { 
  return item.type
})

console.log(newAnimals); 
//output [ 'Cat', 'Dog', 'Duck' ]
```

As you can see in map function you write less and tidier code, while maintaining the correct result. If you replace the "map" to "forEach" the result will be undefined, because forEach purpose is just to loop, but **map while also looping, it create new array too**.


## **Array.prototype.filter**

**filter() anatomy**
> array.filter( function( currentValue, index, arr ), thisValue )

The filter() function is useful when you want to ***show filtered data***. You can assign it directly to array you want to create.

Let's say we want to make a new array that only store the *animals with more than 2 legs*.

In traditional for loop, we do it this way:
```javascript
let newAnimals = []

for (let i = 0; i < animals.length; i++) {
  if(animals[i].legs > 2){
    newAnimals.push(animals[i])
  }
}

console.log(newAnimals); 
// output: 
// [
//   { type: 'Cat', sound: 'Meow!', legs: 4 },
//   { type: 'Dog', sound: 'Woof!', legs: 4 }
// ]
```

In built-in filter() function is done this way:
```javascript
let newAnimals = animals.filter((item) => { 
  return item.legs > 2
})

console.log(newAnimals); 
// output: 
// [
//   { type: 'Cat', sound: 'Meow!', legs: 4 },
//   { type: 'Dog', sound: 'Woof!', legs: 4 }
// ]
```

As you can see, filter() function handle this kind of problem cleaner than traditionals way. That what filter does, it will only return array of data that met the condition, in this case it will only show animals that have more than 2 legs.

## **Conclusion**
The built-in HOF in Javascript is powerful and a lot easier to use once you has grasped the concept in it. And last question you might be wondering is "Will HOF (map, forEach and filter) replace traditional loop completely in the future ?", the answer is a **BIG NO**. See, HOF is just a helper function, under the hood they still use the traditional loop, and the purpose of HOF is just to encourage us to write "cleaner" code.


Thanks for Reading, hope it helps !

-Delarta


