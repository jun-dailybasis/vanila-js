const title = document.getElementById("title");

function handleResize(event){
    console.log(event)
}
//whenever the component calls the event, 
// this function with event agrument will be called;

window.addEventListener("resize", handleResize)
//call the function >>  handleResize
//call the function now >> handleResize();
let clickcheck = false;

function handleClick(){
    if(clickcheck){
        title.style.color = "black"
        clickcheck = false;
    }
    else {
        title.style.color = "red"
        clickcheck = true;
    }
} 
const CLICKED_CLASS = "clicked";
function handleClick2(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    } else{
        title.classList.remove(CLICKED_CLASS)
    }
} 
function handleOffline(){
    console.log("This computer is offline..");
}
function handleOnline(){
    console.log("This computer is online.."); 
}
window.addEventListener("click", handleClick2)
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
