// Q. Write code to run `index.js` with content console.log('Welcome to Nodejs') in node environment ?
console.log('Welcome to Nodejs');
// Q. In above `index.js` file
// - require os module
let os = require('os');
// - write code to get `number of cpu's, free memory, uptime and version from os module`
console.log(os.cpus.length);
//Get memory in the  form of gb
let freeMemory = os.freemem();
console.log(`The free memory is : ${freeMemory / 1024 /1024 /1024}`);
console.log(`uptime is ${os.uptime()}`)
console.log(`version of the os is ${os.version()}`);
// - write code to require only readFile and unlink method from fs module.

// Q. Create 2 files

// get first  the fs module
let fs = require('fs');
//   1. area.js
fs.writeFileSync('area.js' ,'');
//   2. app.js
fs.writeFileSync('app.js' , '');
//   3. In area.js write functions to calculate area of square, rectangle and circle and export them using module.exports
//   4. In app.js, require functions from area.js and execute the areas of given figures and console.log the results.

// Q. Write 2 different methods for creating buffer in nodejs using Buffer class.
// - create a fixed length buffer of 12.
let buff1 = Buffer.alloc(12);
let buff2 = Buffer.allocUnsafe(12);
// - write code to convert buffer back to string.
buff1.write('Hey Rahul thakur here');
buff2.write('This is a example of buff2');
// Q. Write code example to demonstrate blocking and non-blocking code.
// Now converting  this buffer hex code into real  string  by using  the to string methods 

console.log(buff1.toString());
console.log(buff2.toString());