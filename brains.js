window.onload = () => {
const prompts = [
"When the food is 1000 degrees but you're too hungry to care",
"When the water is just at the chuggable temperature",
"POV: You just finished the exams and then someone asks about the back page",
"POV: Your brand new phone decided to backflip off the bed and broke", 
"When your seat partner asks the teacher a question they just answered",
"When someone says they 'don't like music'",
"POV: The guests don't mind you eating first",
"POV: You decided to feed a baby a lemon",
"POV: You smelled the milk to see if it's spoiled",
"POV: You just gave the wrong directions to a tourist",
"POV: You're calculating how long you can stay outside without your parents noticing",
"When someone asks 'Are you sure you're not asleep' after you responded for the third time in a row",
"POV: The food the waiter was holding was actually yours",
"POV: Your sibling lets you eat the first bite of pizza",
"POV: The soap dripped down your sleeve into your shirt",
"POV: You're late to class and the teacher isn't even there",
"The sound everyone collectively makes when they see a helicopter",
"POV: Your code worked on first try",
"POV: When the annoying cousin ends up in your room and you just wanted to nap",
"POV: Someone pulled your seat back when you stood up and tried to sit back down",
"POV: You listen to your voice in a video",
"When the 1 minute youtube video has a 30 second unskippable ad",
"When you show your mom a funny meme and she starts swiping",
"POv: The cockroach you were avoiding starts flying"
];

let current;

function pick() {
    let index = Math.floor(Math.random() * prompts.length);
    let current = prompts[index]; 
document.getElementById("prompt").innerText = current;
    console.log(current);
}

pick();

console.log(prompts);
    // AUDIOO

    let meme1 = new Audio('./sounds/youarenotfine.weba');
    let meme2 = new Audio('./sounds/bruh.m4a');
    let meme5 = new Audio('./sounds/goat-scream.m4a');
    let meme3 = new Audio('./sounds/minecraf-drinking.m4a');
    let meme4 = new Audio('./sounds/minecraft-eating.weba');
    let meme7 = new Audio('./sounds/nope2.mp3');
    let meme6 = new Audio('./sounds/plankton_moaning.mp3');
    let meme8 = new Audio('./sounds/social credit.m4a');
    let meme9 = new Audio('./sounds/thinking.weba');
    let meme10 = new Audio('./sounds/vine-boom.mp3');
    let meme11 = new Audio('./sounds/wow.m4a');
    let meme12 = new Audio('./sounds/you-lose.m4a');

    // ONCLICK FUNCTIONS
document.getElementById("1").onclick = play1;
document.getElementById("2").onclick = play2;
document.getElementById("3").onclick = play3;
document.getElementById("4").onclick = play4;
document.getElementById("5").onclick = play5;
document.getElementById("6").onclick = play6;
document.getElementById("7").onclick = play7;
document.getElementById("8").onclick = play8;
document.getElementById("9").onclick = play9;
document.getElementById("10").onclick = play10;
document.getElementById("11").onclick = play11;
document.getElementById("12").onclick = play12;



// SCRIPTING TIMEEEE(WHAT IS A SCRIPT KIDDIE?!)
// OH DANG, SCRIPT KIDDIE IS A SLUR

function play1() {
console.log("They ask you how you are and you say that you're fine but you're not fine but you just don't wanna get into it cus they would never understand");
meme1.currentTime = 0;
meme1.play();
pick();

}

function play2() {
console.log("Khaby Lame thinks that what you just said was really dumb, like really really dumb");
meme2.currentTime = 0;
meme2.play();
pick();
}

function play3() {

console.log("Slow down with the chugging vro");
meme3.currentTime = 0;
meme3.play();
pick();

}

function play4() {
     console.log("Whoa, all these steaks all for you?");
     meme4.currentTime = 0;
    meme4.play();
    pick();
}

function play5() {
    console.log("This goat really likes to scream");
   meme5.currentTime = 0;
    meme5.play();
    pick();
}

function play6() {
  
    console.log("Very distressed plankton");
    meme6.currentTime = 0;
    meme6.play();
    pick();
}

function play7() {
    meme7.currentTime = 0;
  console.log("nope");
  meme7.play();
  pick();

}

function play8() {
console.log("YOU LOST SO MUCH OF YOUR SOCIAL CREDIT");
meme8.currentTime = 0;
meme8.play();
pick();

}

function play9() {
console.log("You have confused me");
meme9.cuttentTime = 0;
meme9.play();
pick();

}


function play10() {
console.log("Dwayne Raises his eyebrow at whatever it was you just said");
meme10.currentTime = 0;
meme10.play();
pick();

}

function play11() {
console.log("WOW, SO MUCH WOW");
meme11.currentTime = 0;
meme11.play();
pick();

}


function play12() {
console.log("You would have probably lost all your money if you were on 'The Price is Right' rn");
meme12.currentTime = 0;
meme12.play();
pick();
}

// // UM JAVASCRIPT IS STILL PLAYING THE SOUND WHWNWVER I MAKE A ChannelMergerNode, IDK WHY. BUT NOW I KNOW WHAT SOUND IT WAS INITIALLY HEHHHHH
// {
//     document.getElementById("clickme").onclick = play; 


//     function play() {
// console.log("Sound played");
// let mySound = new Audio('./sounds/you-lose.m4a');
// mySound.play();
//     }

// }

// document.getElementById("1").onclick = play; 

//  function play() {
// console.log("Sound played");
// let mySound = new Audio('./sounds/youarenotfine.weba');
// // mySound.play();
//     }
}