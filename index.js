// Iteration 1: Names and Input

//1.1.- Create a variable hacker1 with the driver's name.
let hacker1 = "Driver's name";

//1.2.-Print "The driver's name is XXXX".
console.log("The driver's name is " + hacker1);

//1.3.- Create a variable hacker2 with the navigator's name.
let hacker2 = "Navigator's name";

//1.4.- Print "The navigator's name is YYYY".
console.log("The driver's name is " + hacker2);

// Iteration 2: Conditionals

/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/



if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
  }

// Iteration 3: Loops

//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".
let newDriverName = "";
for (let i = 0; i < hacker1.length; ++i) {
       newDriverName += hacker1[i].toUpperCase() + " ";
        
    }console.log(newDriverName.trim()); 


//3.2 Print all the characters of the navigator's name, in reverse order, i.e., "nhoJ".

let newNavigatorsName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newNavigatorsName += hacker2[i];
}
console.log(newNavigatorsName);

/*3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first definitely.
What?! You both have the same name?*/

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
  console.log("The driver's name goes first.")
}
else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.")
}
else {
  console.log("What?! You both have the same name?")
} 

/* Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas feugiat libero, sed accumsan velit aliquam at. Aenean auctor nulla suscipit metus ultrices, et placerat felis cursus. Vivamus in pharetra nulla, in pellentesque tortor. Vivamus eu neque et leo dignissim dictum quis vitae justo. Nulla viverra maximus neque. Fusce dui augue, sagittis porta dolor ut, gravida fermentum nibh. Nullam sit amet dolor tellus. Pellentesque gravida magna vitae risus vulputate, at tempor orci interdum. In cursus varius ipsum, ut ultrices risus aliquet vitae. Nunc nisl nisl, pellentesque sed placerat a, rutrum ut mauris. Morbi at ornare risus. Pellentesque pharetra fringilla rhoncus.

Donec ante sapien, dictum sit amet rutrum eu, semper et velit. Aenean vehicula interdum lectus, ut pellentesque orci laoreet ac. Duis posuere porttitor quam, eget scelerisque justo rutrum a. Nulla facilisi. Mauris consequat quam nibh, eu blandit ligula feugiat sit amet. Maecenas non orci molestie, luctus sapien ut, rutrum sapien. Suspendisse sed laoreet lorem, in elementum sem.

Sed pretium urna lacus, ac laoreet massa vestibulum quis. Maecenas tellus ex, porta in gravida in, posuere a enim. Proin rutrum ligula id dolor sodales, nec commodo dolor maximus. Sed facilisis, tortor ut placerat vehicula, ipsum turpis interdum nisl, vel auctor nisi tortor id enim. Nullam lobortis dui et venenatis faucibus. Sed porta egestas dui ac tristique. Proin aliquam justo vel dictum convallis.`;

let wordsCount = 0;

let etCount = 0;

let splittedText = longText.split(' ');

for (let i =0; i<splittedText.length; i++) {
    if (splittedText[i]/* .includes('\n') */) {
        wordsCount++;
    }else if(splittedText[i] === 'et' || splittedText[i] === 'et.'){
        etCount++;
    }
   
}
console.log(`Words count: ${wordsCount}` )
console.log(`Et count: ${etCount}` )