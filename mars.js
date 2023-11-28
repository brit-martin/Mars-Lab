alert('Hello!');
alert('Starting your Mars Adventure!');
alert('Booting up...');
alert('All systems go!');
alert("Let's Start")

const username = prompt("Hi there. What's your name?");
alert(`Hi ${username} --- Welcome to The Mars Adventure Game.`);
alert("Yesterday, you recieved a call from your good friend as Nasa");
alert("They need someone to go to Mars this weekend, and YOU'VE been chosen!!");

let excited = prompt('Are you excited? Type Y or N');
excited = excited.toUpperCase();
if (excited === "Y"){
    alert("I knew you'd say that. It's cool that you're going to Mars!");
} else if (excited === "N"){
    alert("Well, it's too late to back out now.");
}

alert("It's time to pack for your trip to Mars.");
let numSuitcases = prompt("How many suitcases do you plan to bring?");
numSuitcases = Number(numSuitcases);
if (numSuitcases > 2){
    alert("That's way too many. You'll have to pack more lightly.");
} else if (numSuitcases <= 2){
    alert("Perfect. You'll certainly fit in the spaceship!");
}

alert("You're allowed to bring one companion animal with you.");
let companionType = prompt("What kind of companion animal would you like to bring?");
let companionName = prompt("what is your companion's name?");
let firstLetter = companionName[0];
console.log(firstLetter)
firstLetter = firstLetter.toUpperCase();
let otherLetters = companionName.slice(1);
otherLetters = otherLetters.toLowerCase();
companionName = `${firstLetter}${otherLetters}`;

firstLetter = companionType[0];
firstLetter = firstLetter.toUpperCase();
otherLetters = companionType.slice(1);
otherLetters = otherLetters.toLowerCase();
companionType = `${firstLetter}${otherLetters}`;
alert(`Cool, so you're bringing ${companionName} the ${companionType}`);

alert("NASA has a interior design team offering to outfit your space ship.");
alert("You have a couple of options for the interior decor of your ship. Your options are: A Retro B Sleek, modern minimalism C Victorian-era Steampunk");
let spaceDecor = prompt("Which options would you like A, B, or C?");
spaceDecor = spaceDecor.toUpperCase();

let decor;
if (spaceDecor === "A"){
    decor = "Retro";
} else if (spaceDecor === "B"){
    decor = "Sleek";
} else if (spaceDecor === "C"){
    decor = "Victorian-Era";
}
alert(`${username} and ${companionName}, surfing the celestial abyss, in a ${decor} spaceship.`)
