const progress= document.getElementById('progress');
const prev= document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');


var currentactive=1;
next.addEventListener('click',()=> {
    currentactive++;
    if(currentactive>circles.length+1){
       currentactive=circles.length+1;
    }
    console.log(currentactive);
    update();
})
prev.addEventListener('click',()=>{
    currentactive--;
    if(currentactive==1){
        currentactive=1;

    }
    update();
})

function update(){
    //update active class in circle
 circles.forEach((circle,index)=>{
     if(index<currentactive){
     circle.classList.add('active');}
     else{
        circle.classList.remove('active');
     }
 })
    //update progress bar
var activecircle= document.querySelectorAll('.active');
 progress.style.width= ((activecircle.length-1)/(circles.length-1))*100 + '%' ;

    //change the button enabled and disabled state
if(currentactive==1){
    prev.disabled=true;
}else if(currentactive==circles.length){
next.disabled=true;
}else{
    prev.disabled=false;
    next.disabled=false;
}

}
