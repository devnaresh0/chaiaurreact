// let myName = "Naresh"
// let mychannel = "Chai"
// console.log(myName.trueLength);


let myHeros = ["thor","Spiderman"]

const User = {
    name: "chia",
    email: "chai@google.com"

}
let heroPower = {
    thor: "Hammer",
    Spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.Spiderman}`);
        
    }

}

Object.prototype.hitesh = function(){
    console.log('hitesh is present is all objects');
    
}

Array.prototype.heyHitesh = function() {
    console.log("Hitesh says hello");
    
}
// heroPower.hitesh()
myHeros.hitesh()
myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false,

}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = User 


// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChiaaurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true lenght is : ${this.trim().length}`);
    

    
}
anotherUsername.trueLength()
"hitesh".trueLength()
"icetea".trueLength()