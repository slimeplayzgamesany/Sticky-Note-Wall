const canvas1=document.getElementById("canvas1"); //"object"
console.dir(canvas1);
const canvas1Width=canvas1.width=1500;
const canvas1Height=canvas1.height=800;

const ctx=canvas1.getContext("2d");
console.dir(ctx);

//Creating a rectangle.
// ctx.fillStyle="red";
// ctx.fillRect(0,0,20,20);
// ctx.fillStyle="rgba(20,100,50,1)";
// ctx.fillRect(320,250,20,20);

// ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
// ctx.fillRect(Math.random()*canvas1.width*0.95,Math.random()*canvas1.height*0.95,20,20);

//!Creating function
//Converting a function into loops.
function animate(){
    ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    ctx.fillRect(Math.random()*canvas1.width*0.95,Math.random()*canvas1.height*0.95,20,20);
    canvas1.style.boxShadow=`0 0 ${10+Math.random()*50}px ${10+Math.random()*50}px rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    requestAnimationFrame(()=>{
        setTimeout(animate,1000)
    }); //Creates infinite loop
};
animate();
