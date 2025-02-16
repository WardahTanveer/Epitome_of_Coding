/*console.log("Hello world");
let a=67;
console.log(a);
a="heyyyyyyy";
console.log(a);*/

/*Output of above:
Hello world
67
heyyyyyyy

- console.log(); is print function.
- prompt(); is input function (where () contains anything that can be used to explain what to input maybe. eg. "Enter no.: ").
- prompt() only works in browsers. For node.js, use prompt-sync or readline
- alert(); is like print function again. Only works in browser.
- 'typeof a' returns datatype of a.
- Value of a variable can be changed even if it is a different datatype.
- Semicolons at end of statements aren't necesarry everywhere but they are good practice.*/


/*var a="yo";
let b="hehe";
{
    var a="hi";
    let b="hii";
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);*/

/*LET, VAR AND CONST
- var -> Used in early days. It is globally scope i.e. can be used in or outside any block regardless of where it is declared (eg. in above, both console.logs print "hi" for a as it has been changed). It can also be re-declared i.e. we can use 'var a=...' multiple times within same scope. Bugs can be introduced into it, so avoid using.
- let -> It is block scoped i.e. can only be used in the block it is declared (eg. in above, b is hehe outside {} and hii inside {}). It cannot be re-declared i.e. using 'let b=...' after b has already been declared by var or let within same scope gives error.
- const -> It is block scoped but its value cannot be changed like var and let. It cannot be redeclared. Const variables should hold a value during declaration. We must do 'const c=...'. We cannot do 'const c' and then 'c=...'
Generally, prefer to use const over let over var.*/


/*PRIMITIVE DATATYPES
7 primitive datatypes (BBUNNSS)
- Boolean eg. let a=true; or let a=false;
- Bigint eg. let a=bigint(2345);
- Undefined eg. let a=undefined; or let a; (if no value is given, it is undefined by default)
- Null eg. let a=null;
- Number eg. let a=23;
- Symbol eg. let a=symbol("Yo");
- String eg let a="hello";*/

/*NON PRIMITIVE DATATYPES
Objects, arrays, functions
- Objects -> have key-value pairs (like dictionary in python)
eg. const item = {
    "name": "ABC",
    "age": 12
};
Accessing can be done using item["name"] or item."name"
In an object, we can add or update key-value pairs even if it assigned to a const variable.
item["class"]=2;
item["name"]="Harry";
- Arrays -> list of values of any datatypes
eg. const item = [1, "text", true, { key: "value" }, [5, 6]];
- Functions -> accept input, perform instructions and return value
eg1. sumno(a, b){
    return a+b
}
eg2. let a=func(){
    console.log("Hello");
};*/


/*OPERATORS
+ -> Addition
- -> Subtraction
* -> Multiplication
** -> Exponentiation
/ -> Division
% -> Modulus
++ -> Increment
-- -> Decrement
= -> Assign
+= -> Add to og and assign
-= -> Subtract from og and assign
*= -> Multiply with og and assign
/= -> Divide from og and assign
%= -> Take modulus from og and assign
**= -> Take power of og and assign
== -> is equal to
!= -> is not equal to
=== -> has equal value or type
!== -> does not have equal value or type
> -> greater than
< -> less than
<= -> less than or equal to
>= -> greater than or equal to
? -> ternary operator (eg. a=condition?valueiftrue:valueiffalse;)
&& -> logical and
|| -> logical or
! -> logical not*/


/*TYPECASTING(?)
eg. a=Number.parseInt(a) -> convert string to no.*/


/*CONDITIONAL OPERATORS
if(condition1){
    ...
}
else if(condition2){
    ...
}
else{
    ...
}
    
OR

switch(variable){
    case "val1":
        ...
        break;
    case "val2":
        ...
        break;
    default:
        ...
        break;
}
*/


/*LOOPS
for(initialization; condition; increment/decrement){
    ...
}

OR

for(variable in object){
    ...
}

OR

for(variable of array/string/map/set){
    ...
}

OR

while(condition){
    ...
}

OR

do{
    ...
}while(condition);*/


