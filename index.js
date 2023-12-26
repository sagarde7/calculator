let inputBtn=document.querySelector("#input");
let buBtn=document.querySelectorAll("button");
let s="";
let p;
buBtn.forEach((buBtn)=>{
    
    buBtn.addEventListener("click",()=>{
        if(buBtn.textContent==="AC"){
            s="";
            inputBtn.value="";
        }
        else if(buBtn.textContent==="DE"){
            s=s.toString().slice(0,-1);
            inputBtn.value=s;
            
        }
        else if(buBtn.textContent==='='){
            inputBtn.value=eval(inputBtn.value);
            
        }
        else{
        s+=(buBtn.textContent);
        inputBtn.value=s;
        }
    })
    
})