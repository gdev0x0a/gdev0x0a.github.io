const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
const slider = document.getElementById('slider');


let posx = 0
let posy = 0

function initblack() { document.body.style.background = "#000000"; }


//Set canvas dimensions (adjust as needed)
const container = document.getElementById("canvas-container");
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;

initblack();


// Set fill style to black
ctx.fillStyle = '#black';
ctx.fillRect(0, 0, canvas.width, canvas.height / 3);
ctx.fillStyle = '#223418';//green
ctx.fillRect(0, 0, canvas.width, canvas.height / 3);
ctx.fillStyle = '#black';
ctx.fillRect(0, 0, canvas.width, canvas.height / 3);



//ctx.fillRect(canvas.width / 4, canvas.height / 4 , canvas.width/2 ,canvas.height/2);



ctx.fillStyle = '#000'; //black
ctx.fillRect(canvas.width * 3 / 4, 0, canvas.width, canvas.height);




function aboutMe(xori = 450) {

    ctx.fillStyle = '#814';//winered
    ctx.fillRect(xori, 70, canvas.width/4*2-12, canvas.height);
    ctx.fillStyle = '#000';//black
    ctx.fillRect(xori, 220, canvas.width/4*2-12, canvas.height);
    ctx.fillStyle = '#040';//green2
    ctx.fillRect(xori, 240, canvas.width/4*2-12, canvas.height);
    ctx.fillStyle = '#900';//red
    ctx.fillRect(xori, 450, canvas.width/4*2, canvas.height);
    ctx.fillStyle = '#F46';//pink
    ctx.fillRect(xori, 700, canvas.width/4*2, canvas.height);

    ctx.fillStyle = '#000';//black
    ctx.fillRect(xori, 710, canvas.width/4*2, canvas.height);
    ctx.fillStyle = '#cf6';//white
    ctx.fillRect(xori, 715, canvas.width/4*2, canvas.height);
    ctx.fillStyle = '#000'; //black
    ctx.fillRect(xori, 717, canvas.width/4*2, canvas.height);
    ctx.fillStyle = '#000';//grey
    ctx.fillRect(xori, 900, canvas.width/4*2, canvas.height);



    ctx.fillStyle = '#000'; //black
    ctx.fillRect(xori,0, canvas.width/2,70);
    ctx.strokeStyle = 'white';        // explicitly sets the text color to (default) 'white'
    ctx.lineWidth = 2;              // double of the default lineWidth
    ctx.font = '50px monospace';
    ctx.strokeText("MASUMI SAITO", 460, 50);
    
    
    
}



function drawLoop() {
    for (let i = 0; i < 20; i++) {
        let col = '';
        if (parseInt(Math.random()*10) % 2 == 0){
            col = 'white'
        }else{
            col = '#777'
        }
        
        
        ctx.strokeStyle = col;  
        ctx.font = '36px monospace';
        let y = i * 75;
        ctx.strokeText(Math.sin(i), Math.random()*10, y, 750);
        
    }
    
}


let i = 0;
let v = 0;
let n = 1;
let offs = 0;
let p = 0;
let pRect = 1;

///color for moving rectangles
let r=0;
let g=0;
let b=0;

let r2=0;
let g2=0;
let b2=0;