/*FUNCTIONS
function funcname(param1, param2, ...){
    ...
    return val1, val2, ...;
}

OR

const funcname = function(param1, param2, ...){
    ...
    return val1, val2, ...;
}

OR

const funcname = (param1, param2, ...) => {
    ...
    return val1, val2, ...;
}

- Functions may or may not have parameter(s)
- Functions may or may not return value(s)*/


//Printing marks of all students in an object (three ways)
/*let marks={
    Rahul: 90,
    Ram: 98,
    Harry: 77,
    Sonita: 99,
    Monika: 50
}
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}
for(let key in marks){
    console.log("The marks of " + key + " is " + marks[key]);
}
for(let [key, value] of Object.entries(marks)){
    console.log("The marks of " + key + " is " + value);
}*/

/*Object here is like a function library where:
- Object.keys() -> returns array of keys
eg. ["Rahul", "Ram", "Harry", "Sonita", "Monika"]
- Object.values() -> returns array of values
eg. [90, 98, 77, 99, 50]
- Object.entries() -> returns 2d array of key-value pairs
eg. [["Rahul", 90], ["Ram", 98], ["Harry", 77], ["Sonita", 99], ["Monika", 50]]
... etc.*/


//Function to write mean of 3 no.s
/*const prompt=require('prompt-sync')(); //Can also be "prompt" instead of 'prompt'
function mean4(a, b, c, d){
    return (a+b+c+d)/4;
}
a=Number(prompt("Enter number: "));
b=Number(prompt("Enter number: "));
c=Number(prompt("Enter number: "));
d=Number(prompt("Enter number: "));
console.log("Mean of " + a + ", " + b + ", " + c + ", " + d + " is " + mean4(a, b, c, d));*/


/*STRINGS
- Strings are character arrays (but immutable)
eg. let name="Rahul" //Same as name='Rahul'
console.log(typeof name); //String
console.log(name); //Harry
console.log(name[0]); //H
console.log(name[1]); //a

- '' and "" are same in strings. We can use ' in "" and " in ''.
- Strings are immutable i.e. reassigning to a string variable creates a new string and assigns it instead of changing the existing string (applies to functions like trim, concat etc too). Existing string remains in the memory.

TEMPLATE LITERALS
- ``(backquotes) is used to enclose them
- ' and " both can be used.
- Enter key can be a part of string. No need to use \n
- Other variables can be made part of the string. This is called string interpolation
eg. let name="Rahul";
let sentence=`${name} is great.`;
let sentence1=name + " is great."; //Same thing
- Expression evaluation also possible
eg. let a=2, b=3;
let sentence=`Sum of ${a} and ${b} is ${a+b}`;
- Basically an alternative for concatenating strings with variables.

ESCAPE SEQUENCE CHARACTERS
- Using \ before a character removes its significance.
eg. let fruit='Bana\'na';
console.log(fruit); //Bana'na
(length of Bana\'na will be 7 because \' is a single character)
- \n (newline), \t (tab), \r (carriage return)

STRING METHODS
eg. let name="Rahul";
- console.log(name.length) //5
- console.log(name.toUpperCase()); //RAHUL
- console.log(name.toLowerCase()); //rahul
- console.log(name.slice(2,4)); //hu  //4 not included
- console.log(name.slice(2)); //hul  //2 till end
- console.log(name.replace("u", "i")); //Rahil
- console.log(name.trim()); //removes whitespaces
- console.log(name.concat(" is ", "great", ".")) //Rahul is great.  //We can concatenate as many strings as we want. Any no. of arguments can be passed.
- console.log(name.includes("R")); //true (would be false if R was not in string)
- console.log(name.startsWith("Ra")); //true if string starts with substring
- console.log(name.endsWith("ahul")); //true if string ends with substring
- console.log(name.charAt(2)); //h
- console.log(name.match(regexp)); //returns array of first instance of matched string (null if no match)

REGULAR EXPRESSION (Regexp)
- String is enclosed in //. It has many variations like:
eg. /abc/ - match "abc"
eg. /abc/i - match "abc", ignoring upper or lowercase
eg. /a[bcd]e/ - match "abe" or "ace" or "ade"
eg. /abc?e/ - match "abe" or "abce"
eg. /abc{0,2}e/ - match "abe" or "abce" or "abcce"
eg. /abc/g - return all occurrences of matching in array, not just first instance (global match)

*/


