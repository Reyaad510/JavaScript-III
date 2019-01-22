/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. For window binding the "this" keyword refer itself to the window. If you do not have a specific use for "this" keyword it will point back to the window.

* 2. For below harry will be the 'this' for the useSpell method. By looking to the left of the invocation you will find what the "this" keyword will be referring too.



* 3. With new binding whenever a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function. A constructor function is a function that returns an object. It's an object creator.





* 4. Explicit Binding is when using javascript's call or apply or bind method, "this" is explicitly defined. Allows you to combine values from objects and arrays. Allows to control which "this" keyword is applied.



*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHi() {
    console.log(this);
}
sayHi();
// Window



// Principle 2

// code example for Implicit Binding

const harry = {
    name: 'Harry Potter',
    weapon: 'wand',
    muggle: false,
    useSpell: function() {
        console.log(`${this.name} uses his ${this.weapon} and says: "Wingardium Leviosa!!"`);
    }
}

harry.useSpell();





// Principle 3

// code example for New Binding

function Nintendo(character) {
    this.character = character;
    this.company = 'Nintendo';
    this.origin = function() {
        console.log(`${this.character} is a famous character created from a company called ${this.company}`);
    }
}

const kirby = new Nintendo('Kirby');
const link = new Nintendo('Link');

console.log(kirby);
console.log(kirby.origin());
console.log(link.origin());





// Principle 4

// code example for Explicit Binding

const mario = {
    name: 'Mario'
}

const powerUps = ['Mushroom', 'Fireflower', 'Starpower'];

function myPowerUps(powerUps) {
    console.log(`${this.name} powerups are the following:${powerUps} `)}

    myPowerUps.call(mario, powerUps);