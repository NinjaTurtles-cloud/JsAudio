//GLOBALS
let CANVAS;
//let SPACING;

function main() {
    CANVAS = document.getElementById("myCanvas");
    fitToScreen();
    //window.addEventListener('resize', fitToScreen);
    drawScene();
}

function drawNote(ctx,location){
    ctx.fillStyle="black";
    ctx.strokeStyle="black";
    ctx.lineWidth=1;
    ctx.beginPath();
    let radius=CANVAS.height/20;
    ctx.arc(location.x,location.y,radius,0,Math.PI*2);
    ctx.fill();
    ctx.stroke();  
}


function drawScene() {
    let ctx=CANVAS.getContext("2d");
    let spacing=CANVAS.height/20;
    ctx.strokeStyle="black";
    ctx.lineWidth=1;
    for(let i=-2 ; i<=2 ; i++){
        let y = CANVAS.height/2+i*spacing*2;
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(CANVAS.width,y);
        ctx.stroke();
    }
    /*let location={
        x:CANVAS.Width/2,
        y:CANVAS.Height/2
    }
    drawNote(ctx, location);*/
}

function fitToScreen() {
    CANVAS.widht=window.innerWidth;
    CANVAS.height=window.innerHeight;
    //SPACING=CANVAS.height/20;
    //drawScene();
}