//Program to find if a string contains a word
/*const prompt=require("prompt-sync")();
let a=prompt("Enter bigger string: ");
let b=prompt("Enter smaller string: ");
console.log(`'${b}' is${a.includes(b)?'':' not'} in '${a}'`);*/


/*ARRAYS
- Collection of items (of same or differing datatypes)
eg. let a=[1, 2, 3, 4];
console.log(a); //[1, 2, 3, 4]
console.log(a[0]); //1
console.log(a[4]); //Undefined //It is out of bounds (only 0-3 exist)

- Arrays are mutable.
eg. a[4]=5;
console.log(a); //[1, 2, 3, 4, 5]
a[2]=7;
console.log(a); //[1, 2, 7, 4, 5]

ARRAY METHODS
eg. let a=[1, 2, 3, 4]
- console.log(a.toString()); //1,2,3,4  //returns string form of a
- console.log(a.join("-")); //1-2-3-4  //makes a separator
- a.pop(); console.log(a); //[1, 2, 3] //removes last element (and returns removed element)
- a.push(5); console.log(a); //[1, 2, 3, 4, 5] //adds new element at end (and returns new length of array)
- a.shift(); console.log(a); //[2, 3, 4]  //Same as pop but for first element instead of last
- a.unshift(0); console.log(a); //[0, 1, 2, 3, 4]  //Same as push but at start instead of end
- delete a; //Removes all elements of array
- delete a[0]; console.log(a); //[<1 empty item>, 2, 3, 4]  //length of array remains same
- a1=concat(a, a); //[1, 2, 3, 4, 1, 2, 3, 4]  //concatanates two arrays
- a.sort(); console.log(a); //[1, 2, 3, 4]  //Changes og array into a sorted form (ascending according to ASCII values)
- sort() can also be given a compare function of two arguments a and b to determine how sorting is to be done. If compare function returns -ve no., a comes before b. If +ve, a comes after b. If 0, order is unchanged.
eg1. a.sort((a, b)=>b-a);  //[4, 3, 2, 1]
eg2. let l=[{name: 'Rahul', age: 25}, {name: 'Rohit', age: 32}, {name: 'Ram', age: 20}];
l.sort((a, b)=>a.age - b.age); //[{name: 'Ram', age: 20}, {name: 'Rahul', age: 25}, {name: 'Rohit', age: 32}]  //sorts in ascending order of age
eg3. function compare(a, b){
    b-a;
}
a.sort(compare);  //same as eg1.
- a.splice(1, 3, 100, 101, 102);  //[1, 100, 101, 102]  //Removes given no. of elements from given index and adds given elements from same start index  //Argument 1 is start index of removal, argument 2 is no. of elements to be removed from start index, argument 3 and beyond are elements to be added //If argument 2 goes out of bounds, elements till end are deleted. If it is 0, no elements are deleted. //Any number of elements can be inserted. //Returns deleted elements
- console.log(a.slice(2)); //[3, 4]  //new array having from index 2 till end
- console.log(a.slice(1,3)); //[2, 3] //3 not included
- a.reverse(); //[4, 3, 2, 1]  //reverse elements of array (modifies og array)
- Array.from("Rahul"); //["R", "a", "h", "u", "l"]  //Creates array from any other object

LOOPING WITH ARRAYS
- for loop
for(let i=0; i<a.length; ++i){
    console.log(a[i]);
}
- forEach loop
a.forEach(i)=>{
    console.log(i*i);
}
//If there are undefined elements in the middle of array, foreach loop skips those.
- for...of loop
for(let i of a){
    console.log(i);
}
- for...in loop
for(let i of a){
    console.log(i);
}

HIGHER ORDER ARRAY METHODS
- Map
Creates new array with some operation on each of og array's elements
eg. let a=[1, 2, 3, 4];
a1=a.map((i)=>{     //Arguments here are -> (value, index, array) eg. for first element, (1, 0, [1, 2, 3, 4])
    return i*i;
});
console.log(a1); //[1, 4, 9, 16]
- Filter
Creates new array containing elements which meet a specific condition
eg. let a=[1, 2, 3, 4];
a1=a.filter((i)=>{      //Arguments -> (value, index, array)
    i<3;
})
console.log(a1); //[1, 2]
- Reduce
Reduces values of an array to a singular value 2 at a time (one value being the resultant single value of previous iteration (aka accumulator))
eg. let a=[1, 2, 3, 4];
a1=a.reduce((i, j)=>{       //Arguments -> (accumulator, value, index, array)
    return i+j;
})
console.log(a1); //10*/

