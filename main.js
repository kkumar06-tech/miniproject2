let boxes=document.querySelectorAll(".butt");
let resetbt=document.querySelector("#reset");
let msg=document.querySelector("#sieger");
let turnk = true;

const pattern= [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",()=> {
        console.log("box clicked");
        if(turnk){
            box.innerText="K";
            turnk=false;
        }else{
            box.innerText="A";
            turnk=true;
        }
        box.disabled=true;

      checkP();

    });
});

 const disbutton=() =>{
for(let box of boxes){
    box.disabled=true;
}

 }

 const enabutton = ()=>{
    turnk=true;
    msg.style.display="none";
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }


 }

const decresult= (winner)=>{
msg.innerText=`Winner is ${winner}.`
msg.style.display="block";
disbutton();
}

const checkP= ()=>{
    for(let patt of pattern){
     // console.log(boxes[patt[0]],boxes[patt[1]],boxes[patt[2]]);  
      let val1=boxes[patt[0]].innerText;
      let val2=boxes[patt[1]].innerText;
      let val3=boxes[patt[2]].innerText;
if(val1!="" && val2!="" && val3!=""){
 if(val1===val2 && val2===val3){

console.log("winner",val1);
decresult(val1);


 }
}

resetbt.addEventListener("click",enabutton);

     


    }
}