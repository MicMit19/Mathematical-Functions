function sayHello() {
var insults = ["You", "You're a", "You smell like", "You look like a", "You are as smart as a", "You stinky"];

var insultsAdj = ["Poop", "Horse", "Pig", "Elephant", "Skunk", "Monkey"];

window.alert(insults[Math.floor(Math.random()*5)] + " " + insultsAdj[Math.floor(Math.random()*5)]);
}