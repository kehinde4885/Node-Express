const name = "Kehinde"
const amount = 5

if (amount < 10) {
    console.log("Free")
}

console.log("its my first node app")

console.log(__dirname);

console.log(__filename)

// I have access to Javascript Functions and Methods
// setInterval(() => {
//   console.log("Hello Kehinde");
// }, 1000);



//Node uses Common Js modules syntax
const names = require('./module.js')
const sayHi = require('./utils')

console.log(names)


console.log(sayHi)


sayHi("Mary")


//Os Module
// Interacting with the operating system and the server

const os = require("os")

user = os.uptime()

console.log(user/3600)

//Built in http module- built into nodejs
const http = require('http')

const server = http.createServer((req, res) => {
    res.write('Wow it actually works')
    res.end()
    //console.log(req)
    console.log(res)
})

server.listen(5000)


// npm is node package manager, it comes built in with node

//Using 3rd Party Packages

const lodash = require('lodash')

console.log(lodash)

///
const { readFile, writeFile } = require("fs");

console.log("started a first task");
// CHECK FILE PATH!!!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("back to the async read File task");
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");



// This code is implemented to Showcase Delay
// Synchronous NodeJS and Event Loop using 
// the for loop

const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Home Page')
    }
    else if (req.url === '/about') {
        // blocking code
        for (let i = 0; i < 1000; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    }
    else { res.end('Error Page') }
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})