//Adding values to an array until 0 is received
/*const prompt=require('prompt-sync')();
let a=[];
let i=prompt("Enter element(0 to stop): ");
while(i!=0){
    a.push(i);
    i=prompt("Enter element(0 to stop): ");
}
console.log(a);*/

/*IN ANY WEBSITE
- HTML makes the skeleton
- CSS makes the styling
- JS makes the logic/interactions

JS IN THE BROWSER
- We can view the script of any website by right-click and then 'Inspect'

JS IN HTML
- Js can be used in html using <script> tap in two ways:
1. <script> ... </script>
2. <script src="script.js"></script>

ADVANTAGE OF USING SEPARATE SCRIPT FILE
1. Separation of concerns
2. Browser caching*/

/*CONSOLE METHODS
- console.assert() -> prints error if assertion is false, else nothing happens
- console.clear() -> clears console
- console.table() -> displays object in tabular form
- console.log() -> prints as normal text
- console.error() -> prints as error (highlighted in red)
- console.warn() -> prints as warning (highlighted in yellow)
- console.info() -> prints as normal, it will just be categorised as info
- console.time() -> starts a timer with given name
- console.timeEnd() -> ends a timer with given name*/

/*Since we're using js in browser, alert, prompt, confirm etc. become valid.
alert(text) -> displays dialogue box with text
prompt(text, default_value) -> displays dialogue box for input
confirm(text) -> displays dialogue box with option of OK (true) and Cancel (false)

They are not that good, however, because:
1. They look unappealing (old-fashioned) as they cannot be customised
2. They pause execution of script and we cannot interact with page before clearing them.

Instead, we can use modals.*/

/*DOM, BOM, WINDOW OBJECT
- Window Object is a global object by the name 'window' containing various methods to control browser window. eg. alert, atob, blur etc.
(console.log() can also be written as window.console.log(), alert() as window.alert() etc.)
- DOM is Document Object Model i.e. whole html page is made into one object and named 'Document' i.e entire html code is made into an object with methods.
eg1. document, document.body etc.
eg2. document.body.style.background="red" -> changes bg to red (not recommended. Only done when we want to do smth upon user's action)
- BOM is Browser Object Model i.e. additional objects provided by host environment(browser being one host environment). (like redirecting to another website when user clicks somewhere)
eg. alert(), prompt(), confirm() etc. are part of BOM
eg. location.href="https://..."*/

//Program to write a number to the page
/*alert("Enter value of a!");
let a=prompt("Enter a:", "45");
let w=confirm("Do you want to write it to the page?:");
if(w){
    document.write(a);
}*/

