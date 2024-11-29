let paintColor = document.getElementById("inpColor");
let lineWidth = document.getElementById("inpWeidth");
let cnvs = document.getElementById("cnvs");
let ctx = cnvs.getContext("2d");
let img = document.querySelector("img");
let isMouseDown = false;
let myColor = "black";
let myWeight = 5;

cnvs.width = 800;
cnvs.height = 500;




// cnvs.addEventListener("mousemove", function(event) {
//     ctx.fillStyle = myColor;
//     ctx.strokeStyle = myColor;

//     ctx.lineTo(event.clientX, event.clientY);
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(event.clientX, event.clientY, lineWidth/2, 0, Math.PI*2);
//     ctx.fill()
//     ctx.beginPath();
//     ctx.moveTo(event.clientX, event.clientY);

// })

cnvs.addEventListener('mousemove', function (event) {
    console.log(event);
    
 ctx.fillStyle = myColor
 ctx.strokeStyle = myColor
 ctx.lineTo(event.clientX - 500, event.clientY - 10)
 ctx.stroke()
 ctx.beginPath()
 ctx.arc(event.clientX - 500, event.clientY - 10, myWeight, 0, Math.PI * 2)
 ctx.fill()
 ctx.beginPath()
 ctx.moveTo(event.clientX - 500, event.clientY - 10)
})

paintColor.addEventListener("change", () => {
    myColor = paintColor.value;
})

lineWidth.addEventListener("change", () => {
    myWeight = lineWidth.value;
    document.getElementById("showWeight").innerText = Math.floor(myWeight)
})



function canvasFill() {
    ctx.fillStyle = myColor;
    ctx.fillRect(0, 0, 800, 500);
}

function canvasReset() {
    ctx.reset();
}

function ChristmasTree() {
    ctx.drawImage(img, 0, 0)
}