setInterval(() => {
    
aboutMe();
drawLoop();
var rg = ctx.createRadialGradient(700, 500, 130, 690, 420, 20);
// 2. add colors
rg.addColorStop(0, 'black');
rg.addColorStop(1, 'red');
// 3. set the fill style to the new gradient
ctx.fillStyle = rg;
// 4. now draw some filled objects; in this case just a circle
ctx.beginPath();
ctx.arc(710, 470, 110, 0, 2 * Math.PI, false);
ctx.fill();
ctx.closePath();

// 1. create the linear gradient
var rainbowGradient = ctx.createLinearGradient(canvas.width * 3 / 4, 450, canvas.width, canvas.width, canvas.height);
// 2. add colors to the gradient
rainbowGradient.addColorStop(0.25, 'red');
rainbowGradient.addColorStop(0.35, 'yellow');
rainbowGradient.addColorStop(0.4, 'green');
rainbowGradient.addColorStop(0.55, 'blue');
rainbowGradient.addColorStop(0.65, 'red');
rainbowGradient.addColorStop(0.84, '#2f6');

// 3. set the fillStyle to this new gradient
ctx.fillStyle = rainbowGradient;
ctx.fillRect(canvas.width * 3 / 4, 450, canvas.width, canvas.height);


    ctx.fillStyle = '#9f6';
    ctx.fillRect(i , v, 1 + n  , pRect );
    i += 40;
    p++;
    ctx.font = '90px monospace';

    ctx.strokeStyle = 'red';
    ctx.strokeText('|',canvas.width / 2 + i * 6 / 36 -30, canvas.height/2 + i*2 -200);
    ctx.strokeStyle = 'red';
    ctx.strokeText('◇',canvas.width / 2 + i * 6 / 24 -30, canvas.height/2 + i*2);
    ctx.font = '100px sans';
    ctx.strokeStyle = '#9f6';
    ctx.strokeText('□',canvas.width / 2 + i * 6 / 24 - 40 + Math.random()*50, canvas.height/2 + i*2 -10 + Math.random()*50);

    ctx.fillStyle = '#9f6';//green
    ctx.fillRect( canvas.width / 2 + i * 6 / 24, canvas.height/2 + i*2, v/340 , v/4 + 20);

    ctx.fillStyle = 'red';//red
    ctx.fillRect( canvas.width / 2  + i* 8 / 6*2, canvas.height/2 + i*3 -100, v/14  , -v/20/8);

    ctx.fillStyle = 'red';//red3
    ctx.fillRect( canvas.width / 2  + -i * 8 / 6*2, canvas.height/2 + i*3 -100, v/14  , -v/20/8);


    ctx.fillStyle = '#9f6';//green2
    ctx.fillRect( canvas.width / 2 + i * 6 / 24 -20, canvas.height/2 + i*2 -20, 40  , v/20/8);



    if (p >= 450){
        p = 0;
    }

    if(i >= canvas.width ){
        v += 75;
        i = 0;
    }
    if(v >= canvas.height){
        offs = offs + 10; 
        v = 0;
        i = 10;
        n = n * 100;

    }
    if (offs > 20){
        n = 1;
        pRect = pRect + 100;
    }

    
    let randr = Math.random()*255;
    let randg = Math.random()*255;
    let randb = Math.random()*255;
    let randr2 = Math.random()*255;
    let randg2 = Math.random()*255;
    let randb2 = Math.random()*255;       

        if (randr < 36){
        r = r + randr;
        }
        if (r > 254){r = 0; }


        if (randg < 36){
        g = g + randg;
        }
        if (g > 254){g = 0; }


        if (randb < 36){
        b = b + randb;
        }
        if (b > 254){b = 0; }
                        
        ctx.fillStyle = `rgb(${parseInt(r)},${parseInt(g)},${parseInt(b)})`;
        ctx.fillRect(canvas.width/2, 0, canvas.width/4, canvas.height/4);

        if (randr2 < 16){
            r2 = r2 + randr2;
            }
            if (r2 > 254){r2 = 0; }
    
    
            if (randg2 < 16){
            g2 = g2 + randg2;
            }
            if (g2 > 254){g2 = 0; }
    
    
            if (randb2 < 16){
            b2 = b2 + randb2;
            }
            if (b2 > 254){b2 = 0; }

                            
        ctx.fillStyle = `rgb(${parseInt(r2)},${parseInt(g2)},${parseInt(b2)})`;
        ctx.fillRect(canvas.width/2, 230, canvas.width/4, canvas.height/4);

        
        ctx.fillStyle = `rgb(${parseInt(r2+40)},${parseInt(g2+40)},${parseInt(b2+40)})`;
        ctx.beginPath();
        ctx.moveTo(canvas.width/2 +150, 50);
        ctx.lineTo(canvas.width/2+130, 220);
        ctx.lineTo(canvas.width/2+220, 370);
        ctx.lineTo(canvas.width/2+290, 150);
        ctx.fill();
        ctx.fillStyle = `rgb(${parseInt(r-40)},${parseInt(g-40)},${parseInt(b-40)})`;
        ctx.beginPath();
        ctx.moveTo(canvas.width/2+350, 150);
        ctx.lineTo(canvas.width/2+300, 350);
        ctx.lineTo(canvas.width/2+290, 50);
        ctx.lineTo(canvas.width/2+180, 450);
        ctx.fill();

        ctx.fillStyle = `rgb(${parseInt(r-40)},${parseInt(g-40)},${parseInt(b-40)})`;
        ctx.beginPath();
        ctx.moveTo(canvas.width/2+380, 420);
        ctx.lineTo(canvas.width/2+20, 170);
        ctx.lineTo(canvas.width/2+220, 370);
        ctx.fill();




}, 1);

//resize window
window.addEventListener("resize", function setCanvassize(){
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
});

// Update slider on input change
slider.addEventListener('input', updateSlider);


// Now you can draw other elements on the black background
// ... your drawing code here