//Program to tell if a person can drive or not based on age, and if they want to see prompt again
/*function canDrive(a){
    return a>=18?true:false;
}
let runAgain=true;
while(runAgain){
    let age=Number(prompt("Enter age: "));
    if(age<=0){
        console.error("Error: Invalid age.");
    }
    else{
        if(canDrive(age)){
            alert("You can drive.");
        }
        else{
            alert("You cannot drive.");
        }
    }
    runAgain=confirm("Do you want to run again?");
}*/

//Program to redirect to google.com if user enters number greater than 4
/*let num=Number(prompt("Enter number:"));
if(num>4){
    location.href="https://google.com";
}*/

//Program to change background color based on user input
/*let color=prompt("Enter color:");
document.body.style.background=color;*/

/*DOM TREE
DOM tree is the html page where all nodes are objects. There are 3 types of nodes:
- Text nodes
eg. <p>Heyyyyy</p> (The 'heyyyyy' bit)
- Element nodes
eg. 
- Comment nodes
eg. <!-- Hey -->
eg. <html> is root node, <head> and <body are its children etc. Text node is always a leaf node.

AUTO CORRECTION
Browser sometimes automatically corrects html code
eg. <span> yo </div>
will be autocorrected to have </span> instead of </div>
eg. placing something outside the body makes broswer move it inside body

WALKING THE DOM
- How a typical html page looks
<html>
<head>
<title>...</title>
<body>
    ...
</body>
</html>
- document.body -> returns page body tag i.e. <body></body> (as object). It can sometimes return null if js is written before body tag (this is why we write js at end within body tag)
- document.head -> returns age head tag i.e. <head></head> (as object)
- document.documentElement -> returns page html tag i.e. <html></html> (as object)
- document.tile -> returns title (as string)

CHILDREM OF AN ELEMENT
- Children of a tag are its nested tags. Directly nested nodes are called child nodes and deeply (indirectly) nested children are called descendant nodes
*/

/*EXPLORING JS ADVANCED CONCEPTS

CLASS VS OBJECT
- Class represents any type of data.
- An object is an element/instance of a class.
eg. class Person{
}
var p=new Person;   //Here Person is class and p an object of that class.
- Class is similar to struct except it can also hold functions(methods) in its definition.
- Properties of class are like keys of dictionary. If there is no value assigned to property, it is 'undefined'.
- We can assign default values to them.
eg. class Person{
    name: ""; //name has default value "" instead of 'undefined'
    age: 0;
}
- We can also define methods in classes.
eg. class Person{
    name;
    age;
    display(){
        console.log("My name is " + this.name + " and I'm" + this.age + "years old.");
    }
}
- Object is an instance of a class. 'This' is like a placeholder for the object name while using properties. If we don't use 'this' before property name, it will give syntax error.
- We can think of class as a table schema and object of a class as a record in said table.
- In order to create an object and modify values of properties, we do following
eg. var p=new person;
p.name="Rahul";
p.age=3;
console.log(p)  //Variable p = Person { name: 'Rahul', age: 3 }
p.display();    //My name is Rahul and I'm 3 years old.
- We can also modify values in a single line by using a class constructor while defining the class itself.
eg. class Person{
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(My name is " + this.name + " and I'm" + this.age + "years old.")
    }
}
var p=new Person("Rahul", 3);   //No need to assign p.name and p.age separately
- In order to give default values while using constructor...
eg. class Person{
    name="";
    age=0;
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(My name is " + this.name + " and I'm" + this.age + "years old.")
    }
}
- New objects can be made from existing objects
eg. var p=new Person("Rahul", 3);
var p2=p;
var p3={...p};
//In first case above, if we make changes to p2, p will also be changed (they're basically pointing to the same memory).
// In second case, spread operator is used. If we make changes to p3, p will not be changed (two different memories with same value at time of creating p3). p3 is not an object of class Person here. (It only inherits properties and not methods)
- We can also add more properties in a specific object, even if it belongs to a class which doesn't have said property.
eg. var p=new Person("Rahul", 3);   //where Person only has name, age.
p.city="Delhi";    //adds new property
//OR
var p1=new Person("Rahul", 3);
- Btw we also have a class for arrays, so another way of declaring arrays is:
eg. var a=new Array(val1, val2, val3...);
var b=[val1, val2, val3...];    //a and b will be arrays with same values.
var c=new Array();  //c is empty array
- We also have a class for strings.
eg. var s=new String("Hello world.");
console.log(s);     //[String: "Hello world."]
- We also have a date class, in which the following methods are present:
eg. var d=new Date();    //gets current time instance info stored in d.
d.getFullYear();    //get year eg.2025
d.getMonth();    //get month no. (0-11 for Jan-Dec)
d.getDate();    //get date (1-31)
d.getDay();    //get day (0-6 for Sun-Sat)
d.getHours();    //get hours (0-23)
d.getMinutes();    //get mins (0-59)
d.getSeconds();    //get secs (0-589)
d.getMilliseconds();    //get ms (0-999)
d.getTime();    //get ms since 1970
d.getTimezoneOffset();    //get timezone difference in min from UTC*/


