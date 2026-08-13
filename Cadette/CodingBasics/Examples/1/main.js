
kaplay();

// download the been.png file from here:
// and place in a 'crew' folder in the same 
// folder as you main.js script

loadSprite("been", "crew/been.png");
loadSprite("portal1", "crew/portal.png");
loadSprite("portal2", "crew/portal.png");
loadSprite("textBox1", "crew/textbox2.png");
loadSprite("textBox2", "crew/textbox2.png");

setBackground(0,0,0)

let buttonSpacing = 180; //how far apart
let buttonHeight = 200; //how far down (same for both)
let buttonOffset = 80; //how far from left side of screen
let tbYOffset = -140; //how far from left side of screen
let tbXOffset = -40; //how far from left side of screen
let txtXOffset = 20
let txtYOffset = 30


//position changed by pos(80,40)
//scale changed by scale(3)
//rotation changed by rotate(30)
//color changed by color(0, 0, 255)
add([sprite("been"), pos(80,300), scale(3), color(0, 255, 0)]);

//Button 1
add([sprite("portal1"), pos(buttonOffset,buttonHeight), scale(1), color(255, 0, 0)]);

//Button 2
add([sprite("portal2"), pos(buttonOffset + buttonSpacing,buttonHeight), scale(1), color(255, 0, 0)]);

//text box
add([sprite("textBox1"), pos(buttonOffset + tbXOffset,buttonHeight + tbYOffset), scale(2), color(255,255,255)]);

//text box
add([sprite("textBox2"), pos(buttonOffset + buttonSpacing + tbXOffset,buttonHeight + tbYOffset), scale(2), color(255,255,255)]);

add([
    text("Get\nstuff\ndone",{size:24}),
    pos(buttonOffset + buttonSpacing + tbXOffset + txtXOffset,buttonHeight + tbYOffset + txtYOffset),
    color(0,0,0)  
]);

add([
    text("Goof\naround",{size:24}),
    pos(buttonOffset + tbXOffset + txtXOffset,buttonHeight + tbYOffset + txtYOffset),
    color(0,0,0)  
]);