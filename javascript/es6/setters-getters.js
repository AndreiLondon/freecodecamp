/*
You can obtain values from an object and set the value 
of a property within an object.

These are classically called getters and setters.

Getter functions are meant to simply return (get) 
the value of an object's private variable to the 
user without the user directly accessing 
the private variable.

Setter functions are meant to modify (set) 
the value of an object's private variable based 
on the value passed into the setter function. 
This change could involve calculations, 
or even overwriting the previous value completely.

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

*/

// Only change code below this line
class Thermostat {
    constructor(fahrenheit) {
        this._fahrenheit = fahrenheit
    }

    get temperature() {
        return (5 / 9) * (this._fahrenheit - 32);
    }

    set temperature (celsius) {
        return this._fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in Celsius

  //other solution

  class Thermostat {
    constructor(fahrenheit) {
      this._celsius = (5 / 9) * (fahrenheit - 32);
    }
    
    get temperature() {
      return this._celsius;
    }
    
    set temperature(celsius) {
      return this._celsius = celsius;
    }
  }

  //other solution

  class Thermostat {
    constructor(fahrenheit) {
      this._kelvin = (5 / 9) * (fahrenheit - 32) + 273.15;
    }
    
    get temperature() {
      return this._kelvin - 273.15;
    }
    
    set temperature(celsius) {
      return this._kelvin = celsius + 273.15;
    }
  }