/*MULTITASKING IN JS
- JS is single-threaded i.e. can execute only one task at a certain time.
- By default we have synchronous execution aka code runs line by line and next line doesn't run until previous line finishes.
- Asynchronous execution is where longer tasks are executed in the back and subsequent lines of code continue executing.

CALLBACK
- Callback function is a way to pass function as an argument to another function.
eg. namegreet(name, callback){
        console.log("Hello", name);
        callback();
    }
    greet(){
        console.log("Greetings to you.");
    }
    namegreet("Rahul", greet);

SETTIMEOUT
- setTimeout() schedules a function to run after a delay of specified milliseconds. We specify function to be executed, delay in milliseconds, then any parameters that have to be given to function.
- Syntax -> setTimeout(function, delay (in ms), param1, param2...);
eg. console.log("Start");
    setTimeout(()=>{
        console.log("Task with delay");
    }, 2000);
    console.log("End");
//prints Start, then End, then Task with delay

SETINTERVAL
- setInterval() executes any function repeatedly at regular intervals.
- Syntax -> setInterval(callback, interval (in ms));
eg. var count=1;
    setInterval(()=>{
        console.log(count);
        ++count;
    }, 1000);
//Prints incremented numbers every second

CLEARINTERVAL
- clearInterval() is used to stop setInterval()
eg. var timer = setInterval(()=>{
        console.log("Hello");
    }, 1000);
    setTimeout(()=>{
        clearInterval(timer);
    }, 5000);
eg2. var count=1;
    var timer = setInterval(()=>{
        console.log("Hello");
        if(count>=5){
            clearInterval(timer);
        }
        ++count;
    }, 1000);
- In eg2, count will still increase after clearInterval() is done. Timer will complete its current iteration and then be stopped.

PROMISE CLASS
- It is an alternative to callback. It uses a callback function of form callback(resolve, reject)
- resolve() -> function that calls then(callback) method (success case)
- reject() -> function that calls catch(callback) method (failure case)
- Resolve function must always be called. Reject function doesn't need to be. (it's like if and else)
- Resolve and reject also contain within them the parameters that will be passed to then and catch respectively.
- In then and catch, we refer to these parameters as message/value and error respectively (just a convention)
eg. var p=new Promise((resolve,reject)=>{
        a=2;
        if(a==2){
            resolve("a is 2.");
        }
        else{
            reject("a is not 2.");
        }
    })
    p.then(message=>{
        console.log("Success:", message)})
    .catch(error=>{
        console.log("Failure:", error)})
- p.then().then().catch(); -> In case of resolve, it will execute first then, return value of first then as parameter into second then. In case of reject, only catch will run.
- Promise.all([p1,p2,p3]).then(messages=>{console.log(messages)}) -> then executes when all processes are complete. messages contain array of messages of all promises in order.
- Promise.race(p1,p2,p3).then(message=>{console.log(message)}) -> then executes when one process is complete. message contains that of complete process.

WAIT
- Returns a Promise object.
- Syntax -> wait(timeout);
eg. function wait(a){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(a);
            }, a*1000);
        }
    }
    wait(2).then(message=>{
        console.log("Waited for", message, "seconds.")
    })
- The wait function isn't an inbuilt function. It's just the commonly used term for a function that just waits a certain time. (Kinda like sleep in shell)

TIME
- Another function like wait. Not built in but we can make it.
- Returns current time.
eg function time(){
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    if(h<10){
        h="0"+h;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }
    return h+":"+m+":"+s;
}
    
ASYNC & AWAIT
- Async is used to declare an asynchronous function.
eg. async function greet(){
        return "Hello world";
    }
    hello().then(message=>{console.log(message));
- Async make function return a promise. Any value returned is by default considered the 'message' of resolve() function.
- Await is used inside async functions to make it act like a synchronous function i.e. it make it wait for a promise to be resolved before moving on.
eg. async function greet(){
        var a=await new Promise((resolve, reject)=>{
            good=true;
            if(good){
                resolve("Hello good person!");
            }
            else{
                reject("No hellos for bad people!");
            }
        });
        console.log(a);
    }
    greet();
- We can use try-catch in order to handle the reject case, else it will throw error as greet's await will never be fulfilled. (displays 'Uncaught (in promise) <error message in reject()>')
eg. async function greet(){
        try{
            var a=await new Promise((resolve, reject)=>{
                good=true;
                if(good){
                    resolve("Hello good person!");
                }
                else{
                    reject("No hellos for bad people!");
                }
            });
            console.log(a);
        }
        catch(error){
            console.log(error);
        }
    }
    greet();
*/

