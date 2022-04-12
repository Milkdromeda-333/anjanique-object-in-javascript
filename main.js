var anjanique = {
    career: "Web Developer",
    age: 22,
    favoriteColors: ["purple", "brown", "pink", "black"],
    married: true,
    //This method adds a year to the age when called
    birthday: function() {
        this.age++
    }
}

console.log(anjanique.age)// outputs 22
anjanique.birthday() // calls the method and adds a year to age
console.log(anjanique.age) // outputs 23

// This is a constructor function
function person(name, age, career) {
    this.name = name,
    this.age = age,
    this.career = career
}

var person1 = new person("Anjanique", 22, "Web Developer");
var person2 = new person("William", 22, "Data scientist");
var person3 = new person("Buddy", 9, "Pro cutie");

console.log(person1.career) // outputs Web developer
console.log(person2.name) // outputs Wiilliam
console.log(person3.age) // outputs 9
