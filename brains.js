window.onload = () => {

    // AUDIOO

    let meme1 = new Audio('./sounds/youarenotfine.weba');
    let meme2 = new Audio('./sounds/bruh.m4a');
    let meme3 = new Audio('./sounds/goat-scream.m4a');
    let meme4 = new Audio('./sounds/minecraf-drinking.m4a');
    let meme5 = new Audio('./sounds/minecraft-eating.weba');
    let meme6 = new Audio('./sounds/nope.m4a');
    let meme7 = new Audio('./sounds/plankton_moaning.mp3');
    let meme8 = new Audio('./sounds/social credit.m4a');
    let meme9 = new Audio('./sounds/thinking.weba');
    let meme10 = new Audio('./sounds/vine-boom.weba');
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

// // UM JAVASCRIPT IS STILL PLAYING THE SOUND WHWNWVER I MAKE A ChannelMergerNode, IDK WHY. BUT NOW I KNOW WHAT SOUND IT WAS INITIALLY HEHHHHH
// {
//     document.getElementById("clickme").onclick = play; 


//     function play() {
// console.log("Sound played");
// let mySound = new Audio('./sounds/you-lose.m4a');
// mySound.play();
//     }

// }

document.getElementById("1").onclick = play; 

 function play() {
console.log("Sound played");
let mySound = new Audio('./sounds/youarenotfine.weba');
mySound.play();
    }
}