/*ADDITIONAL IMPORTANT TOPICS (suggested by ChatGPT for me to include)

PROTOTYPE & INHERITANCE
- prototype is a keyword used to add variables or methods into a class.
eg. class Person{
        constructor(name="", age=0){
            this.name=name;
            this.age=age;
        }
    }
    Person.prototype.species="Human";
    Person.prototype.greet=function(){console.log("Hello", this.name, "you are a", this.species);};
    var alice=new Person("Alice", 20);
    alice.species="Fairy";
    alice.greet();  //Hello Alice you are a Fairy
- a._proto_ gives prototype of a.
eg. in above eg., alice._proto_=Person.prototype;
- Prototype searching is when js looks up prototype chain of a class when it can't find a variable/method in the class definition.

CLOSURES
- It is when a function accesses a variable declared outside its scope.
eg. function outer(){
        let a=0;
        return function inner(){
            ++a;
            console.log("Count:", a);
        }
    }
    let counter=outer();
    counter();  //Count: 1
    counter();  //Count: 2
    counter();  //Count: 3
(In above program, outer is executed once and it returns inner function to counter. Every time counter is called, value of a is increased and printed.)
- This also helps in creating private variables. eg. a in above example cannot be accessed globally.

DESTRUCTURING
- It is an alternative method of assigning variables.
eg1. let a=[1,2,3,4];
let [a1,a2]=a;  //a1=1, a2=2
let [a1,,a3]=a; //a1=1, a3=3
let [a1,...a2]=a;   //a1=1, a2=[2,3,4]
eg2. let a={name:"Rahul", age=20, address:{city:"Delhi"}};
let {name,age}=a;    //name="Rahul", age=20
let {name:b, age:c}=a;  //b="Rahul", c=20
let {name:b, address:{c}}=a; //b="Rahul", c="Delhi"
let {name:b, age:c=0}   //b="Rahul", c=20 (c=0 if, say, age wasn't a key in object a)

SPREAD AND REST
- Both spread and rest are written as '...', but have different uses.
- Spread is used to unpack values of an array/object
eg1. let a=[1,2,3,4];
let b=[...a,5,6];   //b=[1,2,3,4,5,6]
let c=[a,5,6]       //c=[[1,2,3,4],5,6]
eg2. let a={name:"Rahul", age=20};
let b={...a, city:"Delhi"}; //b={name:"Rahul", age:20, city:"Delhi"}
let c={a, city:"Delhi"};    //c={{name:"Rahul", age:20}, city:"Delhi"}
- Rest is used to pack values into an array
eg1. function summ(...a){   //a is an array of any no. of arguments
        return a.reduce((total, num)=> total+num, 0)
    }
eg2. let a=[1,2,3,4];
let [b,...c]=a;     //b=1, c=[2,3,4]

OPTIONAL CHAINING
- Using ? in chains to avoid errors. If it finds the next part of chain, it accesses it, else returns 'undefined'.
eg1. let a={name:"Rahul", age:20, greet:()=>"Hello"};
console.log(a.name);    //"Rahul"
console.log(a.city);    //Gives error
console.log(a?.city);   //Undefined
console.log(a.greet?());    //"Hello"
console.log(a.hey());   //Gives error
console.log(a.hey?());  //Undefined
console.log(a?.hey());  //Undefined
eg2. let a=[1,2,3,4];
console.log(a?.[0]);    //1
console.log(a?.[5]);    //Undefined
console.log(a[5]); //Undefined (throws error if a=null/undefined)

MODULES
- Module is any js file that exports or imports stuff. It helps to have smaller files and more structured js code.
eg. Creating module that exports - fname.js:
export const pi=3.14159;
export function add(a,b){
    return a+b;
}
export function sub(a,b){
    return a-b;
}
export function mult(a,b){
    return a*b;
}
export function div(a,b){
    return a/b;
}
Creating module that imports - script.js:
import {add, sum} from "./fname.js";
console.log(pi);  //3.14159
console.log(add(2,3));  //5
- Other ways to export and import:
eg. export default const pi=3.14159;    //No need to enclose pi in {} while importing. There can only be one default export.
eg. import pi from "./fname.js"   //Can only be done for default export
eg. import pi, {add, sum} from "./fname.js" //Exporting both default and normal exports. Default should always come before normal exports.
eg. import * as alias from "fname.js"   //Exports can be accessed as alias.<export> eg. alias.pi=3.14159
eg. import("./fname.js");   //Asynchronous way of importing. Returns a promise. Must use await or .then()
eg. <script type="module" src="fname.js"></script>  //in html. Tells browser that the js file is a module
eg. <script type="nomodule" src="smth.js"></script> //in html again. Used for backward compatibility as old browsers don't support modules.

EVENT LOOP & MICROTASK QUEUE
- In js, tasks are run in different queues:
1) Call stack - synchronous code
2) Web APIs - asynchronous code
3) Callback queue - Timers (setTimeout, setInterval), eventListeners (click, keyup) etc.
4) Microtask queue - Promises, callbacks, async/await
- Event loop manages all these. Priority -> call stack > microtask > callback
- Web API doesn't have any priority of its own.

FETCH API & AJAX
- AJAX is kinda outdated so not recommended to use. And Im too lazy to understand what it does.
- Fetching API is the modern way of making network requests. It uses fetch() which returns a promise.
eg. fetch("https://...")
.then(response=>response.json())
.then(data=>console.log(data))
.catch(error=>console.log(error));
- Only links with origin policy CORS (Cross-Origin Resource Sharing) can be fetched. Some links require API keys, some block fetch altogether, local files cannot be accessed (type "file://...") etc.

AXIOS
- Another way of making network requests.
eg1. axios.get("https://...")
.then(response=>console.log(response.data))
.catch(error=>console.log(error));
eg2. axios.post("https://jsonplaceholder...", {
    title: "Hello",
    body: "This is the main text.",
    userId: 1
})
.then(response=>console.log(response.data))
.catch(error=>console.log(error));
(In eg2, jsonplaceholder links expect an object having keys title, body, userId. So that's what we used.)
*/
