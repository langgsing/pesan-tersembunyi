const cursor = document.querySelector(".cursor");
let isDragging = false;

window.addEventListener("touchstart", function(e){
    isDragging = true;
    cursor.style.left = (e.touches[0].clientX - 100) + "px";
    cursor.style.top = (e.touches[0].clientY - 100) + "px";
});

window.addEventListener("touchmove", function(e){
    if(isDragging){
        e.preventDefault();
        cursor.style.left = (e.touches[0].clientX - 100) + "px";
        cursor.style.top = (e.touches[0].clientY - 100) + "px";
    }
});

window.addEventListener("touchend", function(){
    isDragging = false;});
