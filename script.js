
const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", function(e){
 cursor.style.left = (e.x-100)+"px";
 cursor.style.top = (e.y-100)+"px";
})

window.addEventListener("touchmove", function(e){
 cursor.style.left = (e.touches[0].clientX-100)+"px";
 cursor.style.top = (e.touches[0].clientY-100)+"px";
})
