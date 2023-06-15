/*

A promise in JavaScript is exactly what it sounds 
like - you use it to make a promise to do something, 
usually asynchronously. When the task completes, 
you either fulfill your promise or fail to do so. 
Promise is a constructor function, so you need to 
use the new keyword to create one. It takes a function, 
as its argument, with two parameters - resolve and reject. 
These are methods used to determine the outcome of the promise. 

Create a new promise called makeServerRequest. 
Pass in a function with resolve and reject 
parameters to the constructor.
*/

const makeServerRequest = new Promise((resolve, reject) => {

});


//Part2

const makeServerRequest1 = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        // Change this line
        resolve("We got the data")
    } else {
        reject("Data not received")
        // Change this line
    }
});

/*
Promises are most useful when you have a process 
that takes an unknown amount of time in your code 
(i.e. something asynchronous), often a server request. 
When you make a server request it takes some amount 
of time, and after it completes you usually want to do 
something with the response from the server. 
This can be achieved by using the then method. 
The then method is executed immediately after your 
promise is fulfilled with resolve. Here’s an example:
*/

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

//part3

const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {	
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result);
  });

//catch

const makeServerRequest4 = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  
  });
  makeServerRequest.catch(error => {
    console.log(error);
  })
  makeServerRequest.then(result => {
    console.log(result);
  });