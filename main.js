var last_position_of_mouse_x;
var last_position_of_mouse_y;
height = screen.height;
width = screen.width;
newwidth = screen.width - 75;
newheight = screen.height - 300;
mouseEvent = "";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 2;
var current_position_of_mouse_x;
var current_position_of_mouse_y;
var current_position_of_touch_x;
var current_position_of_touch_y;
var last_position_of_touch_x;
var last_position_of_touch_y;

canvas.addEventListener("mouseDown", mymouseDown);
function mymouseDown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemove" , mymousemove);
function mymousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x and y coordinates =  ");
    console.log("x = " + last_position_of_mouse_x + "y = " +last_position_of_mouse_y);
    ctx.moveTo(last_position_of_mouse_x , last_position_of_mouse_y);
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_mouse_x + "y = " +current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x , current_position_of_mouse_y);
    ctx.stroke();
    }
    last_position_of_mouse_x = current_position_of_mouse_x
    last_position_of_mouse_y = current_position_of_mouse_y
}
canvas.addEventListener("mouseUp" , mymouseup)
function mymouseup(e) {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseLeave" , mymouseleave)
function mymouseleave(e) {
    mouseEvent = "mouseLeave";
}
if(width<992) {
    document.getElementById("myCanvas").width = newwidth
    document.getElementById("myCanvas").height = newheight
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart" , mytouchstart);
function mytouchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop
}
canvas.addEventListener("touchmove" , mytouchmove);
function mytouchmove(e) {
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("Last position of x and y coordinates =  ")
    console.log("x = " + last_position_of_touch_x + "y = " +last_position_of_touch_y);
    ctx.moveTo(last_position_of_touch_x , last_position_of_touch_y);
    console.log("Current position of x and y coordinates = ");
    console.log("x = " + current_position_of_touch_x + "y = " +current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x , current_position_of_touch_y);
    ctx.stroke();
    last_position_of_touch_x = current_position_of_touch_x
    last_position_of_touch_y = current_position_of_touch_y
}

function clear_area() {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
}

