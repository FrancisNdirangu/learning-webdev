
var button_index = [0,1,2,3,4,5,6]; 
for (const i of button_index){
document.querySelectorAll('.drum')[i].addEventListener('click',clickResponse);
}
function clickResponse() {
    alert('I got clicked');
}